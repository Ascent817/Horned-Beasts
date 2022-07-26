import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './HornedBeast.css';

class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            votes: 0
        }
    }

    Vote = () => {
        this.setState({
            votes: this.state.votes + 1
        });
    }

    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <Image className='Image' title={this.props.title} alt={this.props.description} src={this.props.imageUrl} responsive rounded/>
                <p>{this.props.description}</p>
                <span>
                    <Button onClick={this.Vote}>Vote</Button>
                    <p>{`${this.state.votes} votes`}</p>
                </span>
            </>
        )
    }
}

export default HornedBeast;