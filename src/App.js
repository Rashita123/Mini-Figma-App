import "./styles.css";
import { useState } from "react";

export default function App() {
  const [fontsize, setFontSize] = useState(20);
  const [fontFamily, setFontFamily] = useState("Arial");
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [textColor, setTextColor] = useState("#000000");

  const availableFontFamily = ["Arial", "cursive", "Times New Roman"];

  function increaseFontSizeHandler() {
    setFontSize(fontsize + 8);
  }
  function decreaseFontSizeHandler() {
    if (fontsize > 15) setFontSize(fontsize - 8);
  }
  function giveFontSize() {
    return {
      fontSize: fontsize + "px",
      fontFamily: fontFamily,
      background: bgColor,
      borderRadius: "3px",
      color: textColor
    };
  }

  function SelectFontSizeButtons() {
    return (
      <div style={{ display: "inline", margin: " 1rem 2rem" }}>
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
        style={{ display: "inline", margin: " 1rem 2rem" }}
        onChange={checkvalue}
      >
        {availableFontFamily.map((font) => (
          <option value={font}>{font}</option>
        ))}
      </select>
    );
  }
  function textColorHandler(event) {
    setTextColor(event.target.value);
  }

  function bgColorHandler(event) {
    setBgColor(event.target.value);
  }

  function SelectBackgroundColor() {
    return (
      <input
        style={{ display: "inline", margin: " 1rem 2rem" }}
        onChange={bgColorHandler}
        type="color"
        value={bgColor}
      />
    );
  }

  function SelectTextColor() {
    return (
      <input
        style={{ display: "inline", margin: " 1rem 2rem" }}
        onChange={textColorHandler}
        type="color"
        value={textColor}
      />
    );
  }

  return (
    <div className="App">
      <h1>Mini Figma</h1>

      {/* //FontSize Section start */}

      <h3 style={{ display: "inline" }}>
        <u>Set Font Size</u>
      </h3>
      <SelectFontSizeButtons />

      <br></br>

      {/* Font Family Section Start */}

      <h3 style={{ display: "inline" }}>
        <u>Set Font Size</u>
      </h3>
      <SelectFontFamily />

      <br></br>

      {/* Set Background Section Start */}

      <h3 style={{ display: "inline" }}>
        <u>Set Background Color</u>
      </h3>

      <SelectBackgroundColor />

      <br></br>

      <h3 style={{ display: "inline" }}>
        <u>Set Text Color</u>
      </h3>
      <SelectTextColor />

      {/* Text Display Section Start */}

      <p style={giveFontSize()}>Font will be applied to this text</p>

      {/* Css copy section start */}
      <div className="copyCSSstyling">
        <h3>
          <u>Copy CSS from here</u>
        </h3>
        <div style={{ width: "30%", margin: "auto" }}>
          <p>font-size: {fontsize}px;</p>
          <p>font-family: {fontFamily}</p>
          <p>background-color: {bgColor}</p>
          <p>color: {textColor}</p>
        </div>
      </div>

      {/* All Done */}
    </div>
  );
}
