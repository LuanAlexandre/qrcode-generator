import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <main className="d-flex justify-content-around align-items-center container bg-success bg-opacity-75">
      <Home />
    </main>
  );
};

export default App;
