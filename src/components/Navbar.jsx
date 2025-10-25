import { useState } from "react"
import { Button } from "./ui/button"
import { Menu, ShoppingBagIcon, X } from "lucide-react"
import { Link } from "react-router-dom"
import { SignedIn, SignedOut, SignInButton, SignIn, UserButton, SignUp } from '@clerk/clerk-react'


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showSignin, setShowSignin] = useState(false)

    const handleOverlayClick = () => {
        if (e.target === e.currentTarget) {
            setShowSignin(false)
        }
    }

    return (
        <>
            <nav className="relative flex justify-between items-center h-16 px-4 border-b">
                <div>
                    <h1 className="text-xl font-extrabold">BK Organics</h1>
                </div>
                <ul className="hidden md:flex gap-10 text-sm font-medium">
                    <li><Link className="hover:font-bold" to="/">Home</Link></li>
                    <li><Link className="hover:font-bold" to="/products">Products</Link></li>
                    <li><Link className="hover:font-bold" to="/about">About</Link></li>
                    <li><Link className="hover:font-bold" to="/contact">Contact Us</Link></li>
                </ul>
                <div className="flex items-center gap-4">
                    <div>
                        <SignedOut>
                            <Button variant="outline" onClick={() => setShowSignin(true)}>Login</Button>
                        </SignedOut>
                        <SignedIn>
                            <UserButton>
                                <UserButton.MenuItems>
                                    <UserButton.Link label="All Product" labelIcon={<ShoppingBagIcon size={15} />} href="/products"/>
                                </UserButton.MenuItems>
                            </UserButton>
                        </SignedIn>
                    </div>
                    <Button variant="ghost" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </Button>
                </div>

                {isMobileMenuOpen && (
                    <div
                        className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-10"
                    >
                        <ul className="flex flex-col items-center gap-4 p-4">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                )}
            </nav>
            {
                showSignin && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={handleOverlayClick}>
                    <SignIn />
                </div>
            }
        </>
    )
}

export default Navbar