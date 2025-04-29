import PropTypes from "prop-types";

const FgColorInput = ({ fgColor, setFgColor }) => {
  return (
    <form className="row m-2 p-2">
      <label className="form-label">
        Dots Color
        <div className="row">
          <div className="col">
            <input
              id="fg-color-hex"
              type="text"
              className="form-control text-body-tertiary"
              onChange={(tempColor) => setFgColor(tempColor.target.value)}
              value={fgColor}
            />
          </div>
          <div className="col-auto w-25">
            <input
              type="color"
              className="w-100 form-control form-control-color text-secondary"
              aria-label="fgColor"
              aria-describedby="bgColor"
              onChange={(tempColor) => setFgColor(tempColor.target.value)}
              value={fgColor}
            />
          </div>
        </div>
      </label>
    </form>
  );
};

export default FgColorInput;

FgColorInput.propTypes = {
  fgColor: PropTypes.string,
  setFgColor: PropTypes.func,
};
