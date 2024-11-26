
export default function ProductItemSkeleton() {
    return (
        <div className="grid grid-cols-12 gap-5 w-full p-5 bg-white border rounded-lg">
            <div className="animate-pulse flex col-span-12 sm:col-span-3 justify-center">
                <div className="rounded bg-slate-300 h-28 w-full md:w-28"></div>
            </div>
            <div className="animate-pulse gap-5 col-span-12 sm:col-span-9">
                <div className="rounded bg-slate-300 h-5 w-1/3 mb-2"></div>
                <div className="flex-1 space-y-3 py-1">
                    <div className="h-5 bg-slate-300 rounded"></div>
                    <div className="h-5 bg-slate-300 rounded"></div>
                    <div className="h-5 bg-slate-300 rounded w-20"></div>
                </div>
            </div>
        </div>
    )
}