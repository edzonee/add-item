import Card from "./Card";

import "../Styles/Fridge.css";
import "../Styles/Card.css";

const RenderItems = (props) => {
  return (
    <div className="item-containers">
      {props.productItem.map((value, index) => {
        return (
          value.show && (
            <Card className="user-items" key={index}>
              <p>Product name: {value.productName}</p>
              <p>Product amount: {value.productAmount}</p>
              <p>Product expiration date: {value.productDate}</p>
              <p>Product category: {value.productCategory}</p>
            </Card>
          )
        );
      })}
    </div>
  );
};

export default RenderItems;
