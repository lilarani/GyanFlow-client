import React, { useState } from 'react';
import NewsLetter from '../NewsLetter/NewsLetter';
import Button from '@/components/customs/Button';
import chatBotLogo from '../../../assets/images/chatBot.png';
import { LuSend, LuSendHorizontal } from 'react-icons/lu';
import { useMessageMutation } from '@/redux/ApiCalling/apiClice';

const Footer = () => {
  const [openChat, setOpenChat] = useState(false);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState([]);
  const [sendChatMessage] = useMessageMutation();

  console.log(response);
  // open chat bot function
  const handleChatBot = () => {
    setOpenChat(!openChat);
  };

  const handleMessage = async () => {
    try {
      const res = await sendChatMessage({ prompt: message }).unwrap();
      setResponse([...response, res?.data]);
    } catch (err) {
      console.error('Chatbot error:', err);
    }
  };

  return (
    <div className="relative">
      <NewsLetter></NewsLetter>
      <div className="bg-[#06091A]">
        <footer className="footer footer-center  pt-40 w-10/12 mx-auto">
          {/* <img src={footerIcon} alt="" /> */}

          <div className="flex flex-col md:flex-row items-start md:justify-between pl-4 container mx-auto text-white space-y-5">
            <div className="text-start space-y-3">
              <h3 className="text-xl font-bold ">
                <span className="text-yellow-300">A</span>bout Us
              </h3>
              <p className="text-base md:text-lg text-gray-400">
                We are a passionate team <br /> dedicated to providing the best
                <br /> services to our customers.
              </p>
            </div>
            <div className="text-start space-y-3">
              <h3 className="text-xl font-bold">
                <span className="text-yellow-300">Q</span>uick Links
              </h3>
              <ul className="text-base md:text-lg text-gray-400 md:list-disc md:ml-6">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className=" text-start space-y-3 ">
              <h3 className="font-bold text-xl">
                <span className="text-yellow-300">S</span>ubscribe
              </h3>
              <p className="text-gray-400 text-base md:text-lg">
                Subscribe to our newsletter for the <br /> latest updates.
              </p>
              {/* <div className="flex">
                <input
                  className="p-2 rounded-l-lg text-white outline-none border-gray-500 border-[1px] border-r-0"
                  type="email"
                  placeholder="Enter your email"
                />
                <Button text={'Subscribe'}></Button>
              </div> */}
            </div>
          </div>
          {/* chatbot logo */}
          <div className="fixed bottom-16 right-10 z-50">
            <img
              onClick={handleChatBot}
              src={chatBotLogo}
              alt=""
              className="w-24 h-24"
            />

            {/* Modal on click */}
            {openChat && (
              <div className="fixed bottom-16 right-10 z-50 p-8 flex justify-center items-center">
                <div className="bg-white rounded-xl p-6 md:w-lg shadow-xl relative">
                  <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-black"
                    onClick={handleChatBot}
                  >
                    ✖
                  </button>
                  <h2 className=" text-xl md:text-2xl font-semibold mb-4 ">
                    Hi! I’m your chatbot 🤖
                  </h2>
                  <p className="text-gray-700 text-base md:text-lg">
                    How can I help you today?
                  </p>
                  <div className="w-full h-60 overflow-y-auto space-y-4 mb-4">
                    {response?.map(res => (
                      <div key={res?._id} className="space-y-2 ">
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                          {/* Gemini Response */}
                          <p className="bg-gray-200 p-3 rounded-lg text-sm text-gray-800 w-fit max-w-[80%]">
                            {res.geminiResponse}
                          </p>
                          {/* User Prompt */}
                          <p className="bg-blue-100 mt-18 p-3 rounded-lg text-sm text-blue-900 w-fit max-w-[80%]">
                            {res.userPrompt}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <input
                    onChange={e => setMessage(e.target.value)}
                    type="text"
                    className="text-base border-2 p-2 w-full relative"
                  />
                  <LuSend
                    onClick={handleMessage}
                    className="text-blue-500 text-2xl cursor-pointer absolute bottom-8 right-12"
                  />
                </div>
              </div>
            )}
          </div>

          {/* divider */}
          <div className="w-full border-t border-gray-700 my-6"></div>
          <p className="text-gray-500 pb-7 text-center p-2 text-base md:text-lg">
            @2025 GyanFlow All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
