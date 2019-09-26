"use strict";

// import MainContent from "MainContent.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var MainContent = function MainContent() {
  return React.createElement(
    "p",
    null,
    "Hi back"
  );
};

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
      )
    )
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
      "\xA9 2019"
    )
  );
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(Header, { title: "WordPress Headless CMS with a React Frontend" }),
        React.createElement(
          "main",
          null,
          React.createElement(Section, { className: "whitebg", subhead: "This is section One" }),
          React.createElement(Section, { subhead: "This is section Two" })
        ),
        React.createElement(Footer, null)
      );
    }
  }]);

  return App;
}(React.Component);

var domContainer = document.querySelector("#content");
ReactDOM.render(e(App), domContainer);