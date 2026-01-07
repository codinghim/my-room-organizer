import React, { useState } from "react";
import ItemCard from "./ItemCard";

function SpaceDetail({ space, onBack, roomData, setRoomData }) {
  const [newSubfolder, setNewSubfolder] = useState("");
  const [selectedSubfolder, setSelectedSubfolder] = useState(null);
  const [newItemName, setNewItemName] = useState("");

  const handleAddSubfolder = () => {
    if (!newSubfolder) return;
    const updatedRoom = { ...roomData };
    const targetSpace = updatedRoom.room.find((s) => s.id === space.id);
    targetSpace.subfolders.push({
      id: Date.now().toString(),
      name: newSubfolder,
      items: [],
    });
    setRoomData(updatedRoom);
    setNewSubfolder("");
  };

  const handleAddItem = () => {
    if (!newItemName || !selectedSubfolder) return;
    const updatedRoom = { ...roomData };
    const targetSpace = updatedRoom.room.find((s) => s.id === space.id);
    const folder = targetSpace.subfolders.find(
      (sf) => sf.id === selectedSubfolder.id
    );
    folder.items.push({
      id: Date.now().toString(),
      name: newItemName,
      tags: [],
      note: "",
      photo: "",
    });
    setRoomData(updatedRoom);
    setNewItemName("");
  };

  const handleAddPhoto = (e, folder, item) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const updatedRoom = { ...roomData };
      const targetSpace = updatedRoom.room.find((s) => s.id === space.id);
      const targetFolder = targetSpace.subfolders.find(
        (sf) => sf.id === folder.id
      );
      const targetItem = targetFolder.items.find((it) => it.id === item.id);
      targetItem.photo = ev.target.result;
      setRoomData(updatedRoom);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <button onClick={onBack}>← Back</button>
      <h2>{space.name}</h2>

      <h3>Subfolders</h3>
      <ul>
        {space.subfolders.map((sf) => (
          <li key={sf.id} onClick={() => setSelectedSubfolder(sf)}>
            <b>{sf.name}</b> ({sf.items.length} items)
            <ul>
              {sf.items.map((item) => (
                <li key={item.id}>
                  <ItemCard item={item} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleAddPhoto(e, sf, item)}
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "10px" }}>
        <input
          value={newSubfolder}
          onChange={(e) => setNewSubfolder(e.target.value)}
          placeholder="New subfolder"
        />
        <button onClick={handleAddSubfolder}>Add Subfolder</button>
      </div>

      {selectedSubfolder && (
        <div style={{ marginTop: "10px" }}>
          <h4>Add item to {selectedSubfolder.name}</h4>
          <input
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder="Item name"
          />
          <button onClick={handleAddItem}>Add Item</button>
        </div>
      )}
    </div>
  );
}

export default SpaceDetail;
