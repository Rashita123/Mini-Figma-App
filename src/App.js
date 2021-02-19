import "./styles.css";
import { useState } from "react";

export default function App() {
  const [fontsize, setFontSize] = useState(20);
  const [fontFamily, setFontFamily] = useState("Arial");

  const availableFontFamily = ["Arial", "cursive", "Times New Roman"];

  function increaseFontSizeHandler() {
    setFontSize(fontsize + 8);
  }
  function decreaseFontSizeHandler() {
    if (fontsize > 15) setFontSize(fontsize - 8);
  }
  function giveFontSize() {
    return { fontSize: fontsize + "px", fontFamily: fontFamily };
  }

  function SelectFontSizeButtons() {
    return (
      <div style={{ display: "inline", margin: "2rem" }}>
        <button onClick={increaseFontSizeHandler}>+</button>
        <span>{fontsize}</span>
        <button onClick={decreaseFontSizeHandler}>-</button>
      </div>
    );
  }

  function checkvalue(event) {
    setFontFamily(event.target.value);
  }

  function SelectFontFamily() {
    return (
      <select
        selected
        value={fontFamily}
        style={{ display: "inline", margin: "2rem" }}
        onChange={checkvalue}
      >
        {availableFontFamily.map((font) => (
          <option value={font}>{font}</option>
        ))}
      </select>
    );
  }
  return (
    <div className="App">
      <h1>Mini Figma</h1>
      <h3 style={{ display: "inline" }}>
        <u>Set Font Size</u>
      </h3>
      <SelectFontSizeButtons />
      <br></br>
      <h3 style={{ display: "inline" }}>
        <u>Set Font Size</u>
      </h3>
      <SelectFontFamily />

      <p style={giveFontSize()}>Font will be applied to this text</p>

      <div className="copyCSSstyling">
        <h3>
          <u>Copy CSS from here</u>
        </h3>
        <div style={{ width: "30%", margin: "auto" }}>
          <p>font-size: {fontsize}px;</p>
          <p>font-family: {fontFamily}</p>
        </div>
      </div>
    </div>
  );
}
