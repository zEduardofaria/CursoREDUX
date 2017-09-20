import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDcQgHrKXCfU_Lnw4QNti5iwkKivHYVudI';

// Create a new component. This component should produce some HTML

const App = () => (
    <div>
        <SearchBar />
    </div>
);

// Take this component's generated HTML and put it on the page (in the DOM)
// App is just a component class. <App /> is a component Instance 
ReactDOM.render(<App />, document.querySelector('.container'));
