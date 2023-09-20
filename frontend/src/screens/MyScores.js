import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import MainScreen from '../components/MainScreen';

const MyScores = () => {
  return ( <MainScreen title='Welcome back User'> 
    <Link to='games'>
    <Button style={{marginLeft:10,marginBottom:6}} size="lg">
        Play Games
    </Button>
        <Card style={{margin: 10}}>
            <Card.Header style={{display: "flex"}}>
                <span
                style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                }}>
                    Specific Game
                    </span>
                    <div>
                        <Button variant="danger" className='mx-2'>Delete Game</Button>
                    </div>
            </Card.Header>
        </Card>
  </Link>
   </MainScreen>
  )
};

export default MyScores
