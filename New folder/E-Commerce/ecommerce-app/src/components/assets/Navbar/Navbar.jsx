import React from 'react';

const Navbar = () => {
 return (
 <nav className="fixed top-0 left-0 w-full bg-blue-500 p-4">
  <div className="flex flex-col">
    <div className="text-white text-2xl font-bold mb-2">
      Website Title
    </div>
    <div className="flex justify-between items-center">
      <button className="text-white mx-1">Home</button>
      <button className="text-white mx-1">Shop</button>
      <button className="text-white mx-1">Contact</button>
      <button className="text-white mx-1">About Us</button>
    </div>
  </div>
 </nav>
 );
};

export default Navbar;
