// import React from "react";

var Header = function Header(_ref) {
  var title = _ref.title;

  return React.createElement(
    "header",
    null,
    React.createElement(
      "div",
      { className: "wrapper" },
      React.createElement(
        "h1",
        null,
        title
      ),
      React.createElement(
        "p",
        null,
        "This site demonstrates the use of a WordPress headless CMS for backend with a React frontend built on top."
      ),
      React.createElement(
        "nav",
        { className: "mainNav" },
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "/wordpress-demo/about" },
              "About"
            ),
            React.createElement(
              Link,
              null,
              "hello"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "/wordpress-demo/contact" },
              "Contact"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "/wordpress-demo/links" },
              "Links"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "/wordpress-demo/something-else" },
              "Something else"
            )
          )
        )
      )
    )
  );
};

export default Header;