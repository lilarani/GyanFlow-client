import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router";
import { auth } from "../../../firebase.config.js";
import axios from "axios";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const { email: userEmail } = useParams();
  const [email, setEmail] = useState(userEmail || "");
  const [message, setMessage] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("✅ Reset link sent to your email.");
      setShowConfirm(true);
    } catch (error) {
      setMessage("❌ Failed to send email. Check again.");
      setShowConfirm(false);
    }
  };

  const handleConfirmPassword = async () => {
    if (confirmPassword.length < 6) {
      setMessage("⚠️ Password must be at least 6 characters.");
      return;
    }

    try {
      await axios.post("http://localhost:4000/gyanflow/user/forgot-pass", {
        email,
        password: confirmPassword,
      });

      Swal.fire({
        icon: "success",
        title: "Password Updated!",
        text: "Now login with your new password.",
        confirmButtonColor: "#633974",
      }).then(() => {
        navigate("/login");
      });
    } catch (error) {
      setMessage(" Update failed. Try again.");
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-[#F8F4FC] px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-lg border border-gray-200"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
      >
        <h2 className="text-2xl font-bold text-center text-[#3E2C68] mb-2">
          Forgot Password?
        </h2>
        <p className="text-sm text-center text-gray-500 mb-4">
          Enter your email to get reset link.
        </p>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="w-full p-3 mb-3 border rounded-md focus:outline-none focus:border-[#633974]"
        />

        <button
          onClick={handleForgotPassword}
          className="w-full bg-[#633974] hover:bg-[#4A255A] text-white py-2 rounded-md font-semibold"
        >
          Send Reset Link
        </button>

        <AnimatePresence>
          {showConfirm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="New password"
                className="w-full p-3 mt-5 mb-3 border rounded-md focus:outline-none focus:border-[#633974]"
              />
              <button
                onClick={handleConfirmPassword}
                className="w-full bg-[#3E2C68] hover:bg-[#2C1C4A] text-white py-2 rounded-md font-semibold"
              >
                Confirm Password
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ForgotPassword;
