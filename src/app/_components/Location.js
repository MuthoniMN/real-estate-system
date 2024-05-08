"use client"
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import LocationSearch from "./LocationSearch";

export default function Location({ property, setProperty }) {
    const [position, setPosition] = useState([-1.286389, 36.817223]);

    const Map = useMemo(() => dynamic(
        () => import('./Map'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])

    return (
        <div className="flex justify-between w-[100%] h-[60vh] items-start">
            <div className="mw-[300px]">
                <LocationSearch pos={position} setPos={setPosition} property={property} setProperty={setProperty} />
            </div>
            <div className="h-[100%] w-[100%]">
                <Map position={position} />
            </div>
        </div>
    )
}