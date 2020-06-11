import React, { Component } from 'react';
import './App.css';
import StoryCard from "./components/StoryCard";
import LoadingSpinner from "./components/LoadingSpinner";


const hNewsTopStoriesURI = 'https://hacker-news.firebaseio.com/v0/topstories.json';
const maxStories = 10;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topStories: [],
            isLoading: false,
            maxStories,
        };
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        const hNewsAPIResponse = await fetch(hNewsTopStoriesURI);
        const topStoryIDs = await hNewsAPIResponse.json();
        const totalStories = topStoryIDs.length;

        let storiesDownloaded = 0;
        const storyMetadataPromises = topStoryIDs
            .slice(0, this.state.maxStories)
            .map(async id => {
                    const storyDetailsResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                    ++storiesDownloaded;
                    this.setState({
                        loadingProgress: (storiesDownloaded/totalStories * 100).toFixed(2)
                    });
                    return storyDetailsResponse.json();
                }
            );

        let metadatazz = await Promise.all(storyMetadataPromises);

        metadatazz = metadatazz.map((metadata, index) => {
            return {...metadata, index: index+1, key: metadata.id};
        })
        this.setState({
            topStories: metadatazz,
            isLoading: false,
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
