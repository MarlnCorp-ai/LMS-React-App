import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaLock, FaEnvelope } from 'react-icons/fa';
import img3 from './../../images/img3.jpeg';

const CorporateLoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const dummyEmail = 'test@example.com';
      const dummyPassword = 'password123';

      const dummyEmail1= 'nk.das0099@gmail.com';
      const dummyPassword1 = 'nitu';

      const dummyEmail12= 'admin@gmail.com';
      const dummyPassword2 = 'admin';

      if (email === dummyEmail && password === dummyPassword) {
        if (rememberMe) {
          localStorage.setItem('rememberedEmail', email);
        }
        navigate('/corporateManagerDashboard');
      } 
      if (email === dummyEmail1 && password === dummyPassword1) {
        if (rememberMe) {
          localStorage.setItem('rememberedEmail', email);
        }
        navigate('/learner');
      }if (email === dummyEmail12 && password === dummyPassword2) {
        if (rememberMe) {
          localStorage.setItem('rememberedEmail', email);
        }
        navigate('/dashboards/admin');
      }
      else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Login failed. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-white to-purple-50 p-4 md:p-6">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl h-auto lg:h-[80vh] gap-6 lg:gap-8">
        {/* Left Panel - Image Only */}
        <div className="hidden lg:block lg:w-2/3 bg-white rounded-2xl overflow-hidden shadow-xl">
          <img
            src={img3} // Update with your image path
            alt="Login Visual"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Panel - Login Form */}
        <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-xl flex items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-purple-700 mb-2">NexusHive</h2>
            </div>

            <form className="space-y-4" onSubmit={handleLogin}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-purple-600 hover:underline">Forgot password?</Link>
              </div>

              {error && (
                <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </button>
            </form>

            <div className="my-6 flex items-center">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="px-4 text-gray-500">or</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>

            <div className="flex gap-4 mb-6">
              <button 
                aria-label="Sign in with Google" 
                className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition-colors"
              >
                <FaGoogle className="text-red-500" />
                <span className="text-sm">Google</span>
              </button>
              <button 
                aria-label="Sign in with Facebook" 
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition-colors"
              >
                <FaFacebook />
                <span className="text-sm">Facebook</span>
              </button>
            </div>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/create-account" className="text-purple-600 hover:underline font-medium">
                Request access
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateLoginPage;