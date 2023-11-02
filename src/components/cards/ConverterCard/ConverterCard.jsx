import { useEffect, useState } from "react";
import icon from "../../../assets/images/icon.png";

function ConverterCard() {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [unit, setUnit] = useState("");
  const [result, setResult] = useState(0);

  useEffect(() => {
    handleResult(category, amount)
  }, [category, amount])


  // HANDLE THE CATEGORY STATE WHEN HAS BEEN CHANGED
  const handleCategoryChange = (event) => {
    const newCategoryState = event.target.value
    setCategory(newCategoryState)
    handleUnit(newCategoryState)
  }

  // HANDLE THE AMOUNT STATE WHEN HAS BEEN MODIFIED
  const handleAmountChange = (event) => {
    const newAmountState = event.target.value
    setAmount(newAmountState)
  }
  
  // HANDLE THE UNIT STATE WHEN THE CATEGORY CHANGE
  const handleUnit = (category) => {
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

  // FUNCTION TO OPERATE BETWEEN THE DIFERENTS CONVERTIONS
  const handleResult = (category, amount) => {
    switch(category) {
      case "kmMil":
        setResult(amount * 0.62)
        break;
      case "milKm":
        setResult(amount * 1.60)
        break;
      case "mFt":
        setResult(amount * 3.28)
        break;
      case "ftM":
        setResult(amount * 0.39)
        break;
      case "cmIn":
        setResult(amount * 0.39)
        break;
      case "inCm":
        setResult(amount * 2.54)
        break;
      default:
        setResult(0)
        break;
    }
  }



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
              type="number"
              name="number"
              onChange={handleAmountChange}
              value={amount}
            />
            <span>{unit}</span>
          </div>
        </div>

        <div className="converter__form--row2">
          <button>♡</button>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
}

export default ConverterCard;
