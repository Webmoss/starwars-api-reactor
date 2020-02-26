import React from 'react';
import "./styles.sass";

const Rating = props => (
  <div className="rating">
    <ul>
      <li>
        <a title="Terrible" className="terrible">*</a>
      </li>
      <li>
        <a title="Bad" className="bad">*</a>
      </li>
      <li>
        <a title="Good" className="good">*</a>
      </li>
      <li>
        <a title="Great" className="great">*</a>
      </li>
      <li>
        <a title="Fantastic" className="fantastic">*</a>
      </li>
    </ul>
  </div>
);

export default Rating;
