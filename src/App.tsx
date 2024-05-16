import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { internshalaAutomate } from './internshala';

function App() {

  const onclick = async () => {
    
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true});
    if (tab?.id !== undefined) {
      chrome.scripting.executeScript<string[], void>({
        target: { tabId: tab.id },
        func: internshalaAutomate,
      });
    } else {
      console.error('No active tab found or tab ID is undefined');
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        

        <button onClick={onclick}>Internshala</button>
      </div>
    </>
  )
}

export default App
