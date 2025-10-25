import { Button } from '@/components/ui/button';
import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

// Corrected component name for React conventions
const Messeges_DashBoared = () => {

    const Messeges_Data = [
        {
            "id": "1",
            "firstName": "Kashig",
            "lastName": "Hassan",
            "Organization": "Software House",
            "Email": "kahif@gmail.com",
            "PhoneNumber": "03214532453",
            "Messeges": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sequi unde illum quo quod delectus aspernatur temporibus ut maiores quisquam."
        },
        {
            "id": "2",
            "firstName": "Aisha",
            "lastName": "Khan",
            "Organization": "Marketing Agency",
            "Email": "aisha.khan@example.com",
            "PhoneNumber": "03001234567",
            "Messeges": "Consectetur adipisicing elit. Voluptate accusantium fugiat rerum dicta aperiam iusto amet enim. Id sequi unde illum quo quod delectus."
        },
        // ... (rest of your data)
        {
            "id": "10",
            "firstName": "Zainab",
            "lastName": "Farooq",
            "Organization": "Retail Chain",
            "Email": "zainab.farooq@retail.pk",
            "PhoneNumber": "03234561234",
            "Messeges": "Sit amet consectetur adipisicing elit. Id sequi unde illum quo quod delectus aspernatur temporibus ut maiores quisquam, excepturi."
        }
    ];

    return (
        // 1. Removed outer padding/min-h-screen to fit inside the Dashboard <Outlet />
        <>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Messages Dashboard</h2>
            
            {/* 2. Added border for a clean card look */}
            <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        
                        {/* 3. Replaced heavy header with a light, standard one */}
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    ID</th> 
                                <th
                                    scope="col"
                                    className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    First Name</th>
                                <th
                                    scope="col"
                                    className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Last Name</th>
                                <th
                                    scope="col"
                                    className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Organization</th>
                                <th
                                    scope="col"
                                    className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Email</th>
                                <th
                                    scope="col"
                                    className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Phone Number</th>
                                <th
                                    scope="col"
                                    className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Message</th>
                                <th
                                    scope="col"
                                    className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Action</th>
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-200">
                            {
                                Messeges_Data.map((messege) => {
                                    return (
                                        <tr key={messege.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {messege.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {messege.firstName}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {messege.lastName}
                                            </td>
                                            {/* 4. Removed whitespace-nowrap to allow wrapping */}
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {messege.Organization}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {messege.Email}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {messege.PhoneNumber}
                                            </td>
                                            {/* 5. Enabled text wrapping for the message content */}
                                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                                                {messege.Messeges}
                                            </td>
                                            {/* 6. Fixed action button spacing and styles */}
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        variant="destructive"
                                                        size="icon"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                        <span className="sr-only">Delete</span>
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Messeges_DashBoared;