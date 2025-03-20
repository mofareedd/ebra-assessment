import { delay } from '../actions'
import { CartItems } from './_components/cart-items'
import { OrderSummary } from './_components/order-summary'


export default async function CartPage() {
    await delay(1000)
    return (
        <main className="min-h-screen container mx-auto flex flex-col items-center space-y-10 py-10">
            <h2 className="text-3xl font-bold py-10">Cart</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <CartItems />
                <OrderSummary />
            </div>
        </main>
    )
}

