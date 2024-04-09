import axios from "axios";
import { useEffect, useState } from "react";
import Rick from "../pampa/rick";

const Serial = () => {
    let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7'
    const [popular, SetPopular] = useState();
    const [megapopular, SetMegapopular] = useState();
    const [toprated, SetToprated] = useState();
    const [movie, SetMovie] = useState();
    const [page, setPage] = useState(1);

    let navigate = (p) => {
        setPage(p);
        hype();
    }
    let hype = async () => {
        let shum = await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/now_playing?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-US&page=${page}`
        })
        if (shum != null) {
            if (shum.status == 200) {
                SetPopular(shum.data.results)
            }
        }
    }

    let hyper = async () => {
        let shumiha = await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/tv/top_rated?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-US&page=1`
        })
        if (shumiha != null) {
            if (shumiha.status == 200) {
                SetMegapopular(shumiha.data.results)
            }
        }
    }
    useEffect(() => {
        hype()
        hyper()

    }, [])
    return (
        <>
        <Rick/>
            <div className="container-fluid">
            <h1><b>Популярные сериалы</b></h1>
            <div className="col-12">
                <div className="row">
                    {megapopular != null ?
                        <>
                            {megapopular.map((i) =>
                                <div className="col-2">
                                    <div className="card">
                                        <a href={"/serialid/" + i.id}><img src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' + i.poster_path} className="card-img-top" /></a>
                                        <div className="card-body text-center">
                                            <h6 className="card-title">{i.name}</h6>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                        :
                        <>
                        </>
                    }
                </div>
            </div>
            </div>
        </>
    )
}
export default Serial;