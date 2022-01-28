import "./App.css";
import Navbar from './components/Navbar'
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import Countries from './countries.json'

function App() {
  return (
<div className="App">

<Navbar/>


<Routes> 

<Route path="/" element={<CountriesList countries={countries}/>}> 
<Route path="/:alpha3code" element={ <CountryDetails countries={coutries}/>}>

</Route>

</Routes>


</div> )

}
export default App;