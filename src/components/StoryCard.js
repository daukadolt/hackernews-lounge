import React from 'react';
import './StoryCard.css';

const discussionURI = 'https://news.ycombinator.com/item?id=';

const StoryCard = (props) => {
    return (
        <div className='StoryCard'>
            <p>
                #{props.index} Title: <a href={props.url}> {props.title}</a> Discussion: <a href={discussionURI + props.id}>link</a>
            </p>
            <p> Post score {props.score} points </p>
        </div>
    );
};

export default StoryCard;
