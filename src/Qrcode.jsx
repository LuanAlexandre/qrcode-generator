import PropTypes from "prop-types";
import { QRCodeCanvas } from "qrcode.react";
import { useEffect } from "react";

const Qrcode = ({ value, fgColor, bgColor }) => {
  useEffect(() => {}, [value]);

  return <QRCodeCanvas value={value} fgColor={fgColor} bgColor={bgColor} />;
};

export default Qrcode;

Qrcode.propTypes = {
  value: PropTypes.string,
  fgColor: PropTypes.string,
  bgColor: PropTypes.string,
};
