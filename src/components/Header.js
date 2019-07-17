import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <Link to="/posts" className="nav-item">
        Posts
      </Link>
      <Link to="/products" className="nav-item">
        Products
      </Link>
    </div>
  );
}
