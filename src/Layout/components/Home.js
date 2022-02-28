import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// style
import './styles/Home.scss';

// components
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';

// database
import db from '../firebase/Config';

// features
import {setMovies} from '../features/MovieSlice';
import {selectUserName} from '../features/UserSlice';

export default function Home() {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisney = [];
    let originals = [];
    let trending = [];

    useEffect(_ => {
        db.collection('movies').onSnapshot(snapshot => {
            snapshot.docs.map(doc => {
                switch (doc.data().type) {
                    case 'recommend':
                        recommends = [...recommends, {id: doc.id, ...doc.data()}];
                        break;
                    case 'new':
                        newDisney = [...newDisney, {id: doc.id, ...doc.data()}];
                        break;
                    case 'original':
                        originals = [...originals, {id: doc.id, ...doc.data()}];
                        break;
                    case 'trending':
                        trending = [...trending, {id: doc.id, ...doc.data()}];
                        break;
                }
            });
            dispatch(setMovies({
                recommends: recommends,
                newDisney: newDisney,
                originals: originals,
                trending: trending
            }));
        });
    }, [userName]);

    return <div id='home'>
        <img className='home-bg' src='./images/home-background.png' alt='Home Background'/>
        <ImageSlider/>
        <Viewers/>
        <Recommends/>
        <NewDisney/>
        <Originals/>
        <Trending/>
    </div>
}
