import React, { useState } from "react";
import { motion } from "framer-motion";
import IdeaForm from "./IdeaForm";
import AiResponse from "./AiResponse";

const MainBody = () => {
  const [inputValue, setInputValue] = useState("");
  const [showResponse, setShowResponse] = useState(false);

  function handleInputChange(e) {
    setInputValue(e.target.value); // remove e.preventDefault() here
  }

  function handleSubmit(e) {
    // e.preventDefault();
    if (inputValue.trim() === "") {
      alert("Please enter an idea.");
      return;
    }
    console.log("Input value:", inputValue);
    setShowResponse(true); // Show AI response
  }

  return (
    <main className='flex flex-col w-full h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-green-500'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='w-full max-w-3xl p-8'
      >
        {!showResponse ? (
          <IdeaForm
            inputValue={inputValue}
            onInputChange={handleInputChange}
            action={handleSubmit}
          />
        ) : (
          <AiResponse inputValue={inputValue} />
        )}
      </motion.div>
    </main>
  );
};

export default MainBody;
