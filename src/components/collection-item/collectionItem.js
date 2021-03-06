import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-action";
import CustomBtn from "../custom-button/CustomBtn";

import "../collection-item/collectionItem.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomBtn onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomBtn>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
