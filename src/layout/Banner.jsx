import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Images from '../components/Images'
import boy from '../assets/image/boy.png'
import Flex from '../components/Flex'
const Banner = () => {
    return (
        <>

            <div className="py-[80px] bg-Hbutton">
                <Container>
                    <Flex className="justify-center">
                        <div className="">
                        <h1 className='text-[65px] font-bold text-white w-140 leading-18' >We Are Digital Product Design Agency</h1>
                    <p className='text-[16px] font-normal text-white w-124 py-6 '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <Button btnText={"GET STARTED"} className={'bg-white text-black'}></Button>
                    </div>
                    <div className="pb-20">
                     <Images imgSrc={boy} imgAlt={"no"} />

                    </div>
                    </Flex>
                    
                    
                    



                </Container>







            </div>













        </>

    )
}

export default Banner