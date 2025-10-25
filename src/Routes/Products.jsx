import CardPage from '../Layout/CardPage'
import React from 'react'
import { useUser } from '@clerk/clerk-react';

const Products = () => {

  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div>
      <div className="my-6 p-6 bg-white rounded-lg shadow border border-gray-200">
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
      <CardPage />
    </div>
  )
}

export default Products
