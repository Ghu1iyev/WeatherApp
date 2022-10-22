import { useState } from 'react';
import Loading from './components/Loading';
import Search from './components/Search';
import axios from 'axios'
import Result from './components/Result';

function App() {

const [city, setCity] = useState("")                // inputdan gələn dəyəri burda saxlayacayıq
const [result, setResult] = useState([])           // api dən gələn dəyərləri burda saxlayacayıq
const [loading, setLoading] = useState(false)     // api dən məlumat gələnə qədər Loading... göstərəy

const handleOnSubmit = (e) => {
  e.preventDefault();
  const apiKey = '3f15770948204086cc1a4861097119f5'
  if(city.trim() === "") return alert("Please enter a city name ")

  setLoading(true);
  axios.get(`http://api.openweathermap.org/data/2.5/find?q=${city}&lang=tr&units=metric&&cnt=5&appid=${apiKey}`)
  .then((res) => {
    let returnValue = res.data.list;
    setLoading(false)
    setResult(returnValue)
  })
  .catch((err) => {
    setLoading(false)
    console.log(err)
  })
  
}
  return (
    
    <div className="App">

      <div className="container">

       {/** Search component ine metodumuzu ve state lerimizi gönderiyoruz.  */}
        <Search
          handleOnSubmit={handleOnSubmit}
          city={city}
          setCity={setCity}
        />

        {/** Loading true ise sonuc gelmemiştir, Loading componentini gösterelim.
         * Sonuc varsa ve sonuc dizisinde eleman varsa Sonuc componentine gidiyoruz. */}

        { loading ? <Loading /> : result.length > 0 && <Result result={result} />}

      </div>
    </div>
  );
}

export default App;
