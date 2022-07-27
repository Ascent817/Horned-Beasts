import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import './HornedBeast.css';

class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            votes: 0,
            show: false
        }
    }

    Vote = () => {
        this.setState({
            votes: this.state.votes + 1
        });
    }

    handleClose = () => {
        this.setState({
            show: false
        });
    }

    handleShow = () => {
        this.setState({
            show: true
        });
    }

    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <Image className='Image' title={this.props.title} alt={this.props.description} src={this.props.imageUrl} responsive rounded />
                <p>{this.props.description}</p>
                <span className='flex-row'>
                    <Button onClick={this.Vote}>Vote</Button>
                    <Button onClick={this.handleShow}>Maximize</Button>
                </span>
                <p>{`${this.state.votes} votes`}</p>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Image className='Image-Modal' title={this.props.title} alt={this.props.description} src={this.props.imageUrl} responsive rounded />
                    <Modal.Body>{this.props.description}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default HornedBeast;