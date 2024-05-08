import { faMagnifyingGlass, faMapPin } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getSearchResults from "../lib/getSearchResults";

export default function LocationSearch({ setPos, property, setProperty }) {
    const [results, setResults] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await getSearchResults(property.location);
        setResults(res);
        console.log(res);
    }
    return (
        <section>
            <form className="flex justify-between items-center w-[100%]" onSubmit={(e) => handleSubmit(e)} >
                <input type="text" placeholder="Search for location" value={property.location} onChange={(e) => setProperty({ ...property, location: e.target.value })} className="border-2 border-yellow-300 basis-3/4 py-2 px-4 mx-auto" />
                <Button type={"submit"}><FontAwesomeIcon icon={faMagnifyingGlass} className="text-3xl" /></Button>
            </form>
            <div>
                <ul className="flex flex-col divide-y-2 divide-amber-400">
                    {
                        results.map(res => (
                            <li className="px-4 py-2 w-[100%] flex justify-between items-center cursor-pointer" onClick={() => {setPos([res.lat, res.lon]); setProperty({...property, location: res.display_name})}} key={res.osm_id}>
                                <FontAwesomeIcon icon={faMapPin} style={{color: "#E8AE00"}} />{res.display_name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}