import React, { useState } from 'react'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
  } from "@nextui-org/react";
  import {Input} from "@nextui-org/input";
  import {UserIcon} from "@heroicons/react/24/outline";
const MyModal = () => {
  const [isOpen,setIsOpen] = useState(false);
  const handleClose = () =>{
    setIsOpen(false);
  }
  const handleOpen = () =>{
    setIsOpen(true);
  }
  const data =[
    {
      img:"google.png",
      title:"Sign Up with Google"
    },
    {
      img:"facebook.png",
      title:"Sign Up with Facebook"
    },
    {
      img:"apple.png",
      title:"Sign Up with Apple"
    },
  ]
  return (
    <section>
      <div className='flex flex-wrap gap-3'>
        <Button variant='flat' onPress={handleOpen}>
          <UserIcon className='text-gray-500 size-4'/>
          Account
        </Button>
      </div>

      <Modal isOpen={isOpen} backdrop='blur' onClose={handleClose} size='5xl' placement='top'>
        <ModalContent>
          <ModalBody className='p-0'>
            <div className='flex flex-col md:flex-row w-full h-full md:max-h-[90vh] overflow-y-auto md:overflow-visible'>
              {/* left side */}
              <div className='bg-[url("login.png")] bg-cover bg-no-repeat bg-center flex flex-col text-white w-full md:w-[40%] '>
                <h3 className='font-semibold mb-5 pl-4 mt-10 text-3xl md:text-4xl '>Sign Up</h3>
                <p className='w-full p-4 md:w-[400px] text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus ullamcorper hendrerit quis purus pellentesque. Ac sagittis, convallis non tincidunt interdum eu nullam aliquam maecenas. Enim sed tortor morbi ut suspendisse. </p>
              </div>

              {/* right side */}
              <div className='w-full md:w-[60%] px-8 pb-36 bg-white'>
                <div>
                  <img className='w-fit mx-auto' src="logo.png" alt="" />
                  <h2 className='text-2xl font-bold text-[#26395C] mb-2'>Sign up and get exploring!</h2>
                  <p className='text-[15px] mb-4 '>Already have an account? <a href="" className='text-[#0E8BFF]'>Sign In</a></p>
                </div>

                <div className='flex flex-col gap-3 justify-center items-center'>
                  {data.map((btn,index) =>(
                    <button key={index} className='flex border rounded-md hover:bg-gray-100 w-full justify-center p-2 border-[#0E8BFF] items-center gap-2'>
                      <img src={btn.img} alt="" />
                      <p className='text-[15px] font-bold text-[#26395C]'>{btn.title}</p>
                    </button>
                  ))}
                </div>
                {/* divider */}
                <div className='flex items-center my-6 text-center'>
                  <div className='flex-grow border-t border-gray-300'></div>
                  <span className='text-[#26395C] px-3 text-[15px]'>or continue with</span>
                  <div className='flex-grow border-t border-gray-300'></div>
                </div>
                {/* manual input form */}
                <form>
                  <div className='mt-6 mb-4'>
                    <Input type='email' label="Email" placeholder='ubaid123@gamil.com' labelPlacement='outside'/>
                  </div>
                  <div className='mt-8 mb-4'>
                    <Input type='password' label="Password" placeholder='**********' labelPlacement='outside'/>
                  </div>
                  <button className='w-full py-3 bg-[#0E8BFF] text-center text-white text-[16px] font-semibold rounded-md'>Sign Up</button>
                  <p className='text-[12px] mt-1 text-center'>By creating an account, you agree to our <a className='text-[#0E8BFF]' href="">Terms & Conditions</a> and <a className='text-[#0E8BFF]' href="">Privacy Policy</a>.</p>
                </form>



              </div>

            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </section>
  )
}

export default MyModal