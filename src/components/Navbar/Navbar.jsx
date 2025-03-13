import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {

  let {user} = useSelector(state => state.authUser)
console.log(user)

  return( <div>
     updated something on navbar  updat++++++++++++++
  </div>);
};

export default Navbar;
