import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {
    var settings = {
        //dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div>
        <Slider {...settings}>
    <div className='!flex items-center bg-gray-100 px-6'>
        <div>
            <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
            <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorum similique porro at sunt impedit, rem quibusdam quia cumque? Quaerat quasi atque perspiciatis blanditiis inventore quas, necessitatibus amet autem neque?
            <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
            </div>
        </div>
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_576,c_limit/uirypqqxq83mwcjbf9ej/air-monarch-4-antrenman-ayakkabısı-VrTWXJJn.png" alt="" />
    </div>
    <div className='!flex items-center bg-gray-100 px-6'>
    <div >
            <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
            <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorum similique porro at sunt impedit, rem quibusdam quia cumque? Quaerat quasi atque perspiciatis blanditiis inventore quas, necessitatibus amet autem neque?
            <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
            </div>
        </div>
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_576,c_limit/60d2e87c-9eaa-46a0-b9aa-0f730291262b/air-force-1-07-ayakkabısı-SqKG2H.png" alt="" />
    </div>
    </Slider>
    </div>
  )
}

export default SliderComp