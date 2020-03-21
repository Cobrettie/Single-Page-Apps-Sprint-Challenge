import React from 'react';
import { Link } from 'react-router-dom';

export default function NavMenu() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='characterlist'>List of characters</Link>
    </nav>
  )
}