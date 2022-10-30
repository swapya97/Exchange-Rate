import React from 'react';


function StartMonth(props) {
    
    const dropdownYears = [2022, 2021, 2020, 2019, 2018]
    const dropdownStartMonths = [
        {value: '00', text: 'Jan',},
        {value: '01', text: 'Feb',}, 
        {value: '02', text: 'Mar',}, 
        {value: '03', text: 'Apr',}, 
        {value: '04', text: 'May',}, 
        {value: '05', text: 'Jun',}, 
        {value: '06', text: 'Jul',}, 
        {value: '07', text: 'Aug',}, 
        {value: '08', text: 'Sep',}, 
        {value: '09', text: 'Oct',}, 
        {value: '10', text: 'Nov',}, 
        {value: '11', text: 'Dec',}, 
    ]

  return (
    <div className="months">
        <label for="start_month">Start Month:</label>
        <select id="start_month"
            value={props.startMonth}
            onChange={props.onChange}>
            {dropdownStartMonths.map(month => (
                <option key={month.value} value={month.value}>{month.text}</option>
            ))}
        </select>
        <select id="start_year"
            value={props.startYear}
            onChange={props.onSetStartYear}>
                {dropdownYears.map(year => (
                    <option key={year}>{year}</option>
                ))}
        </select>
    </div>
  );
}

export default StartMonth;