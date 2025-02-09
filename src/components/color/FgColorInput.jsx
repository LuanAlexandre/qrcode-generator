import PropTypes from "prop-types";

const FgColorInput = ({ fgColor, setFgColor }) => {
  return (
    <form className="row align-items-center m-2 p-2">
      <label className="form-label">Foreground Color</label>
      <div className="col w-100">
        <input
          type="text"
          className="form-control"
          onChange={(tempColor) => setFgColor(tempColor.target.value)}
          value={fgColor}
        />
      </div>
      <div className="col-auto w-25">
        <input
          type="color"
          className="w-100 form-control form-control-color"
          aria-label="fgColor"
          aria-describedby="bgColor"
          onChange={(tempColor) => setFgColor(tempColor.target.value)}
          value={fgColor}
        />
      </div>
    </form>
  );
};

export default FgColorInput;

FgColorInput.propTypes = {
  fgColor: PropTypes.string,
  setFgColor: PropTypes.func,
};
