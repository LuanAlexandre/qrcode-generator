import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

const Index = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current);
  });

  useEffect(() => {
    qrCode.update({
      width: 200,
      height: 200,
      type: "svg",
      shape: "square",
      data,
      qrOptions: { typeNumber: 2 },
    });
  });

  const qrCode = new QRCodeStyling({
    width: 200,
    height: 200,
    type: "svg",
    shape: "square",
    data: "valerteatro.com.br",
    qrOptions: { typeNumber: 2 },
  });

  return <div ref={ref}></div>;
};

export default Index;

Index.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.string,
  shape: PropTypes.string,
  data: PropTypes.string,
  qrOptions: PropTypes.object,
};
