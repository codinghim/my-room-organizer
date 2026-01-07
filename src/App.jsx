import { useState, useEffect } from "react";
import RoomMap from "./components/RoomMap";
import SpaceDetail from "./components/SpaceDetail";
import { getRoomData, saveRoomData } from "./utils/storage";

function App() {
  const [roomData, setRoomData] = useState(getRoomData());
  const [selectedSpace, setSelectedSpace] = useState(null);

  useEffect(() => {
    saveRoomData(roomData);
  }, [roomData]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {selectedSpace ? (
        <SpaceDetail
          space={selectedSpace}
          onBack={() => setSelectedSpace(null)}
          roomData={roomData}
          setRoomData={setRoomData}
        />
      ) : (
        <RoomMap roomData={roomData} onSelectSpace={setSelectedSpace} />
      )}
    </div>
  );
}

export default App;
