import React, { useState } from "react";

const UsageLog = ({ usageHistory }) => {
  const [state, setState] = useState({
    totalPages: Math.ceil(usageHistory.length / 5),
    currPage: 1
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
            className={`btn  m-2 float-left ${
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
              {paginate(usageHistory, 5, state.currPage).map((elem) => (
                <tr className="d-flex" key={elem.id}>
                  <td className="col-4" key={`${elem.id}-date`}>
                    {new Date(elem.created_at).toLocaleDateString(
                      "en-US",
                      dateFormat
                    )}
                  </td>
                  <td className="col-8" key={`${elem.id}-value`}>
                    {elem.value}kWh
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <small className="text-muted">
            Record {(state.currPage - 1) * 5 + 1} through{" "}
            {state.currPage * 5 > usageHistory.length
              ? usageHistory.length
              : state.currPage * 5}{" "}
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
