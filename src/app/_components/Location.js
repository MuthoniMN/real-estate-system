"use client"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import LocationSearch from "./LocationSearch";

export default function Location({ location, setLocation }) {
    const [position, setPosition] = useState([-1.286389, 36.817223]);

    const Map = dynamic(
        () => import('./Map'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    )

    return (
        <div className="flex justify-between w-[100%] h-[60vh] items-start">
            <div className="w-[50%]">
                <LocationSearch setPos={setPosition} location={location} setLocation={setLocation} />
            </div>
            <div className="h-[100%] w-[50%]">
                <Map position={position} />
            </div>
        </div>
    )
}