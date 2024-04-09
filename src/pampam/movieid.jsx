import { useEffect, useState } from "react";
import Rick from "../pampa/rick";
import { useParams } from "react-router-dom";
import axios from "axios";

const Movieid = () => {
    let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7'
    const [movieid, SetMovieid] = useState();
    const [similarid, SetSimilar] = useState();
    const [recomid, SetRecom] = useState(null);
    const [detailid, SetDetail] = useState();

    let params = useParams();

    let Popular = async () => {
        let human = await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US&api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7`
        })
        console.log('code', human);
        if (human != null) {
            if (human.status == 200) {
                SetMovieid(human.data.results)
            }
        }
    }
    let Similar = async () => {
        let pohojie = await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/${params.id}/similar?language=ru-US&api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7`
        })
        console.log('similar', pohojie);
        if (pohojie != null) {
            if (pohojie.status == 200) {
                SetSimilar(pohojie.data.results)
            }
        }
    }
    let Recom = async () => {
        let sovetuyou = await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/${params.id}/recommendations?language=ru-US&api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7`
        })
        console.log('recom', sovetuyou);
        if (sovetuyou != null) {
            if (sovetuyou.status == 200) {
                SetRecom(sovetuyou.data.results)
            }
        } else {
            SetRecom(null)
        }
    }
    let Detail = async () => {
        let detaly = await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/${params.id}?language=ru-US&api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7`
        })
        console.log('deteyl', detaly);
        if (detaly != null) {
            if (detaly.status == 200) {
                SetDetail(detaly.data)
            }
        }
    }
    useEffect(() => {
        Popular()
        Similar()
        Recom()
        Detail()
    }, [])
    return (
        <>

            <Rick />
            {movieid != null ?
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10">
                            <div className="row">
                                {detailid != null ?
                                    <>
                                        <div className="col-5 text-center">
                                            <img
                                                className="shadow rounded"
                                                src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' + detailid.backdrop_path}
                                                alt="" width={400} />
                                        </div>
                                        <div className="col-5">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h3><b>{detailid.title}</b></h3>
                                                    <p>{detailid.overview}</p>
                                                    <b>{detailid.popularity}</b>
                                                    <p><b>{detailid.release_date}</b></p>
                                                    <p><b>Жанры:</b></p>
                                                    {detailid.genres.map((i) =>
                                                        <b><p>{i.name}</p> {i.name}</b>
                                                    )
                                                    }
                                                    <b>Производственные компании:</b>
                                                    {detailid.production_companies.map((i) =>
                                                        <p><img
                                                            src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' + i.logo_path}
                                                            alt="" width={30} /> <b>{i.name}</b></p>
                                                    )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                    </>
                                }
                                <div className="col-12 text-center">
                                    <div className="bloc">
                                        <h1><b>Трейлеры по этому фильму</b></h1>
                                        {movieid != null ?
                                            <>
                                                {movieid.map((i) =>
                                                    <iframe width="928" height="543" src={'https://www.youtube.com/embed/' + i.key}
                                                        title="ГЛАВНЫЕ шахматные правила за 12 минут (без воды)" frameborder="0" className="rounded shadow border border-danger"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                )}
                                            </>
                                            :
                                            <>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="blo">
                                <h4><b>Похожие фильмы</b></h4>
                                {similarid != null ?
                                    <>
                                        {similarid.map((i) =>
                                            <>
                                                <a href={"/movieid/" + i.id}><img src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' + i.backdrop_path} width="200" /></a>
                                                <b>{i.title}</b>
                                            </>
                                        )}
                                    </>
                                    :
                                    <>
                                    </>
                                }
                            </div>
                        </div>
                        <div className="col-12">
                            <b>Рекомендации</b>
                            <div className="overflow-scroll d-flex">
                                {recomid != null ?
                                    <>
                                        {recomid.map((i) =>
                                            <>
                                                <div className="col-2 shadow rounded">
                                                    <div className="card">
                                                        <a href={"/movieid/" + i.id}><img src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' + i.backdrop_path}
                                                            className="card-img-top" /></a>
                                                        <div className="card-body text-center">
                                                            <h6 className="card-title"><b>{i.title}</b></h6>
                                                            <p className="card-text">{i.release_date}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </>
                                    :
                                    <>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div >
                :
                <>
                </>
            }
        </>
    )
}
export default Movieid;