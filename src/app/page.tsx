'use client'

import MainHeader from "@/components/Header";
import ProductList from "@/components/ProductList";
import { getProducts } from "@/services/products";
import { Product } from "@/types/type";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data = [] } = useQuery({ queryKey: ['products'], queryFn: () => getProducts() });

  return (
    <>
      <MainHeader>
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900">Explore Our<div className="text-blue-600">Featured Products</div></h1>
      </MainHeader>
      <div className="flex flex-col gap-4">
        {data.map((product: Product) => (
          <ProductList
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}
