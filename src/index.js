import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDcQgHrKXCfU_Lnw4QNti5iwkKivHYVudI';



// Create a new component. This component should produce some HTML

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'league of legends' }, (videos) => {
            this.setState({ videos });
        });
    }
    
    render() {
        return (
        <div>
            <SearchBar />
            <VideoList videos={this.state.videos} />
        </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
// App is just a component class. <App /> is a component Instance 
ReactDOM.render(<App />, document.querySelector('.container'));
