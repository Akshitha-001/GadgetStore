import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomeCarousel = () => {
  return (
    <>
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img className="h-[50vh]  object-cover" src="https://img.freepik.com/free-psd/geometric-sales-discount-facebook-template_23-2149929918.jpg"/>
          </div>
          </Carousel>
   
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img className="h-[50vh] object-cover" src="https://d30wkz0ptv5pwh.cloudfront.net/media/magefan_blog/mobile_phone.jpg" />
          {/* <p className="legend">Mobiles</p> */}
          <div className="absolute left-2 bottom-2 flex flex-col bg-white rounded-md">
            <div className="px-6 py-0 sm:p-3 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                    Mobiles
                  </h2>
                </div>
                <div className="mt-6">
                  <p>
                    <span className="text-5xl font-semibold tracking-tight text-pink-600">
                      40%
                    </span>
                    <span className="text-base font-medium text-gray-500"> offer </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="h-[50vh] object-cover" src="https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India.jpg" />
          {/* <p className="legend">Laptops</p> */}
          <div className="absolute left-2 bottom-2 flex flex-col bg-white rounded-md">
            <div className="px-6 py-8 sm:p-3 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                    Laptops
                  </h2>
                </div>
                <div className="mt-6">
                  <p>
                    <span className="text-5xl font-semibold tracking-tight text-pink-600">
                      30%
                    </span>
                    <span className="text-base font-medium text-gray-500"> offer </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
          
        <div>
          <img className="h-[50vh] object-cover" src="https://www.jagranimages.com/images/newimg/14022024/14_02_2024-best_samsung_smart_watch_price_23653211.jpg" />
          {/* <p className="legend">TV</p> */}
          <div className="absolute left-2 bottom-2 flex flex-col bg-white rounded-md">
            <div className="px-6 py-8 sm:p-3 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                    Smart Watches
                  </h2>
                </div>
                <div className="mt-6">
                  <p>
                    <span className="text-5xl font-semibold tracking-tight text-pink-600">
                      50%
                    </span>
                    <span className="text-base font-medium text-gray-500"> offer </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      

    </>
  )
}

export default HomeCarousel