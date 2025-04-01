import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogIn } from 'lucide-react';
import useAuthStore from '../store/authStore';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuthStore();

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              TeCryst
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/healthcare" className="text-gray-700 hover:text-blue-600 transition">
              Healthcare
            </Link>
            <Link to="/education" className="text-gray-700 hover:text-blue-600 transition">
              Education
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
            {!isAuthenticated ? (
              <Link
                to="/login"
                className="flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Link>
            ) : (
              <Link
                to="/dashboard"
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Dashboard
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 backdrop-blur-md">
            <Link
              to="/healthcare"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              Healthcare
            </Link>
            <Link
              to="/education"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              Education
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              About
            </Link>
            {!isAuthenticated ? (
              <Link
                to="/login"
                className="flex items-center px-3 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Link>
            ) : (
              <Link
                to="/dashboard"
                className="block px-3 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Dashboard
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}