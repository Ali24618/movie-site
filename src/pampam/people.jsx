import axios from "axios";
import { useEffect, useState } from "react";
import Rick from "../pampa/rick";

const People = () => {
    let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7'
    const [people, SetPeople] = useState();

    let famous = async () => {
        let person = await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/trending/person/day?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=en-US`
        })
        console.log('peoples', person);
        if (person != null) {
            if (person.status == 200) {
                SetPeople(person.data.results)
            }
        }
    }
    useEffect(() => {
        famous()
    }, [])
    return (
        <>
            <Rick />
            <div className="container-fluid">
                <div className="col-12">
                    <h1><b>Popular Actors</b></h1>
                    <div className="row">
                        {people != null ?
                            <>
                                {people.map((i) =>
                                    <div className="col-2">
                                        <div className="card">
                                            <a href={'/peopleid/' + i.id}>
                                                <img src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' + i.profile_path} className="card-img-top" />
                                            </a>
                                            <div className="card-body text-center">
                                                <button type="button" class="border-0 bg-white"
                                                    data-bs-toggle="popover" data-bs-title="Popover title" 
                                                    data-bs-content="And here's some amazing content. It's very engaging. Right?">
                                                    <h6 className="card-title">{i.name}</h6>
                                                </button>
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
export default People;