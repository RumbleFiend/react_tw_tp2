import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const items = [
    { label: "Home", url: "/" },
    { label: "Animals", url: "/animals" },
    { label: "Birds", url: "/birds" },
    { label: "Food for your pet", url: "/food" },
  ];
  

  const menu = items.map(({ label, url }, i) => (
    <li key={i} className="nav-item">
      <Link className="nav-link" label={label} to={url}>
        <span>{label} </span>
      </Link>
    </li>
  ));
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark ">
        <ul className="nav navbar-nav mx-auto">{menu}</ul>
      </nav>
      
    </div>
  );
}

export default App;
