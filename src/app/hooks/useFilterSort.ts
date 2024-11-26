import { useState } from "react";

export const useFilterSort = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [selectedSort, setSelectedSort] = useState<string>('');

    const handleChangeSort = (sort: string) => {
        setSelectedSort(sort);
      }
    
      const handleClearFilter = () => {
        setSelectedCategory('');
        setSelectedSort('');
      }

      return {
        selectedCategory,
        setSelectedCategory,
        selectedSort, 
        setSelectedSort,
        handleChangeSort,
        handleClearFilter,
      }

}