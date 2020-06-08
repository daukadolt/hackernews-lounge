import React, { Component } from 'react';
import './App.css';
import StoryCard from "./components/StoryCard";
import LoadingSpinner from "./components/LoadingSpinner";


const hNewsTopStoriesURI = 'https://hacker-news.firebaseio.com/v0/topstories.json';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topStories: [],
            isLoading: false,
            loadingProgress: 0,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch(hNewsTopStoriesURI)
            .then(response => response.json())
            .then(storyIds => {
                const totalStories = storyIds.length;
                let storiesDownloaded = 0;
                const storyMetadataPromises = storyIds
                    .map(
                        id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                            .then(response => {
                                ++storiesDownloaded;
                                this.setState({
                                    loadingProgress: (storiesDownloaded/totalStories * 100).toFixed(2)
                                });
                                return response.json();
                            })
                    );
                Promise.all(storyMetadataPromises)
                    .then(metadatas => {
                        metadatas = metadatas.map((metadata, index) => {
                            return {...metadata, index: index+1, key: metadata.id};
                        })
                        this.setState({
                            topStories: metadatas,
                            isLoading: false,
                        });
                    });
            });
    }

    render() {
        return (
            <div className="App">
                <LoadingSpinner isLoading={this.state.isLoading} percentageFinished={this.state.loadingProgress}/>
                <div className="header"/>
                <div className="body">
                    { this.state.topStories.map(storyMetadata => <StoryCard {...storyMetadata} />) }
                </div>
                <div className="footer"/>
            </div>
        );
    }
}

export default App;
