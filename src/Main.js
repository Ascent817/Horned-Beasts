import React from 'react';
import HornedBeast from './HornedBeast.js';
import Header from './Header.js';
import data from './data/data.json';
import Form from 'react-bootstrap/Form';

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: 'All'
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        let selected = event.target.value;
        this.setState({
            filter: selected
        });
    }

    render() {

        let fragment = data.filter((picture) => {
            if (this.state.filter === 'All') {
                return true;
            } else if (parseInt(this.state.filter) === picture.horns) {
                return true;
            } else {
                return false;
            }
        }).map((picture) => {
            return <HornedBeast key={picture._id} title={picture.title} imageUrl={picture.image_url} description={picture.description} />
        });

        return (
            <main style={{ marginLeft: 'calc(50% - 250px)', width: '500px' }}>
                <Header />
                <h2>Filter by horns</h2>
                <Form.Select aria-label="Filter by horns" onChange={this.handleChange}>
                    <option>All</option>
                    <option value="1">1 horn</option>
                    <option value="2">2 horns</option>
                </Form.Select>
                {fragment}
            </main>
        )
    }
}

export default Main;