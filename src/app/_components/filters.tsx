"use client"
import { Checkbox } from '@/components/ui/checkbox'
import { ScrollArea } from '@/components/ui/scroll-area'
import type { Category } from '@/lib/types'
import { Settings2 } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

interface IFilters {
    categories: Category[]
}

const PRICES = [{ from: 0.00, to: 99.99, val: 99, },
{ from: 100, to: 199, val: 199, },
{ from: 200, to: 299, val: 299, },
{ from: 300, to: 399, val: 399, }
]
export function Filters({ categories }: IFilters) {
    return (
        <div className="min-w-sm  hidden lg:block pr-10">
            <div className="flex items-center space-x-3">
                <Settings2 />
                <h3 className="text-2xl font-bold">Filters</h3>
            </div>

            <ScrollArea className=''>
                <div className="flex py-6 flex-col items-start space-y-3">
                    <p className="text-lg font-bold">CATEGORIES</p>
                    {categories.map((c) => <Link key={c} href={""} className='text-muted-foreground font-medium border-b border-transparent hover:text-foreground hover:border-b-foreground'>{c}</Link>)}
                </div>
                <div className="flex py-6 flex-col items-start space-y-3">
                    <p className="text-lg font-bold">PRICES</p>
                    <div className="w-full flex flex-col space-y-3">
                        <div className='flex items-center justify-between'>
                            <p className="text-sm text-muted-foreground">All Price</p>
                            <Checkbox checked />
                        </div>
                        {PRICES.map((p) => <div key={p.val} className='flex items-center justify-between'>
                            <p className="text-sm text-muted-foreground">${p.from.toFixed(2)} - ${p.to.toFixed(2)}</p>
                            <Checkbox />
                        </div>)}
                        <div className='flex items-center justify-between'>
                            <p className="text-sm text-muted-foreground">$400.00+</p>
                            <Checkbox />
                        </div>
                    </div>
                </div>
            </ScrollArea>
        </div>
    )
}
