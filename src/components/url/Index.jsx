import PropTypes from "prop-types";
import UrlInput from "./UrlInput";

const Index = ({ url, setUrl }) => {
  return (
    <div className="m-2 p-2">
      <div className="accordion" id="accordion-url">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#url"
              aria-expanded="true"
              aria-controls="url"
            >
              URL
            </button>
          </h2>
          <div
            id="url"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion-url"
          >
            <div className="accordion-body">
              <UrlInput url={url} setUrl={setUrl} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

Index.propTypes = {
  url: PropTypes.string,
  setUrl: PropTypes.func,
};
