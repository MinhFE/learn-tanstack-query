import { useProfile } from './hooks';

function App() {
  const { data, isLoading, error } = useProfile();

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
}

export default App;
