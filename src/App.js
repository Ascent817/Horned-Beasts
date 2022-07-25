import './App.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';

class App extends React.Component {

    render() {
        return (
            <div className='App'>
                <Header/>
                <Main/>
                <footer>Varun Pradeep 2022</footer>
            </div>
        )
    }

}

export default App;