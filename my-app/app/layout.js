import { AuthProvider } from './context/AuthContext'; // Example of context
import { PlayerProvider } from './context/PlayerContext'; // Example of player context
import Header from './components/Header'; // Your header component

export default function Layout({ children }) {
  return (
    <AuthProvider>
      <PlayerProvider>
        <div>
          <Header />
          <main>{children}</main>
        </div>
      </PlayerProvider>
    </AuthProvider>
  );
}
