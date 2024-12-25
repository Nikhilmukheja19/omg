import { assets } from "../assets/assets"

const OurPolicy = () => {
  return (
      <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
          <div>
              <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
              <p className='font-semibold'>Easy Exchange</p>
              <p className='text-gray-400'>We Offer hassle Free Exchange Policy</p>
          </div>
          <div>
              <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
              <p className='font-semibold'>7 Days Return Policy</p>
              <p className='text-gray-400'>We provide 7 Days Free Return Policy</p>
          </div>
          <div>
              <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
              <p className='font-semibold'>Best Customer Support</p>
              <p className='text-gray-400'>We Provide 24/7 Customer Support</p>
          </div>
          
    </div>
  )
}
export default OurPolicy;