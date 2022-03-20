import Dictionary from "./Dictionary";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
      </div>
      <footer className="App-footer">
        <small>
          This project was coded by Deepa Saha and is{" "}
          <a
            href="https://github.com/deepasaha01/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://eloquent-northcutt-e03492.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
