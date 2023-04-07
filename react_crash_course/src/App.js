import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";


// 9ad34af
const API_URL = 'http://www.omdbapi.com?apikey=9ad34af'

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        // console.log(data.Search,'-<<, data')
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('spiderman');
    },[])
    return(
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input 
                    value= {searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for movies"  
                    />
                <img 
                    src= {SearchIcon}  
                    alt= "search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
           
            {
                    movies?.length > 0 
                    ? (
                        <div className="container">
                             {movies.map((movie) => (
                                <MovieCard movie={movie} />
                             ))}
                        </div>
                     ) : (
                        <div className="empty" >
                            <h1>No movies found.</h1>
                        </div>
                    )
                } 
            </div>
    )
}

export default App