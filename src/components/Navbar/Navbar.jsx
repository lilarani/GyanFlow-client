import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {

  let {user} = useSelector(state => state.authUser)
console.log(user)

  return <div>
    this is navbar
  </div>;
};

export default Navbar;
