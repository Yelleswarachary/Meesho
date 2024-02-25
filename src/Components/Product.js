import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Home() {
    return (
        <div>
            <h1 style={{ fontSize: "80px", fontWeight: "900" ,justifyContent:"50px"}}>Products</h1>

            <div style={{display:'flex',justifyContent:"space-between",}}>
                <Card style={{ width: '200px'}}>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/hand-holding-smartphone-social-media-concept_23-2150208245.jpg?w=300&t=st=1701542943~exp=1701543543~hmac=473e1e5fc4c4356f791a59db7e24a621e7c8a43792546428e2d5a15d40250663" />
                    <Card.Body>
                        <Card.Title>All Apps</Card.Title>
                        <Card.Text>
                         The Applications are in assentance to give active data in there specifications
                        </Card.Text>
                        <Button variant="primary">Enter Here</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '200px' }}>
                    <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/02/61/20/71/240_F_261207157_erD4uo8F6wzDMChkORBA69wlkYaCpZSJ.jpg" />
                    <Card.Body>
                        <Card.Title>E-MAIL</Card.Title>
                        <Card.Text>
                        messages are delivered in moments, enabling fast replies and real-time feedback from customers and colleagues alike
                        </Card.Text>
                        <Button variant="primary">Open</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '200px' }}>
                    <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/06/61/17/85/240_F_661178544_Fp7280ogGTVx7oljTlyDCLCXfvEIgaN4.jpg" />
                    <Card.Body>
                        <Card.Title>INSTAGRAM</Card.Title>
                        <Card.Text>
                        is a free photo and video sharing app available on iPhone and Android. 
                        </Card.Text>
                        <Button variant="primary">Click Here</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '200px' }}>
                    <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/02/91/52/30/240_F_291523077_V1eXwx9rotR6ooEZJ6bOPcfIhDTWWQNs.jpg" />
                    <Card.Body>
                        <Card.Title>FaceBook</Card.Title>
                        <Card.Text>
                        Facebook allows you to send messages and post status updates to keep in touch with friends and family.
                        </Card.Text>
                        <Button variant="primary">Click Here</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '200px' }}>
                    <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/06/14/18/41/240_F_614184165_xMHvcV55UUwUr8oxcVwyJ4NPalATjMfb.jpg" />
                    <Card.Body>
                        <Card.Title>Music</Card.Title>
                        <Card.Text>
                        musical works without words, that mimic the quality of a singing voice. The words of a song are called lyrics.
                        </Card.Text>
                        <Button variant="primary">Click Here</Button>
                    </Card.Body>
                </Card>



            </div>
        </div>
    )
}