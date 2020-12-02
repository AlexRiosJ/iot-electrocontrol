import React, { useState } from "react";

const UsageLog = ({ usageHistory }) => {
  const [state, setState] = useState({
    totalPages: Math.ceil(usageHistory.length / 10),
    currPage: 1,
    logsPerPage: 10
  });

  const paginate = (array, pageSize, pageNumber) => {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  };

  const prevPage = () => {
    if (state.currPage > 1) {
      setState({ ...state, currPage: state.currPage - 1 });
    }
  };

  const nextPage = () => {
    if (state.currPage < state.totalPages) {
      setState({ ...state, currPage: state.currPage + 1 });
    }
  };

  return (
    <>
      <div className="card">
        <div className="table-responsive">
          <button
            className={`btn m-2 float-left ${
              state.currPage === 1 ? "btn-secondary disabled" : "btn-success"
            }`}
            onClick={prevPage}
          >
            <i className="fas fa-angle-left" /> Prev
          </button>
          <button
            className="btn btn-secondary m-2 float-left"
            onClick={() => setState({ ...state, currPage: 1 })}
          >
            First
          </button>
          <div className="form-group float-left m-2">
            <select
              className="custom-select"
              style={{ width: "200px" }}
              value={state.logsPerPage}
              onChange={(event) => {
                setState({
                  ...state,
                  logsPerPage: event.target.value,
                  totalPages: Math.ceil(
                    usageHistory.length / event.target.value
                  )
                });
              }}
            >
              <option value={5}>Show 5 logs per page</option>
              <option value={10}>Show 10 logs per page</option>
              <option value={15}>Show 15 logs per page</option>
              <option value={20}>Show 20 logs per page</option>
            </select>
          </div>
          <button
            className={`btn m-2 float-right ${
              state.currPage === state.totalPages
                ? "btn-secondary disabled"
                : "btn-success"
            }`}
            onClick={nextPage}
          >
            Next <i className="fas fa-angle-right" />
          </button>
          <h4 className="text-center mt-2">
            Page {state.currPage} of {state.totalPages}
          </h4>

          <table className="table table-hover table-striped table-bordered table-sm">
            <thead>
              <tr className="d-flex">
                <th className="col-4">Created At</th>
                <th className="col-8">Value</th>
              </tr>
            </thead>
            <tbody>
              {paginate(usageHistory, state.logsPerPage, state.currPage).map(
                (elem) => (
                  <tr className="d-flex" key={elem.id}>
                    <td className="col-4" key={`${elem.id}-date`}>
                      {new Date(elem.created_at).toLocaleDateString(
                        "en-US",
                        dateFormat
                      )}
                    </td>
                    <td className="col-8" key={`${elem.id}-value`}>
                      {Number(elem.value).toFixed(2)}kW
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          <small className="text-muted">
            Record {(state.currPage - 1) * state.logsPerPage + 1} through{" "}
            {state.currPage * state.logsPerPage > usageHistory.length
              ? usageHistory.length
              : state.currPage * state.logsPerPage}{" "}
            of {usageHistory.length}
          </small>
        </div>
      </div>
    </>
  );
};

const dateFormat = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
};

export default UsageLog;
