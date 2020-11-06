import React, { useRef, useState, useEffect } from "react";
import {
  select,
  line
} from "d3";

function Main() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState([]);

  const svgRef = useRef();
  useEffect(() => {

    const svg = select(svgRef.current);
    const myLine = line()
      .x((value, index) => index * 50)
      .y(value => value);
    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", value => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "blue");
  }, [data]);

  function handleAddData(e) {
    e.preventDefault();
    setData([...data, input]);
    setInput('');
  }

  return (
    <React.Fragment>
      <svg ref={svgRef}>
      </svg>
      <br />
      <input className="form"
        value={input}
        onChange={e => setInput(e.target.value)}
        type="text"
        name="todo"
        id="title"
        placeholder="Enter values"
      />
      <br />
      <button onClick={handleAddData}>Add</button>

    </React.Fragment>

  );
}

export default Main;
