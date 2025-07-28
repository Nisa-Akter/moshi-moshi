import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Images from '../components/Images'
import logo from '../assets/image/Logo.png'
import Button from '../components/Button'

const Header = () => {
    return (
        <>
            <div className=" py-2 bg-purple-400">
                <Container >
                    <Flex>
                        <div className="">
                            <Images imgSrc={logo} imgAlt={"no"} />
                        </div>
                        <div className="">
                            <ul>
                                <Flex className="gap-5 text-white">
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Blog</li>

                                    <li>Contact</li></Flex>
                            </ul>



                        </div>
                        <div className="">
                            <Button btnText={"Contact Us"} className={'bg-Hbutton text-white'}></Button>
                        </div>
                    </Flex>

                    {/* <button>Contact</button> */}



                </Container>


            </div>




        </>
    )
}

export default Header