import PropTypes from "prop-types";

const UrlInput = ({ url, setUrl }) => {
  return (
    <form className="row m-2 p-2">
      <label className="form-label" htmlFor="url-input">
        Type your website.
      </label>
      <div className="input-group m-1 p-1">
        <input
          id="url-input"
          type="url"
          className="form-control"
          placeholder="valerteatro.com.br"
          aria-label="URL"
          aria-describedby="url"
          onChange={(tempUrl) => setUrl(tempUrl.target.value)}
          value={url}
        />
      </div>
    </form>
  );
};

export default UrlInput;

UrlInput.propTypes = {
  url: PropTypes.string,
  setUrl: PropTypes.func,
};
