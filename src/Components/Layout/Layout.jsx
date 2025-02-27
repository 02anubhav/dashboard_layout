import React from 'react'
import './Layout.css'

const Layout = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">Sidebar</aside>
      <header className="header">Header</header>
      <section className="cards">Cards Section</section>
      <section className="charts">Charts Section</section>
      <section className="last-section">Last Section</section>
    </div>
  );
}

export default Layout