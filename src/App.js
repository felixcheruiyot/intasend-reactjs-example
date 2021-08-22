// import logo from './logo.svg';
import './App.css';
import IntaSend from "intasend-inlinejs-sdk";

function App() {
  const PUBLIC_KEY = "ISPubKey_test_91ffc81a-8ac4-419e-8008-7091caa8d73f";

    let instance = IntaSend.setup({
      publicAPIKey: PUBLIC_KEY,
      live: false // Set to true when going live
    });

    const handleClick = () => {
      instance
        .run({ amount: 10, currency: "KES", api_ref: "<ORDER-NUMBER-OR-USER-ID>" })
    };

    // Listen for events
    function bindEvent(element, eventName, eventHandler) {
        if (element.addEventListener) {
            element.addEventListener(eventName, eventHandler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + eventName, eventHandler);
        }
    }

    bindEvent(window, 'message', function (e) {
      if (e.data.message) {
          if (e.data.message.identitier === 'intasend-status-update-cdrtl') {
              if (e.data.message.state === "COMPLETE") {
                  // Do something on pay success
                  alert("Complete:"+JSON.stringify(e.data.message))
              }
          }
      }
  })

  return (
    
    <div className="App">
      <header className="App-header">
      <button onClick={handleClick} className="btn intasend-btn">
        Pay now KES 10
      </button>
      </header>
    </div>
  );
}

export default App;
