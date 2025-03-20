"use client"
import { Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useCart } from "@/hooks/use-cart"
import { useIsClient } from "@/hooks/use-is-client"
import type { TProduct } from '@/lib/types'
import { cn } from "@/lib/utils"
import { MinusIcon, PlusIcon } from "lucide-react"
import Image from 'next/image'
import { useEffect, useState } from "react"
import { Rating } from "../rating"
import { Button } from "../ui/button"
interface IProductDetails {
    product: TProduct
}
export function ProductDetails({ product }: IProductDetails) {
    const { addToCart } = useCart()
    const [quantity, setQuantity] = useState(1)



    return (

        <div className="min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2 space-x-20">
                <div className="flex flex-col space-y-4">
                    <ImagesCarousel image={product.image} />
                </div>

                <div className="flex flex-col space-y-6">
                    <div className="flex items-center space-x-4">
                        <Rating rating={product.rating.rate} disabled showText={false} />
                        <span className="text-muted-foreground text-xs font-bold">{product.rating.count} Reviews</span>
                    </div>

                    <h2 className="text-3xl font-bold">{product.title}</h2>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                    <div className="flex items-center space-x-4">
                        <span className="text-3xl font-bold">${product.price}</span>
                        <span className="text-xl text-muted-foreground font-bold line-through">${product.price * 2}</span>
                    </div>
                    <hr />
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className='flex h-9 w-fit flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700 overflow-hidden'>

                                <Button
                                    variant={"ghost"}
                                    type="button"
                                    disabled={quantity <= 1}
                                    className='p-2 hover:border-neutral-800 hover:opacity-80'
                                    onClick={() => setQuantity((prev) => prev - 1)}
                                >
                                    <MinusIcon className="h-4 w-4 dark:text-neutral-500" />
                                </Button>
                                <p className="w-6 text-center">
                                    <span className="w-full text-sm">
                                        {quantity}
                                    </span>
                                </p>
                                <Button
                                    variant={"ghost"}
                                    type="button"
                                    className='p-2 hover:border-neutral-800 hover:opacity-80'
                                    // onClick={() => increaseQuantity(product.id)}
                                    onClick={() => setQuantity((prev) => prev + 1)}

                                >

                                    <PlusIcon className="h-4 w-4 dark:text-neutral-500" />
                                </Button>
                            </div>
                            <Button variant={"outline"} className="">Wishlist</Button>
                        </div>
                        <Button className="w-full" onClick={() => addToCart({ ...product, quantity })}>Add to Cart</Button>
                    </div>
                    <hr />
                    <div className="flex flex-col space-y-4 max-w-xs text-sm">
                        <div className="grid grid-cols-2">
                            <p className="text-muted-foreground">SKU</p>
                            <p>T177</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="text-muted-foreground">CATEGORY</p>
                            <p>{product.category}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



function ImagesCarousel({ image }: { image: string }) {
    const [api, setApi] = useState<CarouselApi | null>(null)

    const [current, setCurrent] = useState(0)

    // Sample images - replace with your actual images
    const images = Array.from({ length: 4 }, (_) => image)

    useEffect(() => {
        if (!api) return

        const handleSelect = () => {
            setCurrent(api.selectedScrollSnap())
        }

        api.on("select", handleSelect)

        return () => {
            api?.off("select", handleSelect)
        }
    }, [api])

    const handleThumbnailClick = (index: number) => {
        api?.scrollTo(index)
    }

    return (
        <div className="flex flex-col space-y-4 w-full max-w-2xl mx-auto">
            {/* Main carousel */}
            <Carousel setApi={setApi} className="w-full">
                <CarouselContent >
                    {images.map((src, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <div className="overflow-hidden rounded-lg">
                                    <Image
                                        src={src || "/placeholder.svg"}
                                        alt={`Product image ${index + 1}`}
                                        width={400}
                                        height={600}
                                        className="object-cover w-full aspect-[3/2]"
                                    />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            {/* Thumbnails */}
            <div className="flex justify-evenly space-x-2">
                {images.map((src, index) => (
                    <button
                        type="button"
                        key={index}
                        onClick={() => handleThumbnailClick(index)}
                        className={cn(
                            "relative w-20 h-20 overflow-hidden rounded-md border-2 transition-all",
                            current === index ? "border-primary" : "border-transparent hover:border-primary/50",
                        )}
                    >
                        <Image src={src || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                    </button>
                ))}
            </div>
        </div>
    )
}

