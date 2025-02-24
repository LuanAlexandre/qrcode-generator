import PropTypes from "prop-types";

const BgColorInput = ({ bgColor, setBgColor }) => {
  return (
    <form className="row m-2 p-2">
      <label className="form-label">
        Background Color
        <div className="row">
          <div className="col">
            <input
              id="bg-color-hex"
              type="text"
              className="form-control text-body-tertiary"
              onChange={(tempColor) => setBgColor(tempColor.target.value)}
              value={bgColor}
            />
          </div>
          <div className="col-auto w-25">
            <input
              type="color"
              className="w-100 form-control form-control-color"
              aria-label="bgColor"
              aria-describedby="bgColor"
              onChange={(tempColor) => setBgColor(tempColor.target.value)}
              value={bgColor}
            />
          </div>
        </div>
      </label>
    </form>
  );
};

export default BgColorInput;

BgColorInput.propTypes = {
  bgColor: PropTypes.string,
  setBgColor: PropTypes.func,
};
