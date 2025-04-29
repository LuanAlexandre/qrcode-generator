import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

const Index = ({
  data,
  backgroundOptions,
  dotsOptions,
  cornersSquareOptions,
  cornersDotOptions,
}) => {
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
      backgroundOptions,
      dotsOptions,
      cornersSquareOptions,
      cornersDotOptions,
    });
  });

  const qrCode = new QRCodeStyling({
    width: 200,
    height: 200,
    type: "svg",
    shape: "square",
    data: "valerteatro.com.br",
    margin: 1,
    qrOptions: { typeNumber: 2 },
    backgroundOptions,
    cornersSquareOptions,
    cornersDotOptions,
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
  backgroundOptions: PropTypes.object,
  dotsOptions: PropTypes.object,
  cornersSquareOptions: PropTypes.object,
  cornersDotOptions: PropTypes.object,
};
