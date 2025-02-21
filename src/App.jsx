import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <main className="d-flex justify-content-center align-items-center">
      <section className="d-flex container">
        <Home />
      </section>
    </main>
  );
};

export default App;
