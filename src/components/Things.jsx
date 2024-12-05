import React from 'react'

const Things = () => {
    const cards = [
        { imgSrc: "/img6.png", title: "Sight Seeing" },
        { imgSrc: "/img7.png", title: "Volley Ball Game" },
        { imgSrc: "/img5.png", title: "Wizkid Show" },
        { imgSrc: "/img5.png", title: "Wizkid Show" },
        { imgSrc: "/img6.png", title: "Sight Seeing" },
        { imgSrc: "/img7.png", title: "Volley Ball Game" },
        { imgSrc: "/img5.png", title: "Wizkid Show" },
        { imgSrc: "/img5.png", title: "Wizkid Show" },
      ];
  return (
    <section className='bg-[#F5FAFF] py-4'>
        <div className='container mx-auto'>
            <h3 className='text-[#26395C] text-center lg:text-left text-2xl md:text-[28px] font-bold lg:text-[32px] pt-6'>Top things to do in Lagos</h3>
            <div className='grid grid-cols-1 sm:p-0 p-5 sm:grid-cols-2 lg:grid-cols-4 mt-4 md:mt-6'>
            {
                cards.map((data,index) =>(
                <div key={index} className='flex flex-col items-center'>
                    <img className="w-[295px] h-[270px] rounded-md" src={data.imgSrc} alt="" />
                    <p className="text-[#26395C] font-semibold text-2xl mt-4 mb-4">{data.title }</p>
                </div>
                ))
            }
            </div>
        </div>
    </section>
  )
}

export default Things;