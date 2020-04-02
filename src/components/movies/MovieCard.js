import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ film }) {
    // const film = props.film;
    // const { film } = props;

    return (
        <div className="col-md-4">
            <div className="card">
                <img className="card-img-top" src={ film.Poster } alt="Movie Poster" />
                <div className="card-body">
                    <h5 className="card-title">{ film.Title }</h5>
                    <p className="card-text">
                        Nota: { film.imdbRating }
                    </p>
                    <Link to={ '/movies/' + film._id } className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;