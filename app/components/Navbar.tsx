import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react"; // icons for mobile menu
import { usePuterStore } from "~/lib/puter";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { auth, isLoading } = usePuterStore();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--bg-secondary)]/90 backdrop-blur-md shadow-md border-b border-[var(--border-color)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <p className="text-2xl font-bold text-gradient">RAYNYZE</p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ThemeToggle />
          <Link to="/upload" className="primary-button w-fit">
            Upload Resume
          </Link>

          {isLoading ? (
            <button className="auth-nav-button animate-pulse" disabled>
              <span>Loading...</span>
            </button>
          ) : auth.isAuthenticated ? (
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline text-[var(--text-primary)]">
                {auth.user?.username || "User"}
              </span>
              <button
                onClick={auth.signOut}
                className="auth-nav-button font-bold"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link to="/auth" className="auth-nav-button">
              Log In
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-slate-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-md">
          <div className="flex flex-col items-center px-4 py-3 gap-4">
            <Link
              to="/upload"
              className="w-full primary-button text-center"
              onClick={() => setMenuOpen(false)}
            >
              Upload Resume
            </Link>

            {isLoading ? (
              <button className="auth-nav-button animate-pulse w-full" disabled>
                Loading...
              </button>
            ) : auth.isAuthenticated ? (
              <>
                <span className="text-slate-800 mt-2 mb-2  font-medium">
                  Username: {auth.user?.username || "User"}
                </span>
                <button
                  onClick={() => {
                    auth.signOut();
                    setMenuOpen(false);
                  }}
                  className="auth-nav-button font-bold w-full"
                >
                  Log Out
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="auth-nav-button w-full text-center"
                onClick={() => setMenuOpen(false)}
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
