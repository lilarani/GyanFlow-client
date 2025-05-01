import React, { useState } from 'react';
import NewsLetter from '../NewsLetter/NewsLetter';
import Button from '@/components/customs/Button';
import chatBotLogo from '../../../assets/images/chatbot.png';

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
      setMessage('');
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
                <span className="logoColor">A</span>bout Us
              </h3>
              <p className="text-base md:text-lg text-gray-400">
                We are a passionate team <br /> dedicated to providing the best
                <br /> services to our customers.
              </p>
            </div>
            <div className="text-start space-y-3">
              <h3 className="text-xl font-bold">
                <span className="logoColor">Q</span>uick Links
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
                <span className="logoColor">S</span>ubscribe
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
          <div className="fixed bottom-16 right-10 z-10">
            <img
              onClick={handleChatBot}
              src={chatBotLogo}
              alt=""
              className="w-24 h-24"
            />

            {/* Modal on click */}
            {openChat && (
              <div className="fixed bottom-16 my-shadow border-blue-100 border right-10 z-50 p-4 rounded-tl-3xl rounded-br-3xl flex justify-center items-center bg-gradient-to-br from-[#010009] via-[#0f0b3e] to-[#0b0b0c] animate-fade-in-down transition-transform duration-500 ease-in-out">
                <div className="rounded-2xl p-6 md:w-[28rem] shadow-2xl relative ">
                  <button
                    className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl transition-transform hover:scale-110"
                    onClick={handleChatBot}
                  >
                    <span className="text-red-500"> ✖</span>
                  </button>
                  <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-600">
                    Hi! I’m your chatbot 🤖
                  </h2>
                  <p className="text-gray-500 text-base md:text-lg mb-4">
                    How can I help you today?
                  </p>

                  <div className="w-full h-48 overflow-y-auto space-y-4 mb-4 z-50 pr-2 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100 hover:scrollbar-thumb-blue-500 transition-all duration-300">
                    {response?.map(res => (
                      <div key={res?._id} className="space-y-2">
                        <div className="flex justify-end">
                          <p className="bg-blue-100  rounded-tl-3xl rounded-br-3xl p-3 rounded-lg text-sm text-blue-900 w-fit max-w-[80%] shadow-sm">
                            {res.userPrompt}
                          </p>
                        </div>

                        {/* Gemini Response - Left */}
                        <div className="flex justify-start">
                          <p className="bg-gray-200 p-3  rounded-tl-3xl rounded-br-3xl rounded-lg text-sm text-gray-800 w-fit max-w-[80%] shadow-sm">
                            {res.geminiResponse}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input section */}
                  <div className="relative">
                    <input
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && handleMessage()}
                      type="text"
                      placeholder="Type your message..."
                      className="text-gray-300  rounded-tl-3xl rounded-br-3xl my-shadow  p-3 pr-10 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                    />
                    <LuSend
                      onClick={handleMessage}
                      className="text-blue-500 text-2xl cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2 hover:scale-125 transition-transform duration-300"
                    />
                  </div>
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
