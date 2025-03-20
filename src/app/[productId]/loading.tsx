import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailsLoading() {
    return (
        <div className="min-h-screen container mx-auto py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 space-x-20">
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-4 w-full max-w-2xl mx-auto">
                        <Skeleton className="w-full h-96" />
                        <div className="flex justify-evenly space-x-2">
                            <Skeleton className="w-64 h-24 rounded-lg" />
                            <Skeleton className="w-64 h-24 rounded-lg" />
                            <Skeleton className="w-64 h-24 rounded-lg" />
                            <Skeleton className="w-64 h-24 rounded-lg" />

                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-6">
                    <div className="flex items-center space-x-4">
                        {Array.from({ length: 5 }, (v, i) => <Skeleton key={i} className="w-4 h-4" />)}
                    </div>
                    <Skeleton className="w-96 h-8" />
                    <div className="space-y-1">
                        <Skeleton className="w-96 h-5" />
                        <Skeleton className="w-80 h-5" />
                        <Skeleton className="w-64 h-5" />
                    </div>
                    <Skeleton className="w-24 h-16" />
                    <div className="flex items-center space-x-4">
                        <Skeleton className="w-24 h-8" />
                        <Skeleton className="w-24 h-8" />
                    </div>
                    <Skeleton className="w-full h-10" />
                </div>
            </div>
        </div>
    )
}
