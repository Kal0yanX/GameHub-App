import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './screens/HomePage/HomePage';
import { BrowserRouter, Route } from "react-router-dom"
import MyScores from './screens/MyScores/MyScores';

const App = () => (
  <BrowserRouter>
  <Header />
  <main>

    <Route path='/' component={ HomePage } />
    <Route path='/myscores' component={() => <MyScores />} />

  <HomePage /> 
  </main>
  <Footer />
  </BrowserRouter>
)

export default App;
