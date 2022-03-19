import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          There are several places you can learn React from:
        </p>
        <ul>
          <li>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            ReactJs.Org
          </a>
          </li>
          <li>
          <a
            className="App-link"
            href="https://create-react-app.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create-React-App.dev
          </a>
          </li>
        </ul>
        <hr/>
        The example component you see here was obtained from <a 
          className="App-link"
          href="https://create-react-app.dev/docs/adding-images-fonts-and-files"
          target="_blank"
          rel="noopener noreferrer"
          ><em>Adding Images, Fonts, and Files</em></a>
      </header>
    </div>
  );
}

export default App;
