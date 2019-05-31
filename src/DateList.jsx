import React, { useState } from "react";

function DateList() {
  let [dateList] = useState([]);

  const addDate = function() {
    dateList.push(new Date());
  };

  return (
    <React.Fragment>
      <button onClick={addDate}>Add current Date</button>

      <ul>
        {dateList.map(date => (
          <li>date.toLocaleString()</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default DateList;
