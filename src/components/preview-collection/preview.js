import React from "react";
import "../preview-collection/preview.scss";
import CollectionItem from "../collection-item/collectionItem";

const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
    </div>
  </div>
);

export default PreviewCollection;
