import './App.css'
import Hero from './components/Hero'
import Rating from './components/Rating'
import Review from './components/Review'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <main className="main-content">
        <Hero />
        <Rating />
        <Review />
      </main>
      <Footer />
    </>
  )
}

export default App
