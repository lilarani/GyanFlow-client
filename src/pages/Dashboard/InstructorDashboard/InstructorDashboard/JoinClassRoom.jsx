import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';

export default function ClassRoom() {
  const { user } = useSelector(state => state?.authUser);
  const [roomID, setRoomID] = useState('');
  const containerRef = useRef(null);
  const [isMeetingStarted, setIsMeetingStarted] = useState(false);

  const handleJoinOrCreate = async () => {
    if (!roomID) {
      alert("Please enter Room ID");
      return;
    }

    const appID = 1711344319;
    const serverSecret = "ed5e7de9a6e7a3dc8c66f66804ae4ad1";
    const userID = `${user?.email}`;
    const userName = `${user.role} ${userID}`;

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      userID,
      userName
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: containerRef.current,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
      sharedLinks: [
        {
          name: 'Copy this link to invite others',
          url: window.location.origin + '/classroom?roomID=' + roomID,
        },
      ],
    });

    setIsMeetingStarted(true);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center p-5">
      {!isMeetingStarted ? (
        <div className="space-y-4 text-center">
          <input
            type="text"
            placeholder="Enter Room ID"
            value={roomID}
            onChange={(e) => setRoomID(e.target.value)}
            className="border px-4 py-2 rounded"
          />
          <br />
          {user.role === 'instructor' ? (
            <button
              onClick={handleJoinOrCreate}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Create Meeting
            </button>
          ) : (
            <button
              onClick={handleJoinOrCreate}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Join Meeting
            </button>
          )}
        </div>
      ) : (
        <div ref={containerRef} className="w-full h-full" />
      )}
    </div>
  );
}
