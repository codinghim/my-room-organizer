export const getRoomData = () => {
  const data = localStorage.getItem("myRoomData");
  return data
    ? JSON.parse(data)
    : {
        room: [
          { id: "desk", name: "책상", subfolders: [] },
          { id: "wardrobe", name: "벽장", subfolders: [] },
          { id: "closet", name: "옷걸이", subfolders: [] },
          { id: "bed", name: "침대", subfolders: [] },
          { id: "box", name: "상자", subfolders: [] },
        ],
      };
};

export const saveRoomData = (data) => {
  localStorage.setItem("myRoomData", JSON.stringify(data));
};
