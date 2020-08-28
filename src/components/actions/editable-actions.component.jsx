import React from 'react'
import { SVGCheck, SVGCancel } from '../svg/svg.component'

export const EditableActions = ({ cancel }) => {
  return (
    <div className={"row"}>
      <div className={"col-6"}>
        <button type={"submit"} className={"btn btn-success btn-block"}>
          <SVGCheck color={"#FFF"} />
        </button>
      </div>
      <div className={"col-6"}>
        <button
          onClick={cancel}
          type={"button"}
          className={"btn btn-outline-danger btn-block"}
        >
          <SVGCancel color={"#FFF"} />
        </button>
      </div>
    </div>
  )
}
