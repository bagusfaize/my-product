
export default function DetailPageSkeleton() {
    return (
        <div className="w-full pt-1">
            <div className="animate-pulse flex space-x-4 pt-2 pb-5">
                <div className="rounded bg-slate-300 h-5 w-5"></div>
                <div className="flex-1 space-y-6">
                    <div className="h-5 bg-slate-300 w-1/2 rounded"></div>
                </div>
            </div>
            <div className="animate-pulse flex space-x-4 pb-10">
                <div className="rounded bg-slate-300 h-52 w-full"></div>
            </div>
            <div className="animate-pulse flex space-x-4 pb-5">
                <div className="rounded bg-slate-300 h-5 w-20"></div>
            </div>
            <div className="animate-pulse flex space-x-3 pb-8">
                <div className="rounded bg-slate-300 h-5 w-20"></div>
                <div className="rounded bg-slate-300 h-5 w-20"></div>
            </div>
            <div className="animate-pulse flex flex-col gap-3 pb-8">
                <div className="rounded bg-slate-300 h-5 w-20"></div>
                <div className="flex-1 space-y-3 py-1">
                    <div className="h-5 bg-slate-300 rounded"></div>
                    <div className="space-y-2">
                        <div className="grid grid-cols-5 gap-4">
                            <div className="h-5 bg-slate-300 rounded col-span-4"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="animate-pulse flex flex-col gap-3 pb-8">
                <div className="rounded bg-slate-300 h-5 w-20"></div>
                <div className="flex-1 space-y-3 py-1">
                    <div className="h-5 bg-slate-300 rounded"></div>
                </div>
            </div>
            <div className="animate-pulse flex flex-col gap-3">
                <div className="rounded bg-slate-300 h-5 w-20"></div>
                <div className="flex-1 space-y-3 py-1">
                    <div className="h-5 bg-slate-300 rounded"></div>
                </div>
            </div>
        </div>
    )
}
