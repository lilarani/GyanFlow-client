import { useCommentsMutation } from '@/redux/ApiCalling/apiClice';
import { useEffect, useState } from 'react';
import { FaRegComment } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const PostCard = ({ post }) => {
  let { user } = useSelector((state) => state.authUser)
  let [comments] = useCommentsMutation()
  const [commentSection, setCommentSection] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [comment, setComments] = useState([]);
  console.log('all comments = ', comment)
  const handleAddComment = async () => {
    if (commentInput.trim() === '') return;

    const newComment = {
      userInfo: user._id,
      postInfo: post._id,
      text: commentInput,
    };
    console.log(newComment)
    let res = await comments(newComment).unwrap()
    console.log('my response = ', res)
    setCommentInput('');
  };
  console.log(post)
  useEffect(() => {
    setComments([post.comments]);
  }, [])

  return (
    <div className="bg-[#1c1c2e] text-white p-5 hover:bg-gray-950 shadow-xl border border-gray-700 mb-6 hover:shadow-2xl transition-all duration-300 group">

      <div className="flex items-center gap-4 mb-3">
        <img
          src={post?.userId?.picture || 'https://via.placeholder.com/48'}
          className="w-14 h-14 rounded-full border-2 border-blue-500 group-hover:scale-105 transition-transform duration-300"
          alt="User"
        />
        <div>
          <h3 className="font-semibold text-lg group-hover:text-blue-400 transition duration-300">
            {post?.text}
          </h3>
          <span className="text-xs text-gray-500 block mt-1">
            {new Date(post?.createdAt || post?.date || Date.now()).toLocaleString()}
          </span>
        </div>
      </div>

      <p className="text-[20px] text-gray-200 mb-4 leading-relaxed tracking-wide">
        {post.description}
      </p>

      <div className="flex justify-start text-sm text-gray-400 pt-3  border-gray-700 mt-4">
        <button
          onClick={() => setCommentSection(!commentSection)}
          className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#2f2f45] hover:text-green-400 transition duration-300"
        >
          <FaRegComment className="text-md" /> Comment
        </button>
      </div>
      {commentSection && (
        <div className="mt-4 space-y-3">
          <div className="flex items-start gap-3">
            <img
              src={user?.picture}
              className="w-10 h-10 rounded-full"
              alt="User"
            />
            <div className="flex-1">
              <textarea
                rows={2}
                className="w-full bg-[#2b2b40] text-sm p-2 text-white resize-none placeholder:text-gray-400"
                placeholder="Write a comment..."
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
              />
              <div className="text-right mt-1">
                <button
                  onClick={handleAddComment}
                  className="text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1  transition"
                >
                  Post
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-2 max-h-52 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
            {post.comments.map((c) => (
              <div key={c._id} className="flex items-center pl-4 pr-8 rounded-md w-fit gap-3 bg-[#2a2a3f] p-3">
                <img className='h-12 w-12 rounded-full ' src={c?.userInfo?.picture} alt="" />
                <div className='flex flex-col gap-2 text-xs'>
                  <p>{c?.userInfo?.name}</p>
                  <p>{c?.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
