import React from "react";

// Predefined room layout with positions (percentages for responsive layout)
const defaultLayout = [
  { id: "desk", name: "책상", x: 10, y: 10 },
  { id: "wardrobe", name: "벽장", x: 60, y: 10 },
  { id: "closet", name: "옷걸이", x: 10, y: 50 },
  { id: "bed", name: "침대", x: 60, y: 50 },
  { id: "box", name: "상자", x: 35, y: 35 },
];

function RoomMap({ roomData, onSelectSpace }) {
  return (
    <div>
      <h2>My Room</h2>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "400px",
          border: "2px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {roomData.room.map((space, index) => {
          // Get position from defaultLayout, fallback to 0
          const layout = defaultLayout.find((l) => l.id === space.id) || {
            x: 0,
            y: 0,
          };

          return (
            <div
              key={space.id}
              style={{
                position: "absolute",
                left: `${layout.x}%`,
                top: `${layout.y}%`,
                width: "80px",
                height: "80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                cursor: "pointer",
                backgroundColor: "#4CAF50",
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
                flexDirection: "column",
              }}
              onClick={() => onSelectSpace(space)}
            >
              {/* Use icon if available, fallback to name */}
              <img
                src={`/icons/${space.id}.png`}
                alt={space.name}
                style={{ width: "50px", height: "50px", marginBottom: "5px" }}
                onError={(e) => {
                  e.target.style.display = "none"; // hide broken image
                }}
              />
              <span>{space.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RoomMap;
