import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

const TogglePasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h2 className="">TogglePasswordInput</h2>
      <div className="flex justify-center">
        <div className="relative w-full max-w-xs">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:border-blue-400 focus:text-blue-400 focus:outline-none"
          />
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-blue-400 hover:text-blue-600"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TogglePasswordInput;
