import { useState } from "react"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react" 

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <nav className="relative flex justify-between items-center h-16 px-4 border-b">
            <div>
                <h1 className="text-xl font-extrabold">BK Organics</h1>
            </div>
            <ul className="hidden md:flex gap-10 text-sm font-medium">
                <li className="hover:font-bold"><a href="#">Home</a></li>
                <li className="hover:font-bold"><a href="#">Products</a></li>
                <li className="hover:font-bold"><a href="#">About</a></li>
                <li className="hover:font-bold"><a href="#">Contact Us</a></li>
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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar