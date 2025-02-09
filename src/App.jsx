import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Qrcode from "./Qrcode";
import Color from "./components/color/Main";

const App = () => {
  const [url, setUrl] = useState("");
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#FFFFFF");

  return (
    <main className="d-flex justify-content-center align-items-center">
      <Color
        fgColor={fgColor}
        setFgColor={setFgColor}
        bgColor={bgColor}
        setBgColor={setBgColor}
      />
      <Qrcode value={url} fgColor={fgColor} bgColor={bgColor} />
    </main>
  );
};

export default App;
