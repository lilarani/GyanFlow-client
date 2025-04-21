import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { FaVideo } from 'react-icons/fa';
import { MdOutlineSecurity, MdPeopleAlt } from 'react-icons/md';
import { useSelector } from 'react-redux';

export default function CreateMeeting() {
  const navigate = useNavigate();
  // let { user } = useSelector(state => state.authUser);
  const { user, loader } = useSelector(state => state?.authUser);

  console.log(user);
  const createMeeting = () => {
    console.log('clicked');
    navigate('/join-meeting');
  };

  return (
    <div className=" py-10 relative bg-gradient-to-br from-[#1e0033] to-[#4c1d95] flex items-center justify-center px-4 overflow-hidden h-full">
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:20px_20px] opacity-5 z-0 animate-pulse" />

      <motion.div
        className="relative z-10 flex flex-col items-center text-white text-center max-w-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="bg-white/10 p-6 rounded-full mb-6 shadow-2xl backdrop-blur-md"
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <FaVideo className="text-6xl text-white" />
        </motion.div>

        <motion.h1
          className="text-2xl md:text-5xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {user?.name} , Welcome to Our GyanFlow{' '}
          <span className="text-purple-300">ClassMeet </span>
        </motion.h1>

        {user?.role === 'instructor' ? (
          <motion.p
            className="text-lg md:text-xl mb-6 text-white/80"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Create a new meeting and invite your classmates to join. <br />
            Fast, secure and easy-to-use platform for smart classrooms.
          </motion.p>
        ) : (
          <motion.p
            className="text-lg md:text-xl mb-6 text-white/80"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Join our meeting and invite your classmates to join. <br />
          </motion.p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <motion.div
            className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-xl flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <MdOutlineSecurity className="text-3xl text-white" />
            <div className="text-left">
              <h2 className="font-bold text-white">Secure Room</h2>
              <p className="text-sm text-white/70">
                End-to-end encrypted meetings
              </p>
            </div>
          </motion.div>
          <motion.div
            className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-xl flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <MdPeopleAlt className="text-3xl text-white" />
            <div className="text-left">
              <h2 className="font-bold text-white">Up to 100 Participants</h2>
              <p className="text-sm text-white/70">
                Join with large team or class
              </p>
            </div>
          </motion.div>
        </div>

        <motion.button
          onClick={createMeeting}
          whileHover={{
            scale: 1.1,
            boxShadow: '0px 0px 15px rgba(255,255,255,0.6)',
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-white  cursor-pointer text-purple-700 font-bold uppercase px-8 py-3 rounded-full shadow-xl transition-all duration-300"
        >
          {user?.role === 'instructor' ? 'Create Meeting' : 'Join Meeting'}
        </motion.button>
      </motion.div>
    </div>
  );
}
