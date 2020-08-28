import React from "react";
import { FilterActions } from "../actions/filter-actions.component";

export const Filter = ({ filters, setFilters, handleSubmit, cancel }) => {
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={
        "card bg-secondary p-2 animate__animated animate__slideInRight mb-2"
      }
    >
      <div className={"row justify-content-between"}>
        <div className={"col-9"}>
          <div className={"form-group"}>
            <select className="form-control" value={filters.value} onChange={(e) => setFilters({...filters, value: e.target.value})}>
              {filters.items.map((filter, i) => (
                <option key={i}>{filter}</option>
              ))}
            </select>
          </div>
        </div>
        <div className={"col-3"}>
          <FilterActions cancel={() => cancel()} />
        </div>
      </div>
    </form>
  );
};
