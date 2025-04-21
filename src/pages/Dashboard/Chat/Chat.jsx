import React, { useEffect, useState } from "react";
import { useGetUsersQuery } from "@/redux/ApiCalling/apiClice";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import socket from "../../../socket";
import './chat.css'
import { toast } from "react-toastify";

export const Chat = () => {
    const { data, isLoading, isSuccess, isError } = useGetUsersQuery();
    const { user } = useSelector((state) => state.authUser);
    let myUser = user
    const info = data?.data || [];
    const [lastMessages, setLastMessages] = useState({});
    const [selectedUser, setSelectedUser] = useState(null);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [fetch, setFetch] = useState(false);
    const [sidebarVisible, setSidebarVisible] = useState(true); 

    useEffect(() => {
        socket.on("receiveMessage", (newMsg) => {
            setLastMessages((prev) => ({
                ...prev,
                [newMsg.senderId === user._id ? newMsg.receiverId : newMsg.senderId]: newMsg.content,
            }));

            if ((newMsg.senderId === user?._id && newMsg.receiverId === selectedUser?._id) || (newMsg.senderId === selectedUser._id && newMsg.receiverId === user?._id)) {
                setMessages((prev) => [...prev, newMsg]);
                toast('message ')
            }
        });

        return () => {
            socket.off("receiveMessage");
        };
    }, [user, selectedUser], fetch);

    const sendMessage = (messageText) => {
        if (!selectedUser || !messageText.trim()) return;

        const newMessage = {
            senderId: user._id,
            receiverId: selectedUser._id,
            text: messageText,
            timestamp: Date.now(),
        };

        socket.emit("sendMessage", newMessage);
        setFetch(!fetch)
    };

    useEffect(() => {
        socket.on("messageHistory", (messageList) => {
            setMessages(messageList);
        });

        return () => {
            socket.off("messageHistory");
        };
    }, []);

    const handleUserClick = (user) => {
        setSelectedUser(user);
        socket.emit("getMessages", {
            senderId: user._id,
            receiverId: myUser._id,
        });
        setMessages([]);
    };

    return (
        <div className="h-screen flex bg-gray-100">
            {/* Sidebar for small devices */}
            <div className={`lg:w-1/4 w-full bg-gradient-to-br from-[#010009] via-[#0f0b3e] to-[#0b0b0c] p-6  shadow-xl overflow-y-auto text-white ${sidebarVisible ? "block" : "hidden"} lg:block`}>
                <h2 className="text-2xl font-semibold sticky top-0 py-6 uppercase z-50 mb-6 hidden md:flex">Messages</h2>
                {info.map((user) => (
                    <motion.div
                        key={user._id}
                        className="flex items-center p-4 mb-4 cursor-pointer hover:bg-gray-700 transition duration-300"
                        onClick={() => handleUserClick(user)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative">
                            <img
                                src={user.picture}
                                alt={user.name}
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div className={`h-3 bottom-0.5 right-4 absolute w-3 rounded-full ${user.isOnline ? 'bg-green-500' : 'bg-gray-500'}`} />
                        </div>
                        <div className="grid grid-row ">
                            <p className="text-xl font-medium">{user.name}</p>
                            <p className={`text-xm`}>{lastMessages[user._id] ? lastMessages[user._id] : 'no message'}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <button
                className="lg:hidden absolute flex flex-row justify-between top-4 left-4 text-white z-50"
                onClick={() => setSidebarVisible(!sidebarVisible)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5h18M3 12h18M3 19h18"
                    />
                </svg>
                <h2 className="text-2xl font-semibold sticky top-0 py-6 uppercase z-50 mb-6 hidden">Messages</h2>

            </button>

            {/* Chat content area */}
            <div className="flex-1 flex flex-col bg-gradient-to-br scrollbar-hidden from-[#010009] via-[#0f0b3e] to-[#0b0b0c] p-6  shadow-xl overflow-y-auto">
                {selectedUser ? (
                    <>
                        <div className="flex items-center justify-between my-shadow p-4 text-white ">
                            <div className="flex items-center">
                                <img
                                    src={selectedUser.picture}
                                    alt={selectedUser.name}
                                    className="w-10 h-10 rounded-full mr-4"
                                />
                                <div>
                                    <h2 className="text-xl font-semibold">{selectedUser.name}</h2>
                                    {
                                        selectedUser.isOnline ? <p className="text-sm">Active Now</p> : new Date(selectedUser.lastActive).toLocaleString()
                                    }
                                </div>
                            </div>
                        </div>

                        <motion.div
                            className="flex-1 overflow-y-auto p-4 space-y-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            {messages.map((message, index) => (
                                <motion.div
                                    key={index}
                                    className={`flex ${message.senderId === user._id ? "justify-end" : "justify-start"} mb-2`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div
                                        className={`px-4 py-1 rounded-xl max-w-xs ${message.senderId === user._id
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-200"
                                            } shadow-md`}
                                    >
                                        {message.content}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="p-4 ">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type a message"
                                className="w-full p-4 rounded-full my-shadow text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && inputValue.trim()) {
                                        sendMessage(inputValue);
                                        setInputValue("");
                                    }
                                }}
                            />
                        </div>
                    </>
                ) : (
                    <motion.div
                        className="flex-1 flex flex-col items-center justify-center text-center px-4 text-gray-700 bg-gradient-to-br from-[#010009] via-[#0f0b3e] to-[#0b0b0c]"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <motion.div
                            className="relative w-32 h-32 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl mb-8"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-16 w-16 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M7 8h10M7 12h4m1 8.25C6.615 20.25 2.25 15.885 2.25 10.5S6.615.75 12 .75s9.75 4.365 9.75 9.75c0 2.25-.74 4.33-2 5.99L21 21l-4.26-2.25c-1.385.815-3 .99-4.49.99z"
                                />
                            </svg>
                        </motion.div>

                        <motion.h2
                            className="text-3xl font-bold mb-3 text-blue-600"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            Start a Conversation
                        </motion.h2>

                        <motion.p
                            className="text-lg text-gray-600 mb-6 max-w-md"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            <br />Choose a friend from the sidebar and start chatting now.
                        </motion.p>

                        <motion.button
                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg text-lg font-semibold cursor-not-allowed"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 }}
                        >
                            Start Chatting
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};
