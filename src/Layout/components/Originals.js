import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

// style
import './styles/Originals.scss';

// features
import {selectOriginals} from '../features/MovieSlice';

export default function Originals() {
    const movies = useSelector(selectOriginals);

    return <div id='originals'>
        <h4>Originals</h4>
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
