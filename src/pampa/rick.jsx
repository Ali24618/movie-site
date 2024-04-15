import axios from "axios";
import { useState } from "react";

const Rick = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [isBlock, setIsBlock] = useState(true);

    const searchMovies = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
                params: {
                    api_key: '3cc05ada7e70628b8d1bf36e4d1f6fd7',
                    query: query
                }
            });
            console.log('data', response);
            setMovies(response.data.results);
        } catch (error) {
            console.error("Error fetching search results:", error);
            setErrorMessage('An error occurred while fetching data.');
        }
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setQuery(value);
        searchMovies();
        setIsBlock(value.trim() !== '');
    };
    return (
        <>
            <div className="contaienr-fluid">
                <div className="row">
                    <div className="col-12 bg-danger">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="col-md-12 p-1">
                                        <div className="row">
                                            <div className="col-md-1 text-center"><h6 className="mt-2"><a href="/works"><b>MBTI</b></a></h6></div>
                                            <div className="col-md-1 text-center"><h6 className="mt-2"><a href="/"><b>Главное</b></a></h6></div>
                                            <div className="col-md-2 text-center"><h6 className="mt-2"><a href="/popular"><b>Популярные</b></a></h6></div>
                                            <div className="col-md-1 text-center"><h6 className="mt-2"><a href="/serial"><b>Сериалы</b></a></h6></div>
                                            <div className="col-md-1 text-center"><h6 className="mt-2"><a href="/people"><b>Люди</b></a></h6></div>
                                            <div className="col-md-6 text-center"><input type="search" value={query} onChange={handleInputChange}
                                                className="form-control rounded-pill" placeholder="Поиск новых фильмов..." /></div>
                                        </div>
                                    </div>
                                    {isBlock && (
                                        <div className="col-12 bg-light rick">
                                            {movies.map(movie => (
                                                <a href={"/movieid/" + movie.id}><li key={movie.id}>{movie.title}</li></a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Rick;