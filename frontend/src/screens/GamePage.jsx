import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const GamePage = () => {
  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>Our Games</h1>
          <p className='text-center mb-4'>
          Pick and choose whichever game you like to play!
          </p>
          <div className='d-flex'>
            <LinkContainer to='/games/gamblingGame'>
              <Button variant='success' href='/gamblingGame' className='me-3'>Card Game</Button>
            </LinkContainer>
            <LinkContainer to='/games/ponggame'>
              <Button variant='success' href='/ponggame' className='me-3'>Pong Game</Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default GamePage;