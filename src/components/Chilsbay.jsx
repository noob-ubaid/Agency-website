import React from 'react'

const Chilsbay = () => {
    const CardInfo = [
        {
          logo: "logo1.png",
          title: "Your  entire  trip in one checkout!",
          des: "Add multiple experiences to your cart and checkout on one click.",
        },
        {
          logo: "logo2.png",
          title: "Pay with Crypto on the go",
          des: "Enjoy the freedom of universal payments for a seamless marketplace experience",
        },
        {
          logo: "logo3.png",
          title: "Free Cancellation and ticket transfer",
          des: "Resell your tickets or cancel your reservations at zero cost 24 hours before.",
        },
      ];
  return (
    <section>
        <h3 className='text-[#26395C] text-center text-2xl md:text-4xl font-bold lg:text-[42px] pt-6'>Why Use Chillsbay?</h3>
        <div className="container bg-[#189EFF0F]  grid grid-cols-1 lg:grid-cols-3 mx-auto mt-10 mb-10 p-8 rounded-2xl shadow-xl">
        {CardInfo.map((info, i) => (
          <div key={i} className="mt-10">
            <img className="w-fit mx-auto" src={info.logo} alt="" />

            <div className="w-[60%] mx-auto text-center">
              <h3 className="text-3xl w-[295px] text-center font-semibold mt-2 mb-3 ">
                {info.title}
              </h3>
              <p className="text-lg text-center">{info.des}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Chilsbay

{/* <div className='bg-[#189EFF0F] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 container mx-auto'>
                {
                    CardInfo.map((data,index) =>(
                        <div key={index} className='w-[320px] py-2 flex flex-col items-center h-[334px] border border-black'>
                            <img className='size-[128px]' src={data.logo} alt="" />
                            <h4 className='font-bold pt-1 text-2xl text-center md:text-[32px]'>{data.title}</h4>
                            <p className='text-2xl text-center leading-[30px]'>{data.des}</p>
                        </div>
                    ))
                }
            </div> */}