import { useEffect, useState } from "react";
import icon from "../../../assets/images/icon.png";

function ConverterCard() {
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [unit, setUnit] = useState("");

/*   useEffect(() => {
    handleSpanUnit()
  },[]) */


  const handleCategoryChange = (event) => {
    const newCategoryState = event.target.value
    setCategory(newCategoryState)
    handleSpanUnit(newCategoryState)
  }
  const handleTextChange = (event) => setText(event.target.value);

  const handleSpanUnit = (category) => {
    switch(category) {
      case "kmMil":
        setUnit("km")
        break;
      case "milKm":
        setUnit("mil")
        break;
      case "mFt":
        setUnit("m")
        break;
      case "ftM":
        setUnit("ft")
        break;
      case "cmIn":
        setUnit("cm")
        break;
      case "inCm":
        setUnit("in")
        break;
      default:
        setUnit("km")
        break;
    }
  } 

  console.log("category selected:", category);
  console.log("unit selected:", unit);

  return (
    <div className="converter">
      <div className="converter__title">
        <h2>convert</h2>
      </div>

      <div className="converter__form">
        <div className="converter__form--row1">
          <div className="converter__form--row1__left">
            <select onChange={handleCategoryChange} value={category}>
            <option value="select">select</option>
            <option value="kmMil">km → mil</option>
            <option value="milKm">mil → km</option>
            <option value="mFt">m → ft</option>
            <option value="ftM">ft → m</option>
            <option value="cmIn">cm → in</option>
            <option value="inCm">in → cm</option>
            </select>
            <img src={icon} alt="" />
          </div>

          <div className="converter__form--row1__right">
            <input
              type="text"
              name="text"
              onChange={handleTextChange}
              value={text}
            />
            <span>{unit}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConverterCard;
