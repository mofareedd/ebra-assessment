import { ProductSkeleton } from '@/components/products/prdouct-skeleton'
import { Skeleton } from '@/components/ui/skeleton'
import { Settings2 } from 'lucide-react'
import React from 'react'
import { HeroSection } from './_components/hero'

export default function ProductsLoading() {
    return (
        <div className="">

            <HeroSection />
            <div className="container mx-auto py-10">
                <div className="flex">
                    <div className="min-w-sm">
                        <div className="flex items-center space-x-3">
                            <Settings2 />
                            <h3 className="text-2xl font-bold">Filters</h3>
                        </div>

                        <div className="flex py-6 flex-col items-start space-y-6">
                            <p className="text-lg font-bold">CATEGORIES</p>
                            {Array.from({ length: 8 }, (v, i) => <Skeleton key={i} className='w-48 h-6' />)}
                        </div>
                    </div>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        {Array.from({ length: 12 }, (_, i) => <ProductSkeleton key={i} />)}
                    </div>
                </div>
            </div>
        </div>)

}
