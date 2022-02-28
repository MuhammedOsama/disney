import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

// style
import './styles/Recommends.scss';

// features
import {selectRecommends} from '../features/MovieSlice';

export default function Recommends() {
    const movies = useSelector(selectRecommends);

    return <div id='recommends'>
        <h4>Recommended for you</h4>
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
