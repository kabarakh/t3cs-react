import React, { useState } from "react";

function DateList() {
  let [dateList, setDateList] = useState([]);

  const addDate = function() {
    dateList.push(new Date());
    setDateList(dateList);
  };

  return (
    <React.Fragment>
      <button onClick={addDate}>Add current Date</button>

      <ul>
        {dateList.map(date => (
          <li>{date.toLocaleString()}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default DateList;
