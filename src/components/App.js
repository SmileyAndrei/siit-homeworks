import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './header/Header';
import MovieList from './movies/MovieList';
import MovieDetails from './movies/MovieDetails';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter>
            <Header user="Alexandru" />
            <Route exact path="/">
                <MovieList />
            </Route>
            <Route path="/movies/:movieId">
                <MovieDetails />
            </Route>
        </BrowserRouter>
    );
}

//default export
export default App;

// const settings = 'my settings';

// //named export
// export { 
//     App,
//     settings
// }
