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
        <small>Coded by Deepa Saha</small>
      </footer>
    </div>
  );
}

export default App;
