"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingBag, User, Heart, Menu } from "lucide-react"

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-4">
            <span>Free delivery on orders over $50</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/help" className="hover:underline">
              Help & FAQs
            </Link>
            <Link href="/student" className="hover:underline">
              Student Discount
            </Link>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/" className="text-3xl font-bold">
              YS
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/women" className="font-medium hover:underline">
                WOMEN
              </Link>
              <Link href="/men" className="font-medium hover:underline">
                MEN
              </Link>
              <Link href="/shoes" className="font-medium hover:underline">
                SHOES
              </Link>
              <Link href="/accessories" className="font-medium hover:underline">
                ACCESSORIES
              </Link>
              <Link href="/brands" className="font-medium hover:underline">
                BRANDS
              </Link>
              <Link href="/sale" className="font-medium hover:underline text-red-600">
                SALE
              </Link>
              <Link href="/deploy" className="font-medium hover:underline text-green-600">
                DEPLOY
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center relative">
              <Search className="absolute left-3 h-4 w-4 text-gray-400" />
              <Input placeholder="Search for items and brands" className="pl-10 w-80" />
            </div>
            <Link href="/account">
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="sm">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                2
              </Badge>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
