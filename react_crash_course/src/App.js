import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';

// 9ad34af
const API_URL = 'http://www.omdbapi.com?apikey=9ad34af'

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search,'-<<, data')
    }
    useEffect(() => {
        searchMovies('spiderman');
    },[])
    return(
        <div className="App">
            <h1>MovieLand</h1>

            <div className="search">
                <input placeholder="Search for movies" 
                    value= "spiderman" 
                    onClick={() => {}} 
                    />
            </div>
        </div>
    )
}

export default App