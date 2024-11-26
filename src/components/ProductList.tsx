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
            <div className="grid grid-cols-12 gap-5 border rounded-lg bg-white p-5">
                <div className="col-span-3 flex justify-center items-center">
                    <Image
                        src={product.images[0]}
                        className="h-28 w-auto"
                        alt={`product-${product.id}-images`}
                        height={50}
                        width={50}
                        loading="lazy"
                    />
                </div>
                <div className="col-span-9">
                    <div className="text-slate-800 font-bold text-xl mb-2">{product.title}</div>
                    <p className="text-slate-600 text-sm">{product.description}</p>
                    <div className="flex items-center gap-1 my-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <div className="text-slate-800 font-bold text-xl">{product.price}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
