import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'

import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomeScreen}/>
          <Route path='/product/:id' component={ProductScreen}/>
          <Route exact path='/cart/:id?' component={CartScreen}/>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App
