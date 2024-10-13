import React, { useState, useRef, useEffect } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { SiProcessingfoundation } from "react-icons/si";
import { IoSend } from "react-icons/io5";
import { FaUserPen } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import UniversitySelector from "./UniversitySelector";
import MajorSelector from "./MajorSelector";

const Chatbot = () => {
  const msgEnd = useRef(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hello, I am Navi-Gree Bot. How can I help you with today?",
      isBot: true,
    },
  ]);
  const [university, setUniversity] = useState('');
  const [major, setMajor] = useState('');

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages]);

  useEffect(() => {
    console.log('Selected University:', university);
  }, [university]);

  useEffect(() => {
    console.log('Selected Major:', major);
  }, [major]);

  const handleUniversitySelect = (uni) => {
    setUniversity(uni);
  }

  const handleMajorSelect = (maj) => {
    setMajor(maj);
  }
  const handleSend = async () => {
    // const text = input;
    // setInput('');
    // setMessages([
    //  ...messages,
    //  {text, isBot: false}])
    // const res = await sendMsgToOpenAI(text);
    // setMessages([...messages,
    //    {text, isBot: false},
    //  {text: res, isBot: true}]);

    console.log("handlesend clicked");
  };

  const handleEnter = async (e) => {
    if (e.key == "Enter") {
      await handleSend();
    }
  };
  return (
    <div id="chat" className="w-screen bg-slate-200 pt-6 z-20 relative">
      <h1 className="text-center text-black text-4xl underline hover:underline-offset-4 cursor-default">
        Get Started with Navi-gree bot!
      </h1>
      <div className="pl-24 border border-slate-900 mx-24 mt-5">
        <h1 className="font-bold text-xl">Instructions:</h1>
        <ol className="list-decimal list-inside space-y-2">
          <li>Choose your University</li>
          <li>Choose your major</li>
          <li>Click Submit</li>
          <li>
            Once Navi-gree bot greets you, please give it any questions
            regarding course work
          </li>
        </ol>
        
      </div>
      
      <div>
        <div className="chatbot flex flex-row mt-4 border-t border-slate-700 bg-black min-h-screen max-h-[160vh] w-full overflow-visible">
          <div className="sidebar border-box flex-3 border-r border-slate-700 ">
            <div className="upperSide h-4/6 border-b border-slate-700">
              <div className="upperSideTop flex flex-row items-center p-2 border-t border-slate-700">
                <img
                  src={require("../images/NaviGreeLogo.png")}
                  alt=""
                  className="logo h- w-16"
                />
                <span className="brand text-white text-4xl">Navi-Gree</span>
              </div>
              <div className="flex justify-center items-center border-b border-slate-700">
                <button className="midBtn text-black bg-purple-600 hover:bg-purple-800 rounded-lg p-4 mb-8">
                  <img src="" alt="" className="addBtn" />+ New Chat
                </button>
              </div>
              <div className="upperSideBottom flex flex-col gap-4 mx-5 mt-3 ">
                <button className="query text-white bg-black hover:bg-slate-600 rounded-lg p-4 border border-slate-600 flex items-center">
                  <FaRegMessage className="h-6 w-6 sm:h-4 sm:w-4 mr-3" />
                  <p>What is programming?</p>
                </button>
                <button className="query text-white bg-black hover:bg-slate-600 rounded-lg p-4 border border-slate-600 overflow-hidden flex items-center whitespace-nowrap">
                  <FaRegMessage className="h-6 w-6 sm:h-4 sm:w-4 mr-3" />
                  <p className="truncate">Name few programming languages</p>
                </button>
              </div>
            </div>
            <div className="lowerSide h-2/6 flex flex-col gap-2 mx-5 mt-3 pt- 2">
              <div className="listItems text-white bg-black hover:bg-slate-600 rounded-lg p-4 border border-slate-600 flex items-center">
                <FaHome className="h-6 w-6 sm:h-4 sm:w-4 mr-3" />
                <p className="truncate">Home</p>
              </div>
              <div className="listItems text-white bg-black hover:bg-slate-600 rounded-lg p-4 border border-slate-600 flex items-center">
                <FaSave className="h-6 w-6 sm:h-4 sm:w-4 mr-3" />
                Saved
              </div>
              <div className="listItems text-white bg-black hover:bg-slate-600 rounded-lg p-4 border border-slate-600 flex items-center">
                <SiProcessingfoundation className="h-6 w-6 sm:h-4 sm:w-4 mr-3" />
                Upgrade to Pro
              </div>
            </div>
          </div>
          <div className="main flex-9 grow flex flex-col items-center px-10 py-6">
            <div className="chats overflow-hidden overflow-y-scroll w-full max-w-[120rem] h-[calc(100vh-7rem)]">
              {/* <div className="chat text-white m-1 px-2 py-3 text-md flex place-items-start justify-start">
                <FaUserPen className="text-white h-16 w-16 object-cover rounded-md" />{" "}
                <p className="txt">Lorem Ipsum</p>
              </div>
              <div className="chat bot bg-gradient-to-r from-gray-800 to-transparent w-full text-white m-1 px-2 py-3 text-md flex place-items-start justify-start">
                <FaRegUserCircle className="text-white h-16 w-16 object-cover rounded-md" />{" "}
                <p className="txt">
                  It is Latin words for writing sample text. What about it?
                </p>
              </div> */}
              <div className="flex flex-row pt-3">
              <UniversitySelector onUniversitySelect={handleUniversitySelect}/>
              <MajorSelector onMajorSelect={handleMajorSelect}/>
              </div>
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={
                    message.isBot
                      ? "chat bot bg-gradient-to-r from-gray-800 to-transparent w-full text-white m-1 px-2 py-3 text-md flex place-items-start justify-start"
                      : "chat text-white m-1 px-2 py-3 text-md flex place-items-start justify-start"
                  }
                >
                  <FaRegUserCircle className="text-white h-16 w-16 object-cover rounded-md" />{" "}
                  <p className="txt">{message.text}</p>
                </div>
              ))}
              <div ref={msgEnd} />
            </div>
            <div className="chatFooter flex items-center mt-auto justify-center w-full whitespace-nowrap relative">
              <input
                type="text"
                placeholder="Ask a question..."
                className="flex-1 w-full h-auto p-2 pl-10 pr-12 border border-slate-600 outline-none bg-black text-white flex items-center rounded-md"
                value={input}
                onKeyDown={handleEnter}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                aria-label="Send"
                onClick={handleSend}
              >
                <IoSend className="text-white h-7 w-7 p-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
