import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Images from '../components/Images'
import card_1 from '../assets/image/Digital Marketing.png'
const Service = () => {
    return (
        <>
            <div className="py-10 bg-pink-300">
                <Container>

                        <h1 className='text-[40px] font-medium text-white m-auto text-center font-[Inter]' >OUR SERVICES</h1>
                            <p className='text-[16px] font-normal text-white w-124 py-6 m-auto text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>





                    <Flex>
                        
                        <div className="">
                            <Images imgSrc={card_1} imgAlt={"no"} />
                            
                         </div>
                         <div className="">
                            <Images imgSrc={card_1} imgAlt={"no"} />
                            
                         </div>
                         <div className="">
                            <Images imgSrc={card_1} imgAlt={"no"} />
                            
                         </div>

                    </Flex>

                    <Flex className="pt-20">
                        
                        <div className="">
                            <Images imgSrc={card_1} imgAlt={"no"} />
                            
                         </div>
                         <div className="">
                            <Images imgSrc={card_1} imgAlt={"no"} />
                            
                         </div>
                         <div className="">
                            <Images imgSrc={card_1} imgAlt={"no"} />
                            
                         </div>

                    </Flex>





                </Container>







            </div>


        </>
    )
}

export default Service