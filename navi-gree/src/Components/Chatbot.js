import React from 'react'

const Chatbot = () => {
  return (
    <div id="chat" className='w-screen bg-slate-200 pt-6'>
      <h1 className='text-center text-black text-4xl underline hover:underline-offset-4 cursor-default'>Get Started with Navi-gree bot!</h1>
      <div className='pl-24 border border-slate-900 mx-24 mt-5'>
        <h1 className='font-bold text-xl'>Instructions:</h1>
        <ol className="list-decimal list-inside space-y-2">
            <li>Choose your University</li>
            <li>Choose your major</li>
            <li>Click Submit</li>
            <li>Once Navi-gree bot greets you, please give it any questions regarding course work</li>
        </ol>
      </div>
      <div>
        <div className='sidebar '>
            <div className='upperSide'>
                <div className='upperSideTop'><img src={require("../images/NaviGreeLogo.png")} alt="" className='logo h- w-16'/><span className='brand'>Navi-Gree</span></div>
                <button className='midBtn'><img src="" alt="" className='addBtn'/>+ New Chat</button>
            </div>
            <div className='lowerSide'></div>
        </div>
      </div>
    </div>
  )
}

export default Chatbot
