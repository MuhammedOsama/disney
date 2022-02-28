import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

// style
import './styles/Details.scss';

// database
import db from '../firebase/Config';

export default function Details() {
    const {id} = useParams();
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        db.collection('movies').doc(id).get()
            .then(doc => {
                if (doc.exists) {
                    setDetailData(doc.data());
                } else {
                    console.log('No such document in firebase');
                }
            })
            .catch(error => {
                console.log('Error getting document:', error);
            });
    }, [id]);

    return <div id='details'>
        <div className="background">
            <img alt={detailData.title} src={detailData.backgroundImg}/>
        </div>
        <div className="image-title">
            <img alt={detailData.title} src={detailData.backgroundImg}/>
        </div>
        <div className="content-meta">
            <div className="controls">
                <button className='player'>
                    <img src='/images/play-icon-black.png' alt='Play Icon'/>
                    <span>Play</span>
                </button>
                <button className='trailer'>
                    <img src='/images/play-icon-white.png' alt='Play Icon'/>
                    <span>Trailer</span>
                </button>
                <div className="add-list">
                    <span></span>
                    <span></span>
                </div>
                <div className="group-watch">
                    <div>
                        <img src="/images/group-icon.png" alt="Group Watch"/>
                    </div>
                </div>
            </div>
            <div className="sub-title">{detailData.subTitle}</div>
            <div className="description">{detailData.description}</div>
        </div>
    </div>
}
