import { NavLink, Outlet } from 'react-router-dom';

function App() {
  const paths = [
    {
      url: '/',
      label: 'Home',
    },
    {
      url: '/profile',
      label: 'Profile',
    },
  ];

  return (
    <div>
      <h1>My app</h1>
      <ul>
        {paths.map((path) => (
          <li key={path.url}>
            <NavLink
              to={path.url}
              style={({ isActive }) => ({
                color: isActive ? 'blue' : 'black',
                textDecoration: 'none',
              })}
            >
              {path.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}

export default App;
