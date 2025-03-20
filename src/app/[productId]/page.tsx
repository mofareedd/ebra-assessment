import { ProductDetails } from "@/components/products/product-details"
import { notFound } from "next/navigation"
import { findProductById } from "../actions"


export default async function Product({ params }: { params: Promise<{ productId: string }> }) {
    const product = await findProductById((await params).productId)
    if (!product) notFound()
    return <div className="container mx-auto py-20">
        <ProductDetails product={product} />
    </div>
}