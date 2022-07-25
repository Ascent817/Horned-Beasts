import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data/data.json';

class Main extends React.Component {
    render() {

        let fragment = data.map((picture) => {
            return <HornedBeast key={picture._id} title={picture.title} imageUrl={picture.image_url} description={picture.description}/>
        });

        return (
            <main>
                {fragment}
            </main>
        )
    }
}

export default Main;