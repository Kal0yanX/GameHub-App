import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import { useUpdateUserMutation } from '../slices/usersApiSlice';
import { useGetMutation } from '../slices/scoresApiSlice';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [scores, setScores] = useState([]);

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();
  const [getScores, { isLoadingScores }] = useGetMutation();

  useEffect(() => {
      try {
        getScores(userInfo._id).then((res) => {setScores(res.data)
        console.log(res)
        })

      } catch (error) {
        console.error('Error fetching scores:', error.message);
        console.log('userInfo:', userInfo);
        console.log('User ID:', userInfo._id);

      }
  
    // Set name and email based on userInfo
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo._id, userInfo.name, userInfo.email, getScores]);
  
  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
        try {
            const res = await updateProfile({
                _id: userInfo._id,
                name,
                email,
                password
            }).unwrap();
            dispatch(setCredentials({...res}));
            toast.success('Profile updated')
            
        } catch (err) {
            toast.error(err?.data?.message | err.error)
        }
    }
  };
  return (
    <div>
    <FormContainer>
      <h1>Update Profile</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {isLoading && <Loader />}


        <Button type='submit' variant='primary' className='mt-3'>
          Update
        </Button>

        </Form>
      </FormContainer>

      <FormContainer>
  <div className="mt-4">
    <h2>Your Scores</h2>
    {isLoadingScores ? (
      <Loader />
    ) : (
      <div>
        {Array.isArray(scores) && scores.length > 0 ? (
          scores.map((score, index) => (
            <div key={index}>
              <p>Game: {score.game}</p>
              <p>Scores: {score.scores}</p>
            </div>
          ))
        ) : (
          <p>No scores available.</p>
        )}
      </div>
    )}
  </div>
</FormContainer>

    </div>
  );
};

export default ProfileScreen;