import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function ClassRoom() {
  const { user } = useSelector(state => state?.authUser);
  const [roomID, setRoomID] = useState('');
  const containerRef = useRef(null);
  const [isMeetingStarted, setIsMeetingStarted] = useState(false);

  const handleJoinOrCreate = async () => {
    if (!roomID) {
      alert('Please enter Room ID');
      return;
    }

    const appID = 1711344319;
    const serverSecret = 'ed5e7de9a6e7a3dc8c66f66804ae4ad1';
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
    <div className="w-screen h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-5 overflow-hidden ">
      {!isMeetingStarted ? (
        <motion.div
          className="backdrop-blur-xl bg-white/10 rounded-xl p-10 shadow-2xl text-center max-w-md w-full z-10"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.h2
            className="text-white text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {user.role === 'instructor'
              ? 'Create a Class Room'
              : 'Join Your Class'}
          </motion.h2>

          <motion.input
            type="text"
            placeholder="Enter Room ID"
            value={roomID}
            onChange={e => setRoomID(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          />

          <motion.button
            onClick={handleJoinOrCreate}
            className={`w-full py-2 rounded-full cursor-pointer font-semibold text-white transition duration-300 ${
              user.role === 'instructor'
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.5 }}
          >
            {user.role === 'instructor' ? 'Create Meeting' : 'Join Meeting'}
          </motion.button>
        </motion.div>
      ) : (
        <div ref={containerRef} className="w-full h-full" />
      )}
    </div>
  );
}
