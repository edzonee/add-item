import React from "react";
import "../Styles/Filter.css";

class Filter extends React.Component {
  render() {
    return (
      <div className="btns">
        <button
          onClick={() => this.props.filterButton("All")}
          className="category-item"
          value={this.props.string}
        >
          All
        </button>
        {this.props.productItem.map((item, index) => {
          if (!this.props.btnList.includes(item.productCategory)) {
            this.props.btnList.push(item.productCategory);

            return (
              <div key={index}>
                <button
                  onClick={() => this.props.filterButton(item.productCategory)}
                  className="category-item"
                  value={this.props.value}
                >
                  {item.productCategory}
                </button>{" "}
              </div>
            );
          }
          return "";
        })}
      </div>
    );
  }
}

export default Filter;
