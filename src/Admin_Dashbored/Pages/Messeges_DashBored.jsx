import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';
import { Pencil, Trash2 } from 'lucide-react';

const Messeges_DashBoared = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                // This fetch remains the same
                const response = await fetch('http://localhost:3000/api/getMessages/submissions');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setMessages(data); 
            } catch (e) {
                setError(e.message); 
            } finally {
                setLoading(false); 
            }
        };

        fetchMessages();
    }, []); 

    // 1. CREATE THE DELETE HANDLER FUNCTION
    const handleDelete = async (id) => {
        // Optional: Ask for confirmation before deleting
        if (!window.confirm('Are you sure you want to delete this message?')) {
            return; // Stop if the user clicks "Cancel"
        }

        try {
            // Note the full URL, including the ID
            const response = await fetch(`http://localhost:3000/api/getMessages/submission/${id}`, {
                method: 'DELETE', // Specify the HTTP method
            });

            if (!response.ok) {
                // Get error message from backend if possible
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to delete message');
            }

            // If successful, update the state to remove the deleted message from the list
            // This filters the array, keeping all messages *except* the one with the matching id
            setMessages(prevMessages => prevMessages.filter(message => message._id !== id));

        } catch (e) {
            // Display any errors
            setError(e.message);
            console.error('Error deleting message:', e);
        }
    };

    if (loading) {
        return <div className="p-6">Loading messages...</div>;
    }

    if (error) {
        // Show the error. You might want to add a "clear error" button.
        return <div className="p-6 text-red-600">Error: {error}</div>;
    }

    return (
        <>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Messages Dashboard</h2>
            
            <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        {/* ... table head ... */}
                        <thead className="bg-gray-50">
                            {/* ... all your <th> elements ... */}
                            <tr>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organization</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-200">
                            {
                                messages.map((message, index) => {
                                    return (
                                        <tr key={message._id} className="hover:bg-gray-50"> 
                                            {/* ... all your other <td> elements ... */}
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{message.firstName}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{message.lastName}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{message.organization}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{message.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{message.mobileNo}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">{message.message}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-2">
                                                    {/* 2. ATTACH THE ONCLICK HANDLER */}
                                                    <Button
                                                        variant="destructive"
                                                        size="icon"
                                                        // Pass the message's unique _id to the handler
                                                        onClick={() => handleDelete(message._id)}
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