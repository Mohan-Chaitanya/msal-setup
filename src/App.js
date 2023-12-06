import logo from "./logo.svg";
import "./App.css";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { useEffect } from "react";

function App() {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    !isAuthenticated && handleLogin();
    async function handleLogin() {
      try {
        await instance.initialize();
        const response = await instance.loginPopup();
        console.log("response", response); // Here, you can access the access token and other user information
      } catch (error) {
        console.log(error);
      }
    }
  }, [instance, isAuthenticated]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
  );
}

export default App;
