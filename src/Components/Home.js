import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

import './Home.css'




export default function Home() {

    return (
        <>

            <div className='playlist'>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img src="https://cdn.flipshope.com/blog/wp-content/uploads/2020/06/myntra-end-of-reason-sale-2021-july-offer-women-clothes.jpg" alt="" className='w-100' style={{ height: "50vh" }} />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img src="https://www.gyftr.com/blog/wp-content/uploads/2019/04/banners21554285340.jpg" alt="" className='w-100' style={{ height: "50vh" }} />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img src="https://cdn.flipshope.com/blog/wp-content/uploads/2022/10/Myntra-Diwali-Sale.png" alt="" className='w-100' style={{ height: "50vh" }} />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img src="https://www.shopickr.com/wp-content/uploads/2019/02/myntra-accessories-sale.jpg" alt="" className='w-100' style={{ height: "50vh" }} />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='Album'>

                <div className='men'>

                    <Card style={{ width: '175px', height: '13rem' }}>
                        <Link to='/men_pants'> <Card.Img variant="top" src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?size=626&ext=jpg&uid=R129306884&ga=GA1.1.391493513.1701538622&semt=ais" alt="" className='w-80' style={{ height: "30vh" }} /></Link>
                        <Card.Body>
                            <Card.Text>Men</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='women'>
                    <Card style={{ width: '175px', height: '13rem' }}>
                        <Link to='/Contact'><Card.Img variant="top" src="https://www.shahifits.in/wp-content/uploads/2019/07/Stylish-Dresses-for-Womens-1-e1562138282307.png" alt="" className='w-80' style={{ height: "30vh" }} /></Link>
                        <Card.Body>
                            <p>Women</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className='kids'>
                <Card style={{ width: '175px', height: '13rem' }}>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/a2/56/dc/a256dc03e374ce8a30097fa41dbaa6d0.jpg" alt="" className='w-80' style={{ height: "180px" }} />
                        <Card.Body>
                            <p>Kids</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className='living'>
                    <Card style={{ width: '175px', height: '13rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf_105762-2111.jpg?w=740&t=st=1702490948~exp=1702491548~hmac=83a95aacc805e1e05bc91bdca412266e2814f46e794454f879646517742879dc" alt="" className='w-80' style={{ height: "200px" }} />
                        <Card.Body>
                            <p>Home&Living</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className='beauty'>
                    <Card style={{ width: '175px', height: '13rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/top-view-arrangement-with-beauty-products_23-2148301808.jpg?w=826&t=st=1702491488~exp=1702492088~hmac=ee2512a5d993acb271e27dcb2b4e433f0223d28a190f541ad4814d92d86f3f43" alt="" className='w-80' style={{ height: "30vh" }} />
                        <Card.Body>
                            <p>Beauty&Grooming</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className='footwear'>
                    <Card style={{ width: '175px', height: '13rem' }}>
                        <Card.Img variant="top" src="https://image-prod.iol.co.za/resize/1180x118000/Picture-Drip-Footwear?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/93d0302e-d24c-5cf5-995c-3cf4bf6647b7&operation=CROP&offset=0x0&resize=1080x1350" alt="" className='w-80' style={{ height: "30vh" }} />
                        <Card.Body>
                            <p>Footwear</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className='jewellery'>
                    <Card style={{ width: '175px', height: '13rem' }}>
                        <Card.Img variant="top" src="https://blog.southindiajewels.com/wp-content/uploads/2020/03/long-necklace-designs-9-1.jpg" alt="" className='w-80' style={{ height: "30vh" }} />
                        <Card.Body>
                            <p>Jewellery</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className='accessories'>
                    <Card style={{ width: '175px', height: '13rem' }}>

                        <Card.Img variant="top" src="https://www.colourbox.com/preview/14814891-modern-black-sound-speakers.jpg" alt="" className='w-80' style={{ height: "50vh" }} />
                        <Card.Body>
                            <p>Accessories</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className='trolleys'>
                    <Card style={{ width: '175px', height: '13rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-vector/luggage-colored-composition-with-plastic-suitcases-wheels-travel-bags-clutch-flat-illustration_1284-65501.jpg?w=900&t=st=1702486999~exp=1702487599~hmac=e784585de391d54bbdf6030d1f23630ec94f2ca7f5b223b06dc819956dbded2a" alt="" className='w-80' style={{ height: "30vh" }} />
                        <Card.Body>
                            <p>Trolleys&Luggages</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className='Watches'>
                    <Card style={{ width: '175px', height: '13rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/premium-photo/two-black-white-modern-smart-watch-with-straps-white-background-3d-rendering_476612-18619.jpg?w=740" alt="" className='w-80' style={{ height: "30vh" }} />
                        <Card.Body>
                            <p>Watches</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className='Belts'>
                    <Card style={{ width: '175px', height: '13rem' }}>
                        <Card.Img variant="top" src="https://n3.sdlcdn.com/imgs/j/d/1/Trendy-Belt-Wallet-Combo-Brown-SDL665808786-1-e2f9e.jpg" alt="" className='w-80' style={{ height: "30vh" }} />
                        <Card.Body>
                            <p>Belts&Wallets</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className='Eye-wear'>
                    <Card style={{ width: '175px', height: '13rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/glasses-with-slightly-rounded-frame_23-2150670741.jpg?w=360&t=st=1702493004~exp=1702493604~hmac=6e0284a51288251bfc468d7761c7807646c814eb640a6aa637b6b939393f662e" alt="" className='w-80' style={{ height: "30vh" }} />
                        <Card.Body>
                            <p>Eye-wear</p>
                        </Card.Body>
                    </Card>
                </div>

                <mens_items />


            </div>



            <div className='futter'>
                <div className='online'>
                    <p>Online Shopping</p>
                    <hr />
                    <h6>Men</h6>
                    <h6>women</h6>
                    <h6>Kids</h6>
                    <h6>Beauty&Grooming</h6>
                    <h6>Footwear</h6>
                    <h6>Jewellery</h6>
                    <h6>Headphones&Speakers</h6>

                </div>
                <div className='customer'>
                    <p>Customer Policies</p>
                    <hr />
                    <h6>Contact Us</h6>
                    <h6>FAQ</h6>
                    <h6>T&C</h6>
                    <h6>Privacy Policies</h6>
                    <h6>Returns</h6>
                </div>
                <div className='useful'>
                    <p>Useful Links</p>
                    <hr />
                    <h6>Blog</h6>
                    <h6>Carrers</h6>
                    <h6>Site-map</h6>
                    <h6>Coorporite information</h6>
                    <h6>Whitehat</h6>
                    <h6>Cleartrip</h6>
                </div>
                <div className="social">
                    <i class="fa-brands fa-instagram"></i> <hr />
                    <i class="fa-brands fa-facebook"></i> <hr />
                    <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
        </>
    )
}