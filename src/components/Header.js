// import React from "react";

const Header = ({ title }) => {
  return (
    <header>
      <div className="wrapper">
        <h1>{title}</h1>
        <p>
          This site demonstrates the use of a WordPress headless CMS for backend
          with a React frontend built on top.
        </p>
        <nav className="mainNav">
          <ul>
            <li>
              <a href="/wordpress-demo/about">About</a>
              <Link>hello</Link>
            </li>
            <li>
              <a href="/wordpress-demo/contact">Contact</a>
            </li>
            <li>
              <a href="/wordpress-demo/links">Links</a>
            </li>
            <li>
              <a href="/wordpress-demo/something-else">Something else</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
