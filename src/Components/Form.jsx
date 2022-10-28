import { useState } from "react";
import "../Styles/Filter.css";
import "../Styles/Fridge.css";

const Form = (props) => {
  const [productName, setProductName] = useState("");
  const [productAmount, setProductAmount] = useState('');
  const [productCategory, setProductCategory] = useState("");
  const [productDate, setProductDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const userObject = {
      productName,
      productAmount,
      productCategory,
      productDate,
      show: true,
    };
    props.setProductItem([...props.productItem, userObject]);
    setProductName("");
    setProductAmount('');
    setProductCategory("");
    setProductDate("");
    return;
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setProductName(e.target.value)}
          type="text"
          placeholder="Product name"
          value={productName}
          required
        />
        <input
          onChange={(e) => setProductAmount(e.target.value)}
          type="number"
          value={productAmount}
          placeholder="Product amount"
          required
        />
        <input
          onChange={(e) => setProductDate(e.target.value)}
          type="date"
          value={productDate}
          required
        />
        <input
          onChange={(e) => setProductCategory(e.target.value)}
          type="text"
          value={productCategory}
          placeholder="Product category"
          required
        />
        <button className="submit-item">Submit</button>
      </form>
    </>
  );
};

export default Form;
