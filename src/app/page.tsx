'use client'

import FilterBar from "@/components/FilterBar";
import MainHeader from "@/components/Header";
import ProductList from "@/components/ProductList";
import { getProductByCategory, getProductCategory, getProducts } from "@/services/products";
import { Product } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import { useFilterSort } from "./hooks/useFilterSort";
import Pagination from "@/components/Pagination";
import { usePagination } from "./hooks/usePagination";

const initialProducts = {
  products: [],
  limit: 5,
  skip: 0,
  total: 0
}

export default function Home() {

  const {
    selectedCategory,
    selectedSort,
    setSelectedCategory,
    handleChangeSort,
    handleClearFilter
  } = useFilterSort();

  const {
    limit,
    skip,
    currentPage,
    handleNextPage,
    handlePrevPage,
    resetPagination,
  } = usePagination();


  const params = new URLSearchParams();

  params.append('limit', limit.toString());
  params.append('skip', skip.toString());

  if (selectedSort) {
    params.append('sortBy', selectedSort.split('-')[0]);
    params.append('order', selectedSort.split('-')[1]);
  }

  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getProductCategory(),
  });

  const { data: products = initialProducts } = useQuery({
    queryKey: ['products', selectedSort, skip],
    queryFn: () => getProducts(params),
    enabled: selectedCategory === ''
  });

  const { data: productsByCategory = initialProducts } = useQuery({
    queryKey: ['productsByCategory', selectedCategory, selectedSort, skip],
    queryFn: () => getProductByCategory(selectedCategory, params),
    enabled: selectedCategory !== '',
  });

  const handleChangeCategory = (category: string) => {
    setSelectedCategory(category);
    resetPagination();
  }

  const displayProduct = selectedCategory !== '' ? productsByCategory.products : products.products;

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
          onChangeCategory={handleChangeCategory}
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
        <Pagination
          limit={limit}
          currentPage={currentPage}
          onPrev={handlePrevPage}
          onNext={handleNextPage}
          total={selectedCategory ? productsByCategory.total : products.total}
        />
      </div>
    </>
  );
}
