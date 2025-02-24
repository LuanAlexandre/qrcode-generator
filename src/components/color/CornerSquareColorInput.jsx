import PropTypes from "prop-types";

const CornerSquareColorInput = ({ csColor, setCsColor }) => {
  return (
    <form className="row m-2 p-2">
      <label className="form-label">
        Corner Square Color
        <div className="row">
          <div className="col">
            <input
              id="cs-color-hex"
              type="text"
              className="form-control"
              onChange={(tempColor) => setCsColor(tempColor.target.value)}
              value={csColor}
            />
          </div>
          <div className="col-auto w-25">
            <input
              type="color"
              className="w-100 form-control form-control-color"
              aria-label="csColor"
              aria-describedby="csColor"
              onChange={(tempColor) => setCsColor(tempColor.target.value)}
              value={csColor}
            />
          </div>
        </div>
      </label>
    </form>
  );
};

export default CornerSquareColorInput;

CornerSquareColorInput.propTypes = {
  csColor: PropTypes.string,
  setCsColor: PropTypes.func,
};
