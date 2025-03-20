import { CircleUser, Search, } from "lucide-react";
import Link from "next/link";
import { Cart } from "../cart/cart";
import { Button } from "../ui/button";

export function SiteHeader() {
    return (
        <header className='flex items-center justify-between p-3 sticky top-0 bg-background border-b z-40'>
            <a href="/" className='font-black text-2xl'>Ebra</a>
            <nav className="flex items-center space-x-8 font-medium">
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Shop</Link>
                <Link href={"/"}>Product</Link>
                <Link href={"/"}>Contact Us</Link>
            </nav>

            <div className="flex items-center space-x-1">
                <Button className="cursor-pointer" size={"icon"} variant={"ghost"}>
                    <Search />
                </Button>
                <Button className="cursor-pointer" size={"icon"} variant={"ghost"}>
                    <CircleUser />
                </Button>
                <Cart />
            </div>
        </header>
    );
}
