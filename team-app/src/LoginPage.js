import React from 'react';
import { Link } from 'react-router-dom';

function LogInPage() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />

        <button type="submit">Login</button>
      </form>

      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}

export default LogInPage;
