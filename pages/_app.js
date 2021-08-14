import Footer from '../Layouts/Footer'
import Header from '../Layouts/HomePageLayout'
// import '../Layouts/bootstrap/css/bootstrap.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
