import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./components/button/Button"
import { Label } from "radix-ui";
import './label.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <br />

      <div style={{ display: 'flex', justifyContent: 'between', gap: 20 }}>
        <Button
          ariaLabel="React Button"
          variant="primary"
          disabled={false}
          icon="fa-solid fa-plus"
          isCompact={false}
          name="myButton"
          onClick={() => alert('Button clicked!')}
          rightIcon="fa-solid fa-arrow-right"
          tabIndex={0}
          title="My Button"
          type="button"
        />

        <br />

        <div
          style={{
            display: "flex",
            padding: "0 20px",
            flexWrap: "wrap",
            gap: 15,
            alignItems: "center",
          }}
        >
          <Label.Root className="LabelRoot" htmlFor="firstName">
            First name
          </Label.Root>
          <input
            className="Input"
            type="text"
            id="firstName"
            defaultValue=""
            placeholder="John Wick"
          />
        </div>


      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
