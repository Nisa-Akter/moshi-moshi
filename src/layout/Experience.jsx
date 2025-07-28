import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Images from '../components/Images'
import man from '../assets/image/Ellipse 7.png'
import stars from '../assets/image/star.png'
const Experience = () => {
    return (

        <>
            <div className="py-20  bg-blue-300">
                <Container className="">

                    <h1 className='text-[40px] font-medium text-white  font-[Inter] w-135' >We Care About Our
                        Customer Experience Too </h1>
                    <p className='text-[16px] font-normal text-white w-124 py-6  '>There are many variations
                        of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form.</p>

                    <Flex >
                        <div className=" justify-start mr-4 w-4/12 border-1 border-purple-200  rounded-lg py-8 px-8">
                            <Images imgSrc={man} imgAlt="no" />

                            <Images imgSrc={stars} imgAlt="no" />



                            <p className='text-[12px] font-light text-white  font-[Inter]'>Lorem   voluptatibus, nam quaerat accusamus laudantium dicta nostrum. Aut alias commodi, maiores totam numquam ipsa molestiae beatae quam porro assumenda
                                sequi do velit.
                                Necessitatibus saepe nostrum ea?</p>
                            <h3 className='text-[20px] font-semibold text-white  font-[Inter] '>Stefeni Ahmed</h3>
                            <h4 className='text-[12px] font-semibold text-white  font-[Inter] '>Stefeni Ahmed</h4>
                        </div>

                    


                            <div className=" justify-start w-4/12 mr-4 border-1 border-purple-200  rounded-lg py-8 px-8">
                                <Images imgSrc={man} imgAlt="no" />

                                <Images imgSrc={stars} imgAlt="no" />



                                <p className='text-[12px] font-light text-white  font-[Inter]'>Lorem   voluptatibus, nam quaerat accusamus laudantium dicta nostrum. Aut alias commodi, maiores totam numquam ipsa molestiae beatae quam porro assumenda
                                    sequi do velit.
                                    Necessitatibus saepe nostrum ea?</p>
                                <h3 className='text-[20px] font-semibold text-white  font-[Inter] '>Stefeni Ahmed</h3>
                                <h4 className='text-[12px] font-semibold text-white  font-[Inter] '>Stefeni Ahmed</h4>
                            </div>
                            <div className=" justify-start w-4/12 border-1 border-purple-200  rounded-lg py-8 px-8">
                                <Images imgSrc={man} imgAlt="no" />

                                <Images imgSrc={stars} imgAlt="no" />



                                <p className='text-[12px] font-light text-white  font-[Inter]'>Lorem   voluptatibus, nam quaerat accusamus laudantium dicta nostrum. Aut alias commodi, maiores totam numquam ipsa molestiae beatae quam porro assumenda
                                    sequi do velit.
                                    Necessitatibus saepe nostrum ea?</p>
                                <h3 className='text-[20px] font-semibold text-white  font-[Inter] '>Stefeni Ahmed</h3>
                                <h4 className='text-[12px] font-semibold text-white  font-[Inter] '>Stefeni Ahmed</h4>
                            </div>
                        

                    </Flex>

                </Container>
            </div>



        </>)
}

export default Experience