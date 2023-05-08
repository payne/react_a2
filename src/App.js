import { Routes, Route, Outlet, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { ProfilePage } from './components/ProfilePage';
import { FeedPage } from './components/FeedPage';
import { HomePage } from './components/HomePage';


function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am Editing <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <ul>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/feed">Feed</Link></li>
    </ul>
    <div>
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
    <div>
      <Outlet />
    </div>
    </>
  );
}

export default App;
