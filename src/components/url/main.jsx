const main = ({ url, setUrl }) => {
  return (
    <div className="input-group m-1 p-1">
      <span className="input-group-text" id="url">
        URL
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Type URL."
        aria-label="URL"
        aria-describedby="url"
        onChange={(tempUrl) => setUrl(tempUrl.target.value)}
        value={url}
      />
    </div>
  );
};

export default main;
