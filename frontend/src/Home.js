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


        </Row>

    </Container>
  </div>
}

export default HomePage
