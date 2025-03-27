import "@/styles/globals.css";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";

export default function App({ Component, pageProps }) {
  return (
  <>
    <Navbar/>
  <Component {...pageProps} />;
   <Footer/>
   </>
  )
}
