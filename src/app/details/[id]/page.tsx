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
    const { data: product = initialProduct } = useQuery({ queryKey: ['product', id], queryFn: () => getProductDetails(id) });

    return (
        <div>
            <MainHeader>
                <h1 className="mb-4 text-xl font-extrabold tracking-tight text-slate-900 lg:text-3xl">Product Details</h1>
            </MainHeader>
            <div className="border rounded-lg bg-white p-5">
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
                                className="bg-blue-50 rounded-lg"
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
                        <span className={`text-sm font-medium me-2 px-3 py-1 rounded-full ${product.availabilityStatus === 'In Stock' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {product.availabilityStatus}
                        </span>
                    </div>
                    <div className="mb-5">
                        <h5 className="font-bold text-sm text-slate-800">Description</h5>
                        <p className="text-slate-600">{product.description}</p>
                    </div>
                    <div className="mb-5">
                        <h5 className="font-bold text-sm text-slate-800">Price</h5>
                        <p className="text-slate-600">{`$ ${product.price}`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
