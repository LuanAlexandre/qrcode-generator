import "../styles/accordion.css";
import { useState } from "react";
import URL from "../components/url/Index";
import Color from "../components/color/Index";
import QrCode from "../components/qrcode/Index";

const Home = () => {
  const [data, setData] = useState("valerteatro.com.br");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [fgColor, setFgColor] = useState("#000000");
  const [csColor, setCsColor] = useState("#000000");
  const [cdColor, setCdColor] = useState("#000000");

  const backgroundOptions = {
    color: bgColor,
  };

  const dotsOptions = {
    color: fgColor,
  };

  const cornersSquareOptions = {
    color: csColor,
  };

  const cornersDotOptions = {
    color: cdColor,
  };

  return (
    <>
      <section>
        <URL url={data} setUrl={setData} />
        <Color
          bgColor={bgColor}
          setBgColor={setBgColor}
          fgColor={fgColor}
          setFgColor={setFgColor}
          csColor={csColor}
          setCsColor={setCsColor}
          cdColor={cdColor}
          setCdColor={setCdColor}
        />
      </section>
      <section>
        <QrCode
          data={data}
          backgroundOptions={backgroundOptions}
          dotsOptions={dotsOptions}
          cornersSquareOptions={cornersSquareOptions}
          cornersDotOptions={cornersDotOptions}
        />
      </section>
    </>
  );
};

export default Home;
