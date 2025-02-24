import React from 'react'

function Footer() {
  return (
     <footer className="bg-[#006241] text-white py-6 max-lg:py-2">
            <div className="container mx-auto px-6 max-lg: space-y-5">
            <div className="flex flex-col items-center lg:hidden">
                  <img 
                    src='./fata_logo.svg' 
                    alt="FATA Logo" 
                    className="h-16 mb-2"
                  />
                  <p className="text-sm">We Provide the best</p>
                </div>
              <div className="flex justify-between items-start max-lg:flex-col max-lg:items-center max-lg:gap-4">
                {/* Left Section */}
                <div className="flex w-full justify-center">
                  <span className="mr-4">Learn more</span>
                  <div className="flex">
                    <div className="border-l-2 border-white h-full mx-4"></div>
                    <div className="flex flex-col space-y-2">
                      <a href="#terms" className="hover:underline">Terms & Conditions</a>
                      <a href="#privacy" className="hover:underline">Privacy Policy</a>
                      <a href="#contact" className="hover:underline">Contact Us</a>
                    </div>
                  </div>
                </div>
    
                {/* Center Section - Logo */}
                <div className="flex flex-col items-center max-lg:hidden w-full">
                  <img 
                    src='./fata_logo.svg' 
                    alt="FATA Logo" 
                    className="h-16 mb-2"
                  />
                  <p className="text-sm">We Provide the best</p>
                </div>
    
                {/* Right Section - Address */}
                <div className="flex w-full justify-center">
                      <div className="border-l-2 border-white h-full ml-9 max-md:ml-[20px]"></div>
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
