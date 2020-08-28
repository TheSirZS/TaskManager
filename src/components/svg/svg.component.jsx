import React from "react";

export const SVGStart = ({ color }) => {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 16 16"
      className="bi bi-caret-right"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M6 12.796L11.481 8 6 3.204v9.592zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"
      />
    </svg>
  );
};

export const SVGStop = ({ color }) => {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 16 16"
      className="bi bi-stop"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M3.5 5A1.5 1.5 0 0 1 5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5zM5 4.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H5z"
      />
    </svg>
  );
};

export const SVGPause = ({ color }) => {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 16 16"
      className="bi bi-pause-fill"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
    </svg>
  );
};

export const SVGReset = ({ color }) => {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 16 16"
      className="bi bi-arrow-counterclockwise"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M12.83 6.706a5 5 0 0 0-7.103-3.16.5.5 0 1 1-.454-.892A6 6 0 1 1 2.545 5.5a.5.5 0 1 1 .91.417 5 5 0 1 0 9.375.789z"
      />
      <path
        fillRule="evenodd"
        d="M7.854.146a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 1 0 .708-.708L5.707 3 7.854.854a.5.5 0 0 0 0-.708z"
      />
    </svg>
  );
};

export const SVGSearch = ({ color }) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search mb-1" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
    <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
  </svg>
  )
}

export const SVGCancel = ({ color }) => {
  return (
    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-x" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
      <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
    </svg>
  )
}

export const SVGDots = ({ color }) => {
  return (
    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg>
  )
}

export const SVGEdit = ({ color }) => {
  return (
    <svg width="0.9em" height="0.9em" viewBox="0 0 16 16" className="bi bi-pencil mb-1" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
    <path fillRule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
  </svg>
  )
}

export const SVGDelete = ({ color }) => {
  return (
    <svg width="0.9em" height="0.9em" viewBox="0 0 16 16" className="bi bi-trash mb-1" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
      <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>
  )
}

export const SVGCheck = ({ color }) => {
  return (
    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-check2" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
    </svg>
  )
}
