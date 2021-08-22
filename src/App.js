// import logo from './logo.svg';
import './App.css';
import IntaSend from "intasend-inlinejs-sdk";

function App() {
  const PUBLIC_KEY = "ISPubKey_test_91ffc81a-8ac4-419e-8008-7091caa8d73f";

    let instance = new IntaSend({
      publicAPIKey: PUBLIC_KEY,
      live: false // Set to true when going live
    });

    const handleClick = () => {
      instance
        .run({ amount: 10, currency: "KES" })
        .on("COMPLETE", (results) => console.log("COMPLETE", results))
        .on("FAILED", (results) => console.log("FAILED", results));
    };

  return (
    
    <div className="App">
      <header className="App-header">
      <button onClick={handleClick} className="btn intasend-btn">
        Pay now KES 10
      </button>
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header>
    </div>
  );
}

export default App;
