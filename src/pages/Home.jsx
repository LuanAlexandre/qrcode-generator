import "../styles/accordion.css";
import { useState } from "react";
import URL from "../components/url/Index";
import QrCode from "../components/qrcode/Index";

const Home = () => {
  const [data, setData] = useState("valerteatro.com.br");

  return (
    <>
      <section>
        <URL url={data} setUrl={setData} />
      </section>
      <section>
        <QrCode data={data} />;
      </section>
    </>
  );
};

export default Home;
