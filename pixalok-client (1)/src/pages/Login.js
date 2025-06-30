import React from "react";
function Login() {
  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Login to Pixter</h2>
      <input type="email" placeholder="Email" className="border p-2 mb-2 w-full" />
      <input type="password" placeholder="Password" className="border p-2 mb-2 w-full" />
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Login</button>
    </div>
  );
}
export default Login;
