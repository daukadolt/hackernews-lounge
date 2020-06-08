import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ isLoading, percentageFinished }) => {
    return (
        <div className="LoadingSpinner" style={ { display: isLoading ? 'block' : 'none' } }>
            <div className="lds-circle">
                <div/>
                {
                    percentageFinished === 0 ? <p>Loading...</p> : (
                        <p>Finished {percentageFinished}%</p>
                    )
                }
            </div>
        </div>
    );
};

export default LoadingSpinner;
