import React from "react";

function ItemCard({ item }) {
  return (
    <div style={{ marginLeft: "20px", marginTop: "5px" }}>
      <b>{item.name}</b>
      {item.tags && item.tags.length > 0 && (
        <span> ({item.tags.join(", ")})</span>
      )}
      {item.note && <div style={{ fontStyle: "italic" }}>Note: {item.note}</div>}
      {item.photo && (
        <img
          src={item.photo}
          alt={item.name}
          style={{ width: "80px", display: "block", marginTop: "5px" }}
        />
      )}
    </div>
  );
}

export default ItemCard;
