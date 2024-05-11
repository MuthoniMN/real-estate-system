import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Pagination({ total, max, current, setCurrent }){
    const pages = Array.from({ length: total / max }, (_, i) => 1 + i);

    const previous = () => {
        if(current === 0) setCurrent(total - 1);
        else setCurrent(current - 1);
    }

    const next = () => {
        if(current === total - 1) setCurrent(0);
        else setCurrent(current + 1);
    }
    return (
        <div className="flex justify-end items-center w-full divide-x-2 divide-gray-500 text-lg border-2 border-black">
            <p className="w-24 h-24" onClick={() => previous() } >
                <FontAwesomeIcon icon={faChevronLeft} />
            </p>
            {pages.map(a => 
                <p className={`w-24 h-24 ${(current + 1) && 'bg-theme-color font-bold'}`} key={a} onClick={setCurrent(a - 1)}>
                    {a}
                </p>
            )}
            <p className="w-24 h-24">
                <FontAwesomeIcon icon={faChevronRight} onClick={ () => next() } />
            </p>
        </div>
    )
}