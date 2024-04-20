import Button from "./Button";
import ListOfMovies from "./ListOfMovies";
import {useState} from "react";

export default function Box({children,movies}){
    const [isOpen, setIsOpen] = useState(true);
    console.log(children)

    return (
        <div className="box">
            <Button isOpen={isOpen} onClick={setIsOpen}/>
            {isOpen && (
                children
            )}
        </div>
    )

}