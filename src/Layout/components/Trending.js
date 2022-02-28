import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

// style
import './styles/Trending.scss';

// features
import {selectTrending} from '../features/MovieSlice';

export default function Trending() {
    const movies = useSelector(selectTrending);

    return <div id='trending'>
        <h4>Trending</h4>
        <div className="content">
            {movies && movies.map((movie, key) => <div className="wrap" key={key}>
                    {movie.id}
                    <Link to={`/detail/` + movie.id}>
                        <img src={movie.cardImg} alt={movie.title}/>
                    </Link>
                </div>
            )}
        </div>
    </div>
}
