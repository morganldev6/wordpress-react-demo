"use strict";

const e = React.createElement;

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
            </li>
            <li>
              <a href="/wordpress-demo/contact">Contact</a>
            </li>
            <li>
              <a href="/wordpress-demo/links">Links</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Main = () => {
  return (
    <React.Fragment>
      <Section className="bg" subhead="This is section One" />
      <Section subhead="This is section Two" />
    </React.Fragment>
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
      <div className="wrapper">
        <p>This is the footer</p>
        <p>© 2019</p>
      </div>
    </footer>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }

  fetchPostData() {
    fetch(`http://localhost/wordpress-demo/wp-json/wp/v2/movies?per_page=100`)
      .then(response => response.json())
      .then(myJSON => {
        // Logic goes here
        console.log(myJSON);
        console.log("it worked");
        this.setState({ movies: myJSON });
      });
  }

  componentDidMount() {
    console.log("component mounted");
    this.fetchPostData();
  }

  render() {
    return (
      <React.Fragment>
        <Header title="WordPress Headless CMS with a React Frontend" />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

const domContainer = document.querySelector("#content");
ReactDOM.render(e(App), domContainer);
