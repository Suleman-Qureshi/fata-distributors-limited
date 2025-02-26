import React from 'react'

function Footer() {
  return (
     <footer className="bg-[#006241] text-white py-6 max-lg:py-2">
            <div className="container mx-auto px-6 max-sm:px-2 max-lg: space-y-5">
            <div className="flex flex-col items-center lg:hidden">
              <div className='w-full flex flex-col items-center'>
                  <img 
                    src='./fata_logo.svg' 
                    alt="FATA Logo" 
                    className="h-16 mb-2"
                    />
                  <p className="text-sm">We Provide the best</p>
                    </div>
                </div>
              <div className="flex max-md:flex-col items-center max-md:gap-4">
                <div className="flex w-full justify-center items-center">
                  <div className="flex justify-center gap-4">
                  <span className="w-full">Learn more</span>
                  <div>
                    <div className="h-full w-0.5 bg-white"></div>
                  </div>
                    <div className="flex flex-col space-y-2 w-full">
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
                <div className="flex w-full justify-center items-center"> 
                  <div className="flex gap-4">
                    <span className="w-full">Address</span>
                    <div>
                      <div className="bg-white w-0.5 h-full"></div>
                    </div>
                      <div className="flex w-full flex-col">
                        <p>xyz batley, track Road</p>
                        <p>123 citry xyz</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
  )
}

export default Footer
