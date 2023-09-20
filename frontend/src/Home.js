import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'

const HomePage = () => {
  return <div className='main'>
    <Container>
        <Row>
            <div className='intro-text'>
                <h1 className='title'>Welcome to GameHub</h1>
                <p className='subtitle'>One stop to a new style of games</p>
            </div>
            <div className='buttonContainer'>
                <a href='/login'>
                    <Button size='lg' className='homebutton'>Login</Button>
                </a>
                <a href='/sign-up'>
                    <Button size='lg' className='homebutton' variant='light'>Signup</Button>
                </a>
            </div>

        </Row>

    </Container>
  </div>
}

export default HomePage
