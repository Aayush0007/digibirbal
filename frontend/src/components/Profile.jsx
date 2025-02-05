import React, { useState, useEffect } from "react";
import Header from "./Header"; // Ensure this path is correct
import Footer from "./Footer"; // Ensure this path is correct

const Profile = ({ userDetails, updateUserDetails, showNotification }) => {
  const [firstName, setFirstName] = useState(userDetails.firstName);
  const [lastName, setLastName] = useState(userDetails.lastName);
  const [email, setEmail] = useState(userDetails.email);
  const [phone, setPhone] = useState(userDetails.phone);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setFirstName(userDetails.firstName);
    setLastName(userDetails.lastName);
    setEmail(userDetails.email);
    setPhone(userDetails.phone);
  }, [userDetails]);

  const handleUpdate = async () => {
    if (phone.length !== 10) {
      showNotification("Phone number must be 10 digits long!", "error");
      return;
    }

    if (password !== confirmPassword) {
      showNotification("Passwords do not match!", "error");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/auth/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ firstName, lastName, email, phone, password }),
      });

      const data = await response.json();
      if (response.ok) {
        updateUserDetails({ firstName, lastName, email, phone });
        showNotification("Profile updated successfully!", "success");
      } else {
        showNotification(data.message, "error");
      }
    } catch (error) {
      showNotification("Error updating profile!", "error");
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-8 animate-fadeIn animate-slideUp">
        <h2 className="text-3xl font-bold mb-6 text-center">Profile</h2>
        <div className="space-y-6">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            disabled
            className="w-full p-4 border rounded-lg bg-gray-100 focus:outline-none transition duration-300 ease-in-out"
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          />
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500 hover:text-blue-500 transition duration-300"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          />
          <button
            onClick={handleUpdate}
            className="w-full bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 focus:outline-none transition duration-300 ease-in-out"
          >
            Update Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
