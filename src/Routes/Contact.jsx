import React, { useState } from 'react';
import TextType from '@/components/TextType'
import {
    Facebook,
    Instagram,
    Github,
    Youtube,
    X,        // The 'X' social icon
    Leaf,      // Icon for BK Organics logo
    Mail
} from 'lucide-react';
import { href } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '', // Changed from Company to Organization for a more general fit for BKO
        email: '',
        phoneNumber: '',
        message: '',
        agreedToPrivacy: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // In a real application, you would send this data to a backend server
        alert('Thank you for your message! We will get back to you soon.');
        // Optionally reset form
        setFormData({
            firstName: '',
            lastName: '',
            company: '',
            email: '',
            phoneNumber: '',
            message: '',
            agreedToPrivacy: false,
        });
    };

    // Social links
    const socialLinks = [
        { name: 'Facebook', href: '#', icon: Facebook },
        { name: 'Instagram', href: '#', icon: Instagram },
        { name: 'X', href: '#', icon: X },
        { name: 'YouTube', href: '#', icon: Youtube },
        {name: 'Mail', href: '#', icon: Mail}
    ];

    return (
        <>
            <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className='flex flex-col items-center justify-center gradient-title text-2xl font-extrabold sm:text-4xl lg:text-6xl tracking-tight py-4'>
                        Contact BK Organics
                    </h1>
                    <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl gradient-title'>
                        <TextType
                            text={["We'd love to hear from you! Please fill out the form below and we'll get in touch."]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            textColors={["slate-600"]}
                        />
                    </p>
                </div>

                <div className="mt-12 max-w-lg mx-auto">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        {/* First Name */}
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                First name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    autoComplete="given-name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                        </div>

                        {/* Last Name */}
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                Last name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    autoComplete="family-name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                        </div>

                        {/* Company/Organization */}
                        <div className="sm:col-span-2">
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                Organization (Optional)
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    autoComplete="organization"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div className="sm:col-span-2">
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                Phone number
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 flex items-center">
                                    <label htmlFor="countryCode" className="sr-only">
                                        Country Code
                                    </label>
                                    <select
                                        id="countryCode"
                                        name="countryCode"
                                        className="h-full py-0 pl-4 pr-1 border-transparent bg-transparent text-gray-500 focus:ring-gray-500 focus:border-gray-500 rounded-md"
                                    >
                                        <option>Pak</option>
                                        <option>Ind</option>
                                        <option>Sau</option>
                                    </select>
                                </div>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    autoComplete="tel"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="py-3 px-4 block w-full pl-20 focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md"
                                    placeholder="03XX-XXXXXXX"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-gray-500 focus:border-gray-500 border border-gray-300 rounded-md"
                                    required
                                ></textarea>
                            </div>
                        </div>

                        {/* Privacy Policy Checkbox */}
                        <div className="sm:col-span-2">
                            <div className="flex items-center">
                                <input
                                    id="agreedToPrivacy"
                                    name="agreedToPrivacy"
                                    type="checkbox"
                                    checked={formData.agreedToPrivacy}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                                    required
                                />
                                <label htmlFor="agreedToPrivacy" className="ml-2 block text-sm text-gray-900">
                                    By selecting this, you agree to our{' '}
                                    <a href="#" className="text-gray-700 hover:text-gray-600 font-medium">
                                        privacy policy
                                    </a>
                                    .
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="sm:col-span-2">
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                            >
                                Let's Talk Organics
                            </button>
                        </div>

                        <div className="border-t border-gray-200 pt-8 flex flex-col-reverse sm:flex-row justify-between items-center">
                            <div className="flex space-x-8 md:space-x-20 sm:space-x-20">
                                {socialLinks.map((item) => (
                                    <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-900">
                                        <span className="sr-only">{item.name}</span>
                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                    </a>
                                ))}
                            </div>
                        </div>

                    </form>
                </div>
            </div>


        </>
    );
};

export default Contact;