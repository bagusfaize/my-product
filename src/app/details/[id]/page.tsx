'use client'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import MainHeader from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { getProductDetails } from "@/services/products";
import { Product } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { Carousel } from "react-responsive-carousel";
import ProductDetailSkeleton from "@/components/skeletons/ProductDetailSkeleton";

const initialProduct: Product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    images: [],
    availabilityStatus: '',
}

export default function ProductDetailsPage() {
    const params = useParams<{ id: string }>()
    const id = params.id;
    const { data: product = initialProduct, isLoading } = useQuery({ queryKey: ['product', id], queryFn: () => getProductDetails(id) });

    return (
        <div>
            <MainHeader>
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900">Product Details</h1>
            </MainHeader>
            <div className="border rounded-lg bg-white p-5">
                {isLoading ?
                    <ProductDetailSkeleton />
                    :
                    <div>
                        <div className="flex gap-2 items-center mb-5">
                            <Link href={'/'}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                    <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                                </svg>
                            </Link>
                            <h1 className="text-lg font-bold tracking-tight text-slate-900">{product.title}</h1>
                        </div>
                        <div>
                            <Carousel autoPlay showStatus={false}>
                                {product?.images?.map((image: string) => (
                                    <div
                                        key={image}
                                        className="bg-blue-50 rounded-lg h-52"
                                    >
                                        <Image
                                            src={image}
                                            className="h-52 w-52 object-contain"
                                            alt={`product-${image}-images`}
                                            height={50}
                                            width={50}
                                            loading="eager"
                                        />
                                    </div>
                                ))}
                            </Carousel>
                            <div className="mb-5">
                                <h5 className="font-bold text-xl text-slate-800">{`$ ${product.price}`}</h5>
                            </div>
                            <div className="mb-5 flex">
                                <span className="flex gap-1 items-center bg-yellow-100 text-yellow-700 border border-yellow-700 text-sm font-medium me-2 px-3 py-1 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                    </svg>
                                    {product.rating}
                                </span>
                                <span className={`text-sm font-medium me-2 px-3 py-1 rounded-lg ${product.availabilityStatus === 'In Stock' ? 'bg-blue-100 text-blue-800 border border-blue-800' : 'bg-red-100 text-red-800 border border-red-800'}`}>
                                    {product.availabilityStatus}
                                </span>
                            </div>
                            <div className="mb-5">
                                <h5 className="font-bold text-sm text-slate-800">Description</h5>
                                <p className="text-slate-600">{product.description}</p>
                            </div>
                            <div className="mb-5">
                                <h5 className="font-bold text-sm text-slate-800">Warranty</h5>
                                <p className="text-slate-600">{product.warrantyInformation}</p>
                            </div>
                            <div className="mb-5">
                                <h5 className="font-bold text-sm text-slate-800">Shipping Information</h5>
                                <p className="text-slate-600">{product.shippingInformation}</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}