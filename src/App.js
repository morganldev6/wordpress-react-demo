"use strict";
import MainContent from "components/MainContent";

const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <h1>Hello World</h1>
        <MainContent />
      </header>
    );
  }
}

const domContainer = document.querySelector("#content");
ReactDOM.render(e(App), domContainer);
