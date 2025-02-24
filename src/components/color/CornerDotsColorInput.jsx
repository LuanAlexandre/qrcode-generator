import PropTypes from "prop-types";

const CornerDotsColorInput = ({ cdColor, setCdColor }) => {
  return (
    <form className="row m-2 p-2">
      <label className="form-label">
        Corner Dots Color
        <div className="row">
          <div className="col">
            <input
              id="cd-color-hex"
              type="text"
              className="form-control"
              onChange={(tempColor) => setCdColor(tempColor.target.value)}
              value={cdColor}
            />
          </div>
          <div className="col-auto w-25">
            <input
              type="color"
              className="w-100 form-control form-control-color"
              aria-label="csColor"
              aria-describedby="csColor"
              onChange={(tempColor) => setCdColor(tempColor.target.value)}
              value={cdColor}
            />
          </div>
        </div>
      </label>
    </form>
  );
};

export default CornerDotsColorInput;

CornerDotsColorInput.propTypes = {
  cdColor: PropTypes.string,
  setCdColor: PropTypes.func,
};
