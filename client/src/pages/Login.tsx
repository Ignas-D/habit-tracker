import React from "react";

const Login: React.FC = ({ onLogin }) => {
  return (
    <div className="login">
      <h1>Login Page</h1>

      <div>
        <form className="bg-amber-300 p-5">
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="border p-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="border p-2 rounded"
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
