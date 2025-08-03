import Navbar from "./component/Navbar"
import Gallery from "./component/Gallery"
import Footer from "./component/Footer"
import Card from "./Card"
import './style.css'
import { useState } from "react"
export default function App() {
  let [counter, setCounter] = useState(0);
  const onHandle = () => {
    setCounter(counter + 1);
  }
  return (
    <div className="cl">
      <Navbar counter={counter} />
      <Gallery />
      <Card onHandle={onHandle} />
      <Footer />
    </div>



  )
}
