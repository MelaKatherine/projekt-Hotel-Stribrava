import dayjs from 'dayjs';
import './order.css';
import { useState } from 'react';

export const Order = () => {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const numberOfDays = dayjs(dateTo).diff(dayjs(dateFrom), 'day') || 1;

  console.log(numberOfDays);

  return (
    <form>
      <div className="form-fields">
        <label htmlFor="dateFrom" className="field-label">
          Od:
        </label>
        <input
          id="dateFrom"
          className="field-input"
          type="date"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
        />

        <label htmlFor="dateTo" className="field-label">
          Do:
        </label>
        <input
          id="dateTo"
          className="field-input"
          type="date"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
        />

        <label htmlFor="select" className="field-label">
          Select:
        </label>
        <select id="select" className="field-input">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </select>

        <label htmlFor="check1" className="field-label">
          Checkbox 1:
        </label>
        <input id="check1" className="field-input" type="checkbox" />
      </div>
      <button className="wide">Submit</button>
    </form>
  );
};
