type FilterBarProps = {
    categories: string[],
    selectedCategory: string,
    selectedSort: string,
    isFiltered: boolean,
    onChangeCategory: (category: string) => void,
    onChangeSort: (category: string) => void,
    onClearFilter: () => void,
}


export default function FilterBar({
    categories = [],
    selectedCategory,
    selectedSort,
    onChangeCategory,
    onChangeSort,
    isFiltered,
    onClearFilter,
}: FilterBarProps) {

    const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => onChangeCategory(e.target.value);

    const handleChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => onChangeSort(e.target.value);

    return (
        <div className="grid grid-cols-12 gap-3 items-end">
            <div className="col-span-12 sm:col-span-4">
                <div className="w-full">
                    <div className="text-sm font-semibold mb-3">Category</div>
                    <div className="relative">
                        <select
                            onChange={handleChangeCategory}
                            value={selectedCategory}
                            className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                        >
                            <option hidden>Select category</option>
                            {categories.map(cat => (
                                <option value={cat} key={cat}>{cat}</option>
                            ))}
                        </select>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">
                <div className="w-full">
                    <div className="text-sm font-semibold mb-3">Sort</div>
                    <div className="relative ">
                        <select
                            onChange={handleChangeSort}
                            value={selectedSort}
                            className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                        >
                            <option hidden>Sort by</option>
                            <option value="price-asc">Cheapest</option>
                            <option value="price-desc">Most Expensive</option>
                        </select>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                        </svg>
                    </div>
                </div>
            </div>
            {isFiltered &&
                <div className="col-span-12 sm:col-span-2 flex justify-end sm:justify-normal">
                    <button
                        onClick={onClearFilter}
                        className="flex gap-1 items-center px-3 py-2 text-sm font-medium text-center text-red-500 bg-white border border-slate-200 rounded-md"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        Clear
                    </button>

                </div>
            }
        </div>
    )
}
