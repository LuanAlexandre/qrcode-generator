import "../../styles/accordion.css";
import PropTypes from "prop-types";
import BgColorInput from "./BgColorInput";
import FgColorInput from "./FgColorInput";

const Color = ({ fgColor, setFgColor, bgColor, setBgColor }) => {
  return (
    <div className="m-2 p-2">
      <div className="accordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#colors"
              aria-expanded="false"
              aria-controls="colors"
            >
              Color
            </button>
          </h2>
          <div
            id="colors"
            className="accordion-collapse collapse"
            data-bs-parent=""
          >
            <div className="accordion-body">
              <FgColorInput fgColor={fgColor} setFgColor={setFgColor} />
              <BgColorInput bgColor={bgColor} setBgColor={setBgColor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Color;

Color.propTypes = {
  fgColor: PropTypes.string,
  bgColor: PropTypes.string,
  setFgColor: PropTypes.func,
  setBgColor: PropTypes.func,
};
