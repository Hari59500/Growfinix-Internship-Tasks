import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? <Login /> : <Register />}

      <div className="fixed bottom-6 left-0 right-0 text-center">
        <button
          onClick={() => setShowLogin(!showLogin)}
          className="text-sm text-purple-600 underline"
        >
          {showLogin
            ? "Don't have an account? Register"
            : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
}

export default App;