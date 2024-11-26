import { Product } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

type ProductListProps = {
    product: Product
}

export default function ProductList({
    product
}: ProductListProps) {
    return (
        <Link href={`/details/${product.id}`}>
            <div className="grid grid-cols-12 gap-5 border rounded-lg bg-white p-5 hover:shadow-md">
                <div className="col-span-12 sm:col-span-3 flex justify-center items-center">
                    <Image
                        src={product.images[0]}
                        className="h-28 w-auto object-contain"
                        alt={`product-${product.id}-images`}
                        height={50}
                        width={50}
                        loading="lazy"
                    />
                </div>
                <div className="col-span-12 sm:col-span-9">
                    <div className="text-slate-800 font-bold text-xl mb-2">{product.title}</div>
                    <p className="text-slate-600 text-sm line-clamp-2">{product.description}</p>
                    <div className="flex items-center gap-1 my-3">
                        <div className="text-slate-800 font-bold text-xl">{`$ ${product.price}`}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
