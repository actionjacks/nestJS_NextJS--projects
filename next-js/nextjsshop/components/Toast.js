const Toast = ({ msg, handleShow, bgColor }) => {
  return (
    <div
      className={`toast show position-fixed text-light ${bgColor}`}
      style={{ top: "5px", right: "5px", zIndex: 9, minWidth: "280px" }}
    >
      <div
        className={`toast-header ${bgColor} text-light justify-content-between`}
      >
        <strong className="mr-auto text-light">{msg.title}</strong>

        <button
          type="button"
          className={`ml-2 mb-1 ms-5 close text-light ${
            msg.msg === "OK" ? "btn-success" : "btn-danger"
          }`}
          data-dismiss="toast"
          style={{ outline: "none" }}
          onClick={handleShow}
        >
          x
        </button>
      </div>

      <div className="toast-body">{msg.msg}</div>
    </div>
  );
};

export default Toast;
