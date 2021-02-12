import React from "react";

const RadioButton = ({ state }) => (
  <div>
    <input type="radio" id="male" name="gender" value="male" />
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female" />
    <label for="female">Female</label>
    <input type="radio" id="other" name="gender" value="other" />
    <label for="other">Other</label>
  </div>
);

export default RadioButton;
