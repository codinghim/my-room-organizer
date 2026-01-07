import React from "react";

const iconStyles = {
  width: "100px",
  height: "100px",
  margin: "10px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#e0e0e0",
  borderRadius: "10px",
  textAlign: "center",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "14px",
};

function RoomMap({ roomData, onSelectSpace }) {
  return (
    <div>
      <h2>My Room</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {roomData.room.map((space) => (
          <div
            key={space.id}
            style={iconStyles}
            onClick={() => onSelectSpace(space)}
          >
            {space.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomMap;
