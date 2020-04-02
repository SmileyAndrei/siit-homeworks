import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    async function getMovieById(id) {
        const res = await axios('https://ancient-caverns-16784.herokuapp.com/movies/' + id);
        setMovie(res.data);
    }
    
    useEffect(() => { 
        getMovieById(movieId); 
    }, [movieId]);

    if(movie) {
        console.log(movie );
        return (
            <>
            <div className="container" >
                <div className="d-flex p-2 text-light bg-dark m-3 justify-content-between">
                    <Link className="w-3 p-2" >
                    <h3>
                        <svg  width="2em" height="3em" viewBox="0 0 16 16" fill="currentColor" >
                        <path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" clip-rule="evenodd"/>
                        </svg>
                    </h3>
                    </Link>
                    <div >
                        <div > 
                            <h1>{ movie.Title } ({ movie.Year })</h1>
                        </div>
                        <p >{movie.Runtime} | { movie.Genre } | {movie.Released } | ({movie.Country}) 
                        </p>
                    </div>                    
                    <div className="d-flex flex-row bd-highlight mb-3" >
                        <svg  width="2.5em" height="3em" viewBox="0 0 16 16" fill="#ffbb33" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <div>
                            <span>
                                {movie.imdbRating}  <span>/10</span>                                
                            </span>
                            <div>
                                 {movie.imdbVotes}                                
                            </div>                            
                        </div>
                        <h2>
                            |
                        </h2>
                        <div className="d-flex p-2 ">
        
                            <svg class="bi bi-star" width="3em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 00-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L1.71 6.745l4.052-.576a.525.525 0 00.393-.288l1.847-3.658 1.846 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z" clip-rule="evenodd"/>
                            </svg>
                            Rate this
                        </div>
                        
                    </div>
                    

            </div>
                <div className="text-light bg-dark m-3">
                    <img  src = {movie.Poster}></img>
                </div>
                <div>    
                    <div className=" m-3"> {movie.Plot} </div>
                    <div className=" m-3"> <span class="font-weight-bold"> Director : </span> {movie.Director}</div>
                    <div className=" m-3"> <span class="font-weight-bold"> Writer : </span>{movie.Writer}</div>
                    <div className=" m-3"> <span class="font-weight-bold"> Stars : </span> {movie.Actors}</div>
                </div>
            </div>
        
            </>
        );
    } else {
        return <h1>Loading ...</h1>;
    }
}

export default MovieDetails;