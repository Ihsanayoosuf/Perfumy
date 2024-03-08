import Navbar from "./components/navbar"
import Searchbar from "./components/search"
import Product from "./components/product"
import Aboutus from "./components/aboutus"
import Footer from "./components/footer"

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Searchbar></Searchbar>
            <Product></Product>
            <Aboutus></Aboutus>
            <Footer></Footer>
        </div>
    )
}

export default App