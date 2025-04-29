import "../../styles/accordion.css";
import PropTypes from "prop-types";
import BgColorInput from "./BgColorInput";
import FgColorInput from "./FgColorInput";
import CornerSquareColorInput from "./CornerSquareColorInput";
import CornerDotsColorInput from "./CornerDotsColorInput";

const Index = ({
  fgColor,
  setFgColor,
  bgColor,
  setBgColor,
  csColor,
  setCsColor,
  cdColor,
  setCdColor,
}) => {
  return (
    <div className="m-2 p-2">
      <div className="accordion" id="colors-accordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#colors"
              aria-expanded="false"
              aria-controls="colors-accordion"
            >
              Color
            </button>
          </h2>
          <div
            id="colors"
            className="accordion-collapse collapse"
            data-bs-parent="#colors-accordion"
          >
            <div className="accordion-body">
              <FgColorInput fgColor={fgColor} setFgColor={setFgColor} />
              <BgColorInput bgColor={bgColor} setBgColor={setBgColor} />
              <CornerSquareColorInput
                csColor={csColor}
                setCsColor={setCsColor}
              />
              <CornerDotsColorInput cdColor={cdColor} setCdColor={setCdColor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

Index.propTypes = {
  fgColor: PropTypes.string,
  bgColor: PropTypes.string,
  csColor: PropTypes.string,
  cdColor: PropTypes.string,
  setFgColor: PropTypes.func,
  setBgColor: PropTypes.func,
  setCsColor: PropTypes.func,
  setCdColor: PropTypes.func,
};
