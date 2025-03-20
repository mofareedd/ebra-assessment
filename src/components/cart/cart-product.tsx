import { useCart } from '@/hooks/use-cart'
import type { TProduct } from '@/lib/types'
import { MinusIcon, PlusIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'


export default function CartProduct({ product }: { product: TProduct }) {
    const { increaseQuantity, decreaseQuantity } = useCart()
    return (
        <div className='flex justify-between border-b p-4'>
            <div className="flex space-x-2">

                <div className='relative h-28 w-20 overflow-hidden rounded-md border'>
                    <Image src={product.image} fill alt="" className="object-cover" />
                </div>

                <div className="flex flex-col space-y-3">
                    <p className='max-w-[200px] text-sm'>{product.title}</p>
                    <div className='flex h-9 w-fit flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700 overflow-hidden'>

                        <Button
                            variant={"ghost"}
                            type="button"
                            className='p-2 hover:border-neutral-800 hover:opacity-80'
                            onClick={() => decreaseQuantity(product.id)}
                        >
                            <MinusIcon className="h-4 w-4 dark:text-neutral-500" />
                        </Button>
                        <p className="w-6 text-center">
                            <span className="w-full text-sm">
                                {product.quantity}
                            </span>
                        </p>
                        <Button
                            variant={"ghost"}
                            type="button"
                            className='p-2 hover:border-neutral-800 hover:opacity-80'
                            onClick={() => increaseQuantity(product.id)}
                        >

                            <PlusIcon className="h-4 w-4 dark:text-neutral-500" />
                        </Button>
                    </div>
                </div>
            </div>
            <span className=''>${product.price * product.quantity}</span>

        </div>
    )
}
