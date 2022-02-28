import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

// style
import './styles/NewDisney.scss';

// features
import {selectNewDisney} from '../features/MovieSlice';

export default function NewDisney() {
    const movies = useSelector(selectNewDisney);

    return <div id='new-disney'>
        <h4>New to Disney</h4>
        <div className="content">
            {movies && movies.map((movie, key) => <div className="wrap" key={key}>
                    {movie.id}
                    <Link to={`/details/` + movie.id}>
                        <img src={movie.cardImg} alt={movie.title}/>
                    </Link>
                </div>
            )}
        </div>
    </div>
}
