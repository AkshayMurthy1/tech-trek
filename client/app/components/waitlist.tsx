import React from 'react'

function Waitlist() {
  return (
    <div className="bg-black flex flex-col items-center justify-center min-h-screen p-4">
  <div className="mb-12">
    <img src="/assets/tech-trek-logo.jpg" alt="Logo" className="h-16"/>
  </div>
  
  <div className="flex flex-col justify-between items-center w-full mb-12">

    
    <div className="w-full md:w-[50vw] mb-6 md:mb-20 flex flex-col items-center justify-center">

        <p className="text-2xl md:text-4xl font-bold text-white text-center">
            Get early access to 
        </p>
    
      
      <p className="  bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-2xl md:text-4xl font-extrabold text-transparent">Tech Trek Marketplace</p>
    </div>

    <div className="w-full md:w-[50vw] flex flex-col items-center justify-center px-4">
        <form className="flex flex-col items-center w-full max-w-md space-y-4">
          
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-400"
          />
          
          <button className="w-full items-center max-w-xs px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition text-lg">
            Join the Waitlist
          </button>
          
        </form>
      </div>
     
  </div>

  <div className="grid grid-cols-4 gap-1">
    <div className="bg-transparent p-0 rounded-lg"><a href="https://www.instagram.com/techtrekmarketplace/"  target='_blank'> <img src="/assets/instagram.webp" className="w-10 h-10 "/> </a></div>
    <div className="bg-transparent p-0 rounded-lg"><a href="https://www.linkedin.com/company/techtrek-marketplace/" target='_blank'> <img src="/assets/linkedin.webp" className="w-10 h-10 "/> </a></div>
    <div className="bg-transparent p-0 rounded-lg"><a href="https://www.tiktok.com/@techtrekmarketplace?_t=8oZIPtCBuId&_r=1 " target='_blank'> <img src="/assets/tiktok.webp" className="w-10 h-10 "/> </a></div>
    <div className="bg-transparent p-0 rounded-lg"><a href="youtube.com " target='_blank'> <img src="/assets/youtube.webp" className="w-10 h-10 "/> </a></div>
    
  </div>
</div>
  )
}

export default Waitlist