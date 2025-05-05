import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>{" | "}
      {user ? (
        <>
          <Link to="/dashboard">Dashboard</Link>{" | "}
          <Link to="/protected">Protected</Link>{" | "}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>{" | "}
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
