import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './screens/HomePage/HomePage';
import { BrowserRouter, Route } from "react-router-dom"
import MyScores from './screens/MyScores/MyScores';
import SignUpForm from './users/SignUpForm';
import LoginForm from './users/LoginForm';

const App = () => (
  <BrowserRouter>
  <Header />
  <main>

    <Route exact path='/' component={() => <HomePage />} />
    <Route exact path='/myscores' component={() => <MyScores />} />
    <Route exact path="/signup" component={SignUpForm} />
    <Route exact path="/login" component={LoginForm} />

  </main>
  <Footer />
  </BrowserRouter>
)

export default App;
