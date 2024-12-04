import React from 'react'
import { Autocomplete, AutocompleteItem, Button } from "@nextui-org/react";
const Hero = () => {
  return (
    <section className="bg-[url('/hero.png')] bg-cover h-[80vh] mx-auto overflow-hidden bg-no-repeat w-full">
        <div className='px-4 md:px-20 flex flex-col gap-8 md:gap-10 lg:px-24 pt-6 md:pt-14 lg:pt-20'>
             <h2 className='font-bold lg:w-[694px] text-2xl md:text-4xl text-white lg:text-6xl md:w-[600px] w-full md:px-0 px-4'>Find amazing things to do anytime, anywhere in Lagos.</h2>
        <div className="bg-[#FBFCFF] w-full h-auto lg:w-[750px] lg:h-[150px] py-10 px-10 lg:ms-10 rounded-xl">
          <div className="grid grid-col-1 lg:grid-cols-4 gap-2 ">
            <div>
              <Autocomplete
                labelPlacement="outside"
                label="Location"
                placeholder="Oshodi"
                className="w-[100%]"
              >
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Oshodi
                </AutocompleteItem>
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Hablu Programmer
                </AutocompleteItem>
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Stack Learner
                </AutocompleteItem>
              </Autocomplete>
            </div>
            <div>
              <Autocomplete
                labelPlacement="outside"
                label="Date"
                placeholder="Date"
                className="w-[100%]"
              >
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Date
                </AutocompleteItem>
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Hablu Programmer
                </AutocompleteItem>
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Stack Learner
                </AutocompleteItem>
              </Autocomplete>
            </div>
            <div>
              <Autocomplete
                labelPlacement="outside"
                label="Activities"
                placeholder="Night Clubs"
                className="w-[100%]"
              >
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Oshodi
                </AutocompleteItem>
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Hablu Programmer
                </AutocompleteItem>
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Stack Learner
                </AutocompleteItem>
              </Autocomplete>
            </div>
            <div>
                <Button color="primary" className="w-full p-8 mt-2">Search</Button>
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Hero