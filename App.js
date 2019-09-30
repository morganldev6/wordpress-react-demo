"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Sentence from "./src/components/Sentence.js";

var e = React.createElement;

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
          )
        )
      )
    )
  );
};

var Main = function Main() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Section, { className: "bg", subhead: "This is section One" }),
    React.createElement(Section, { subhead: "This is section Two" })
  );
};

var Section = function Section(_ref2) {
  var subhead = _ref2.subhead,
      className = _ref2.className;

  return React.createElement(
    "section",
    { className: className },
    React.createElement(
      "div",
      { className: "wrapper" },
      React.createElement(
        "h2",
        null,
        subhead
      )
    )
  );
};

var Footer = function Footer() {
  return React.createElement(
    "footer",
    null,
    React.createElement(
      "div",
      { className: "wrapper" },
      React.createElement(
        "p",
        null,
        "This is the footer"
      ),
      React.createElement(
        "p",
        null,
        "\xA9 2019"
      )
    )
  );
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { movies: [] };
    return _this;
  }

  _createClass(App, [{
    key: "fetchPostData",
    value: function fetchPostData() {
      var _this2 = this;

      fetch("http://localhost/wordpress-demo/wp-json/wp/v2/movies?per_page=100").then(function (response) {
        return response.json();
      }).then(function (myJSON) {
        // Logic goes here
        console.log(myJSON);
        console.log("it worked");
        _this2.setState({ movies: myJSON });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("component mounted");
      this.fetchPostData();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(Sentence, null),
        React.createElement(Header, { title: "WordPress Headless CMS with a React Frontend WUT" }),
        React.createElement(Main, null),
        React.createElement(Footer, null)
      );
    }
  }]);

  return App;
}(React.Component);

var domContainer = document.querySelector("#content");
ReactDOM.render(e(App), domContainer);