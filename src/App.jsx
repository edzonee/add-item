import { Fragment, useState } from "react";
import Form from "./Components/Form";
import RenderItems from "./Components/RenderItems";
import Filter from "./Components/Filter";
import "./Styles/Fridge.css";
import "./Styles/Card.css";

const App = () => {
  const [productItem, setProductItem] = useState([]);
  const btnList = [];

  const filterButton = (string) => {
    let temporraryArray = productItem;
    for (const item of temporraryArray) {
      if (item.productCategory === string) {
        item.show = true;
      } else if (string === "All") {
        item.show = true;
      } else {
        item.show = false;
      }
    }
    setProductItem([...temporraryArray]);
  };

  return (
    <Fragment>
      <div className="container">
        <div className="fridge-container">
          <Form productItem={productItem} setProductItem={setProductItem} />
        </div>
        {productItem.length > 0 && (
          <Filter
            productItem={productItem}
            setProductItem={setProductItem}
            btnList={btnList}
            filterButton={filterButton}
          />
        )}
        <>
          <RenderItems productItem={productItem} />
        </>
      </div>
    </Fragment>
  );
};

export default App;
