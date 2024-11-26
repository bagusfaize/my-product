type PaginationProps = {
    currentPage: number,
    total: number,
    limit: number,
    onNext: () => void,
    onPrev: () => void,
}

export default function Pagination({
    currentPage,
    total,
    limit,
    onNext,
    onPrev,
}: PaginationProps) {

    const disablePrev = currentPage === 1;

    const totalPage = Math.ceil(total / limit) || 1;

    const disableNext = currentPage === totalPage;

    return (
        <div className="flex justify-between items-center">
            <div className="text-sm font-semibold text-slate-700">
                {`Page ${currentPage} of ${totalPage}`}
            </div>
            <nav aria-label="Page navigation">
                <ul className="flex items-center -space-x-px h-11 text-sm">
                    <li>
                        <button
                            disabled={disablePrev}
                            onClick={onPrev}
                            className="flex items-center justify-center px-3 h-11 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed"
                        >
                            <span className="sr-only">Previous</span>
                            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button className="flex items-center justify-center px-3 h-11 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">{currentPage}</button>
                    </li>
                    <li>
                        <button
                            onClick={onNext}
                            disabled={disableNext}
                            className="flex items-center justify-center px-3 h-11 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed"
                        >
                            <span className="sr-only">Next</span>
                            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
