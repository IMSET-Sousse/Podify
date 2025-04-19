"use client";
import { useAuth } from '../context/AuthContext'; // Adjust path if necessary

const Header = () => {
  const { user } = useAuth(); // Get the user from context

  if (!user) {
    return <div>Please log in</div>;
  }

  return (
    <header>
      <h1>Welcome, {user.name}</h1>
      {/* Other header content */}
    </header>
  );
};

export default Header;
