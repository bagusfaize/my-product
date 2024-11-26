import { useState } from "react"

export const usePagination = () => {
    const [limit] = useState(5);
    const [skip, setSkip] = useState(0);
    const [currentPage, setCurrentPage] = useState(1)

    const handleNextPage = () => {
        setCurrentPage((prev) => prev + 1)
        setSkip((prev) => prev + limit);
    }

    const handlePrevPage = () => {
        setCurrentPage((prev) => prev - 1)
        setSkip((prev) => prev - limit);
    }

    const resetPagination = () => {
        setSkip(0);
        setCurrentPage(1);
    }

    return {
        limit,
        skip,
        currentPage,
        handleNextPage,
        handlePrevPage,
        resetPagination,
    }

}