import axios from "axios";
import Rick from "../pampa/rick";
import { useEffect, useState } from "react";

const Film = () => {
        let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7' 
        const [movie, setMovie] = useState(null)
        const [moviTrend, setMoviTrend] = useState()
        const [trend, setMovipopular] = useState()

        let movieF = async () => {
            let movieData = await axios({
                url: 'https://api.themoviedb.org/3/movie/popular?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-RU&page=1',
                method: "get"
            })
            if (movieData != null) {
                if (movieData.status == 200) {
                    setMovie(movieData.data.results)
                }
            }else{
                setMovie(null)
            }
            console.log('movies', movieData);
        }
        let trendF = async () => {
            let trendData = await axios({
                method: "get",
                url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`
            })
            if (trendData != null) {
                if (trendData.status == 200) {
                    setMoviTrend(trendData.data.results)
                }
            }
        }
        let popular = async () => {
            let moviepopular = await axios({
                method: "get",
                url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=1`
            })
            if (moviepopular != null) {
                if (moviepopular.status == 200) {
                    setMovipopular(moviepopular.data.results)
                }
            }
        }
        useEffect(() => {
            movieF()
            trendF()
            popular()
        }, [])
    return (
        <>
            <Rick />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 fals">
                        <div className="row">
                            <div className="col-12 mt-5">
                                <h1><p><b>Добро пожаловать.</b></p>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h1>
                            </div>
                            <div className="col-12 mt-5">
                                <div className="overflow-scroll d-flex">
                                    {movie != null ?
                                        <>
                                            {movie.map((i) =>

                                                <div className="col-3">
                                                    <div className="card">
                                                        <a href={"/movieid/"+i.id}><img src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' + i.poster_path} className="card-img-top" /></a>
                                                        <div className="card-body text-center">
                                                            <h6 className="card-title">{i.title}</h6>
                                                            <p className="card-text">{i.release_date}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                            }
                                        </>
                                        :
                                        <>
                                        </>

                                    }
                                </div>
                            </div>
                            <div className="col-12 mt-5">
                                <div className="overflow-scroll d-flex">
                                    {moviTrend != null ?
                                        <>
                                            {moviTrend.map((i) =>

                                                <div className="col-3">
                                                    <div className="card">
                                                        <a href={"/movieid/"+i.id}>
                                                        <img src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' + i.poster_path} className="card-img-top" />
                                                        <div className="card-body text-center">
                                                            <h6 className="card-title">{i.title}</h6>
                                                            <p className="card-text">{i.release_date}</p>
                                                        </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            )
                                            }
                                        </>
                                        :
                                        <>
                                        </>

                                    }
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="overflow-scroll d-flex">
                                {trend != null ?
                                        <>
                                            {trend.map((i) =>

                                                <div className="col-3">
                                                    <div className="card">
                                                        <a href={"/movieid/"}>
                                                        <img src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' + i.poster_path} className="card-img-top" />
                                                        <div className="card-body text-center">
                                                            <h6 className="card-title">{i.title}</h6>
                                                            <p className="card-text">{i.release_date}</p>
                                                        </div>пппп
                                                        </a>
                                                    </div>
                                                </div>
                                            )
                                            }
                                        </>
                                        :
                                        <>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Film;