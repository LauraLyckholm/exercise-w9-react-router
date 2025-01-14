import reactLogo from "../assets/react.svg";
import technigoLogo from "../assets/technigo-logo.svg";
import viteLogo from "/vite.svg";

function Logos() {
  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.technigo.io/" target="_blank" rel="noreferrer">
          <img
            src={technigoLogo}
            className="logo technigo"
            alt="Technigo logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Logos;
