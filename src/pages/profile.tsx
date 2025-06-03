import React from 'react';
import { useProfile } from '../hooks';

const ProfilePage: React.FC = () => {
  const { data, isLoading, error } = useProfile({staleTime: 5000 });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No profile data</div>;

  return (
    <div>
      <h1>Profile</h1>
      <p>
        <strong>Name:</strong> {data.name}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default ProfilePage;
