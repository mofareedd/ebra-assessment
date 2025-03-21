"use client"
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'
import type { TProduct } from '@/lib/types'
import { MinusIcon, PlusIcon, Trash2 } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export function CartItems() {
    const [cartItems, setCartItems] = useState<TProduct[]>([]);
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCart()


    useEffect(() => {
        setCartItems(cart)
    }, [cart])
    return (
        <div className="lg:col-span-2">
            <div className="hidden md:grid grid-cols-12 gap-4 mb-4 text-sm font-medium text-muted-foreground">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
            </div>

            <hr className='border-foreground' />
            {cartItems.length ? cartItems.map((product) => (
                <div key={product.id} className="mb-4">
                    <div className="p-4">
                        <div className="grid grid-cols-12 gap-4 items-center">
                            <div className="col-span-12 md:col-span-6 flex items-center gap-4">
                                <div className="relative h-20 w-20 rounded-md overflow-hidden bg-muted">
                                    <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-medium">{product.title}</h3>
                                    <Button onClick={() => removeFromCart(product.id)} className='flex items-center px-0 mx-0 w-fit h-6' variant={"outline"}>
                                        <Trash2 className='w-4 h-4' /> Delete
                                    </Button>
                                    <p className="text-sm text-muted-foreground md:hidden">${product.price.toFixed(2)}</p>
                                </div>
                            </div>

                            <div className="hidden md:block md:col-span-2 text-center">${product.price.toFixed(2)}</div>

                            <div className='col-span-8 md:col-span-2 flex items-center justify-center'>
                                <div className="flex items-center border rounded-md">

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

                            <div className="col-span-4 md:col-span-2 text-right">${(product.price * product.quantity + 20).toFixed(2)}</div>
                        </div>
                    </div>
                    <hr />
                </div>
            )) : <h2 className="text-2xl text-muted-foreground font-bold text-center py-6">Empty Cart</h2>}

            {cartItems.length > 0 ? <Button variant={"destructive"} onClick={() => clearCart()}>Clear Cart</Button> : null}
        </div >

    )
}
