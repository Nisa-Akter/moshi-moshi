import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Images from '../components/Images'
import card_1 from '../assets/image/Digital Marketing.png'
import p1 from '../assets/image/Portfolio 1.png'
import p2 from '../assets/image/Portfolio 2.png'
import p3 from '../assets/image/Portfolio 3.png'
import p4 from '../assets/image/Portfolio 4.png'
import p5 from '../assets/image/Portfolio 5.png'
import p6 from '../assets/image/Portfolio 6.png'
import p7 from '../assets/image/Portfolio 7.png'
import p8 from '../assets/image/Portfolio 8.png'

const Portfolio = () => {
  return (
    <>
            <div className="py-20 bg-lime-200">
                <Container>

                        <h1 className='text-[40px] font-medium text-lime-700 m-auto text-center font-[Inter]' >OUR WORK PORTFOLIO</h1>
                            <p className='text-[16px] font-normal text-lime-800 w-124 py-6 m-auto text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>





                    <Flex>
                        
                        <div className="">
                            <Images imgSrc={p1} imgAlt={"no"} />
                            
                         </div>
                         <div className="">
                            <Images imgSrc={p2} imgAlt={"no"} />
                            
                         </div>
                         <div className="">
                            <Images imgSrc={p3} imgAlt={"no"} />
                            
                         </div>
                         <div className="">
                            <Images imgSrc={p4} imgAlt={"no"} />
                            
                         </div>

                    </Flex>

                    <Flex className="pt-20">
                        
                        <div className="">
                            <Images imgSrc={p5} imgAlt={"no"} />
                            
                         </div>
                         <div className="">
                            <Images imgSrc={p6} imgAlt={"no"} />
                            
                         </div>
                         <div className="">
                            <Images imgSrc={p7} imgAlt={"no"} />
                            
                         </div>
                         <div className="">
                            <Images imgSrc={p8} imgAlt={"no"} />
                            
                         </div>

                    </Flex>





                </Container>







            </div>


        </>
  )
}

export default Portfolio