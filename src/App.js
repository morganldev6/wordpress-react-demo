"use strict";

// import MainContent from "MainContent.js";

const e = React.createElement;

const MainContent = () => {
  return <p>Hi back</p>;
};

const Header = ({ title }) => {
  return (
    <header>
      <div className="wrapper">
        <h1>{title}</h1>
        <p>
          This site demonstrates the use of a WordPress headless CMS for backend
          with a React frontend built on top.
        </p>
      </div>
    </header>
  );
};

const Section = ({ subhead, className }) => {
  return (
    <section className={className}>
      <div className="wrapper">
        <h2>{subhead}</h2>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">© 2019</div>
    </footer>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Header title="WordPress Headless CMS with a React Frontend" />
        <main>
          <Section className="whitebg" subhead="This is section One" />
          <Section subhead="This is section Two" />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

const domContainer = document.querySelector("#content");
ReactDOM.render(e(App), domContainer);
