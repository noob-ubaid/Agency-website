import React from 'react'

const Mood = () => {
  const cards = [
    { imgSrc: "/img1.png", title: "Eat & Drink" },
    { imgSrc: "/img2.png", title: "Event" },
    { imgSrc: "/img3.png", title: "Club" },
    { imgSrc: "/img4.png", title: "Things to do" },
  ];
  return (
    <section>
        <h3 className='text-[#26395C] text-center text-2xl md:text-4xl font-bold lg:text-[42px] pt-6'>What are you in the mood for?</h3>
        <div className='grid grid-cols-1 p-5 container mx-auto sm:grid-cols-2 lg:grid-cols-4 mt-4 md:mt-6'>
          {
            cards.map((data,index) =>(
              <div key={index} className='flex flex-col items-center'>
                <img className="w-full  h-[500px] lg:h-[650px]" src={data.imgSrc} alt="" />
                <p className="text-[#26395C] font-semibold text-2xl mt-4 mb-4">{data.title }</p>
              </div>
            ))
          }
        </div>
    </section>
  )
}

export default Mood