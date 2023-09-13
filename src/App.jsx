import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import Work from "./Component/Works/Work"
import Experties from "./Component/Experties/Experties";
import css from "./styles/app.module.scss";
import Portfolio from "./Component/Portfolio/Portfolio";
import People from "./Component/People/People";
import Footer from "./Component/Footer/Footer"
const App = () => {
   return <div className={`bg-primary ${css.container}`}>
     <Header/>
     <Hero />
     <Experties />
     <Work />
     <Portfolio/>
     <People/>
     <Footer />
   </div>
}

export default App;
// we have css dot conatiner because im using  module format of my S my CSS
// to use module format we have declare a parent object which is going to be css
