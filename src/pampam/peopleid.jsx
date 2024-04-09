import { useEffect, useState } from "react";
import Rick from "../pampa/rick";
import axios from "axios";
import { useParams } from "react-router-dom";

const Peopleid = () => {
    let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7'
    const [peopleid, SetPeopleid] = useState();
    const [peoplecode, SetPeoplecode] = useState();
    
    let params = useParams();
    let param = useParams();
    let famous = async () => {
        let person = await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/person/${params.id}?language=ru-US&api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7`
        })
        console.log('id', person);
        if (person != null) {
            if (person.status == 200) {
                SetPeopleid(person.data)
            }
        }
    }
    let popular = async () => {
        let human = await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/person/${param.id}/movie_credits?language=ru-US&api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7`
        })
        console.log('code', human);
        if (human != null) {
            if (human.status == 200) {
                SetPeoplecode(human.data.cast)
            }
        }
    }
    useEffect(() => {
        famous()
        popular()
    }, [])
    return (
        <>
            <Rick />
            {peopleid != null ?
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <img className="shadow rounded" src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' + peopleid.profile_path}
                                        width={400} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                <h1><b>{peopleid.name}</b></h1>
                                    <p><b>Место рождения:</b> {peopleid.place_of_birth}</p>
                                    <p><b>Дата рождения:</b> {peopleid.birthday}</p>
                                    <p>{peopleid.also_known_as}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 ml-3">
                            <b>{peopleid.biography}</b>
                            <h3><b>Известность за</b></h3>
                            <div className="overflow-scroll d-flex">
                                {peoplecode != null ?
                                    <>
                                        {peoplecode.map((i) =>
                                            <div className="col-2">
                                                <div className="card shadow">
                                                    <a href={"/movieid/" + i.id}>
                                                    <img src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' + i.backdrop_path} className="card-img-top" />
                                                    </a>
                                                    <div className="card-body text-center">
                                                        <h6 className="card-title">{i.title}</h6>
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
                </div>
                :
                <></>

            }

        </>
    )
}
export default Peopleid;