import Button from "./Button";
import ListOfMovies from "./ListOfMovies";
import Summary from "./Summary";
import ListOfWatchedMovies from "./ListOfWatchedMovies";
import {useState} from "react";
import Box from "./Box";

export default function Main({
                                 movies, avgImdbRating,
                                 avgRuntime, avgUserRating, watched
                             }) {
    // const [isOpen1, setIsOpen1] = useState(true);
    // const [isOpen2, setIsOpen2] = useState(true);


    return (
        <main className="main">
            <Box>
                <ListOfMovies movies={movies}/>
            </Box>
            <Box><>
                <Summary watched={watched} avgRuntime={avgRuntime} avgUserRating={avgUserRating}
                         avgImdbRating={avgImdbRating}/>
                <ListOfWatchedMovies watched={watched}/>

            </>
            </Box>

        </main>
    )
}