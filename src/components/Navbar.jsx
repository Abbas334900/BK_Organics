import { useState } from "react"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react" 
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
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
                <Button variant="outline">Login</Button>
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
    )
}

export default Navbar