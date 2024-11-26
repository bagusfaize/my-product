'use client'

import FilterBar from "@/components/FilterBar";
import MainHeader from "@/components/Header";
import ProductList from "@/components/ProductList";
import { getProductByCategory, getProductCategory, getProducts } from "@/services/products";
import { Product } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import { useFilterSort } from "./hooks/useFilterSort";

export default function Home() {

  const {
    selectedCategory,
    selectedSort,
    setSelectedCategory,
    handleChangeSort,
    handleClearFilter
  } = useFilterSort();

  const params = new URLSearchParams();

  if (selectedSort) {
    params.append('sortBy', selectedSort.split('-')[0]);
    params.append('order', selectedSort.split('-')[1]);
  }

  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getProductCategory(),
  });

  const { data: products = [] } = useQuery({
    queryKey: ['products', selectedSort],
    queryFn: () => getProducts(params),
    enabled: selectedCategory === ''
  });

  const { data: productsByCategory = [] } = useQuery({
    queryKey: ['productsByCategory', selectedCategory, selectedSort],
    queryFn: () => getProductByCategory(selectedCategory, params),
    enabled: selectedCategory !== '',
  });

  const displayProduct = selectedCategory !== '' ? productsByCategory : products;

  return (
    <>
      <MainHeader>
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900">
          Explore Our<div className="text-blue-600">Featured Products</div>
        </h1>
      </MainHeader>
      <div className="flex flex-col gap-4">
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          selectedSort={selectedSort}
          onChangeCategory={setSelectedCategory}
          onChangeSort={handleChangeSort}
          onClearFilter={handleClearFilter}
          isFiltered={selectedCategory !== '' || selectedSort !== ''}
        />
        {displayProduct.map((product: Product) => (
          <ProductList
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}
