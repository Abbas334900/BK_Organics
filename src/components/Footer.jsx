import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Github, 
  Youtube, 
  X,        // The 'X' social icon
  Leaf      // Icon for BK Organics logo
} from 'lucide-react';

// Footer component for BK Organics
const Footer = () => {
  // Helper component for link lists
  const LinkColumn = ({ title, links }) => (
    <div>
      <h3 className="text-xl mt-8 font-semibold text-gray-900 tracking-wider uppercase">{title}</h3>
      <ul className="mt-4 space-y-4">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="text-base text-gray-600 hover:text-gray-900">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  // --- Data for the link columns - Updated for BK Organics ---
  
  const shopLinks = [
    { name: 'Skincare', href: '#' },
    { name: 'Body Care', href: '#' },
    { name: 'Hair Care', href: '#' },
    { name: 'Bundles & Gifts', href: '#' },
  ];

  const aboutLinks = [
    { name: 'Our Story', href: '#' },
    { name: 'Ingredients', href: '#' },
    { name: 'Our Blog', href: '#' },
    { name: 'Press', href: '#' },
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Shipping & Returns', href: '#' },
    { name: 'My Account', href: '#' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Accessibility', href: '#' },
  ];

  // Social links
  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'X', href: '#', icon: X },
    { name: 'YouTube', href: '#', icon: Youtube },
  ];
  // --- End of Data ---


  return (
    <footer className="text-gray-600 mt-10 lg:min-w-[90%] lg:px-24 lg:py-20">
  <div className="max-w-7xl mx-auto py-16 lg:py-20">
    
    {/* Top section: Logo and Link columns */}
    <div className="xl:grid xl:grid-cols-3 xl:gap-8 lg:gap-16">
      
      {/* Logo */}
      <div className="mb-12 xl:mb-0 lg:mb-0">
        <a href="#" className="flex items-center gap-3 lg:gap-4">
          <Leaf className="h-8 w-auto text-gray-700 lg:h-10" />
          <span className="text-xl font-bold text-gray-900 lg:text-2xl">BK Organics</span>
        </a>
      </div>
      
      {/* Link columns container */}
      <div className="hidden md:grid md:grid-cols-4 md:gap-8 xl:col-span-2 lg:gap-10">
        <LinkColumn title="Shop" links={shopLinks} />
        <LinkColumn title="About" links={aboutLinks} />
        <LinkColumn title="Support" links={supportLinks} />
        <LinkColumn title="Legal" links={legalLinks} />
      </div>
    </div>

    {/* Middle section: Newsletter */}
    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 lg:text-2xl">
          Subscribe to our newsletter
        </h3>
        <p className="mt-2 text-base text-gray-600 lg:text-lg">
          The latest news, organic tips, and special offers, sent to your inbox weekly.
        </p>
      </div>
      <form className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md lg:max-w-lg lg:mt-0">
        <label htmlFor="email-address" className="sr-only">Email address</label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="flex-1 w-full px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-600 lg:py-3 lg:text-lg"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-700 lg:px-8 lg:py-3 lg:text-lg"
        >
          Subscribe
        </button>
      </form>
    </div>

    {/* Bottom section: Copyright */}
    <div className="mt-16 border-t border-gray-200 pt-8 flex flex-col-reverse sm:flex-row justify-between items-center lg:pt-10 lg:mt-20">
      <p className="text-sm text-gray-500 mt-4 sm:mt-0 lg:text-base">
        &copy; 2024 BK Organics. All rights reserved.
      </p>
      <div className="flex space-x-6 lg:space-x-8">
        {socialLinks.map((item) => (
          <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-900">
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6 lg:h-7 lg:w-7" aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
    
  </div>
</footer>

  );
};

export default Footer;