import { Button } from '@/components/ui/button';
import React from 'react'; // Removed unused useEffect
import { Pencil, Trash2 } from 'lucide-react';
import { useUser } from '@clerk/clerk-react';

// Renamed component for convention
const UserDashboard = () => {

    // 1. Call the useUser hook at the top level of your component
    const { isLoaded, isSignedIn, user } = useUser();

    // This is the static data for your table (a list of all users)
    const User_Data = [
        {
            "id": "1",
            "firstName": "Kashig",
            "lastName": "Hassan",
            "Organization": "Software House",
            "Email": "kahif@gmail.com",
            "PhoneNumber": "03214532453",
        },
        {
            "id": "2",
            "firstName": "Aisha",
            "lastName": "Khan",
            "Organization": "Marketing Agency",
            "Email": "aisha.khan@example.com",
            "PhoneNumber": "03001234567"
        },
        // ... (rest of your data)
        {
            "id": "10",
            "firstName": "Zainab",
            "lastName": "Farooq",
            "Organization": "Retail Chain",
            "Email": "zainab.farooq@retail.pk",
            "PhoneNumber": "03234561234"
        }
    ];

    // The UserProfile function is no longer needed, as its logic is now in this component.

    return (
        <>
            {/* 2. Add this block to display the logged-in user's info */}
            <div className="mb-6 p-6 bg-white rounded-lg shadow border border-gray-200">
                {(() => {
                    // Wait for Clerk to load
                    if (!isLoaded) {
                        return <div>Loading user data...</div>;
                    }
                    // Show profile if signed in
                    if (isSignedIn) {
                        return (
                            <div className="flex items-center gap-4">
                                <img
                                    src={user.imageUrl}
                                    alt={`Profile for ${user.fullName}`}
                                    className="w-16 h-16 rounded-full"
                                />
                                <div>
                                    <h2 className="text-2xl font-bold">Welcome, {user.firstName}!</h2>
                                    <p className="text-gray-600">Your email is: {user.primaryEmailAddress.emailAddress}</p>
                                </div>
                            </div>
                        );
                    }
                    // Show message if not signed in
                    return <div>Please sign in to see your profile.</div>;
                })()}
            </div>

            {/* This is your existing table for all users */}
            <h2 className="text-3xl font-bold mb-6 text-gray-800">User Management</h2>

            <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        {/* ... Table Head ... */}
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
                                    Action</th>
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-200">
                            {
                                // 3. Renamed 'user' to 'tableUser' to avoid variable conflict
                                User_Data.map((tableUser) => {
                                    return (
                                        <tr key={tableUser.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {tableUser.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {tableUser.firstName}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {tableUser.lastName}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {tableUser.Organization}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {tableUser.Email}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {tableUser.PhoneNumber}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                    >
                                                        <Pencil className="h-4 w-4" />
                                                        <span className="sr-only">Edit</span>
                                                    </Button>
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

export default UserDashboard;