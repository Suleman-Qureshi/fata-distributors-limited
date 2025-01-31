import React from 'react'

function Footer() {
  return (
     <footer className="bg-[#006241] text-white py-6">
            <div className="container mx-auto px-6">
              <div className="flex justify-between items-start">
                {/* Left Section */}
                <div className="flex">
                  <span className="mr-4">Learn more</span>
                  <div className="flex">
                    <div className="border-l-2 border-white h-full mx-4"></div>
                    <div className="flex flex-col space-y-2">
                      <a href="#terms" className="hover:underline">Terms & onditions</a>
                      <a href="#privacy" className="hover:underline">Privacy Policy</a>
                      <a href="#contact" className="hover:underline">Contact Us</a>
                    </div>
                  </div>
                </div>
    
                {/* Center Section - Logo */}
                <div className="flex flex-col items-center">
                  <img 
                    src='./fata_logo.svg' 
                    alt="FATA Logo" 
                    className="h-16 mb-2"
                  />
                  <p className="text-sm">We Provide the best</p>
                </div>
    
                {/* Right Section - Address */}
                <div className="flex">
                  <div className="border-l-2 border-white h-full mx-4"></div>
                  <div className="flex">
                    <span className="mr-4">Address</span>
                    <div className="flex">
                      <div className="border-l-2 border-white h-full mx-4"></div>
                      <div className="flex flex-col">
                        <p>xyz batley, track Road</p>
                        <p>123 citry xyz</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
  )
}

export default Footer
