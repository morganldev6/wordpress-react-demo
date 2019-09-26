"use strict";

// import MainContent from "MainContent.js";

const e = React.createElement;

const MainContent = () => {
  return <p>Hi back</p>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Hello World</h1>
        </header>
        <MainContent />
      </React.Fragment>
    );
  }
}

const domContainer = document.querySelector("#content");
ReactDOM.render(e(App), domContainer);
