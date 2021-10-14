import CartState from '../components/context/cart/cartstate'
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <CartState>
    <Component {...pageProps} />
    </CartState>
    
  )
}

export default MyApp
