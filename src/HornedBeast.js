import React from 'react';

class HornedBeast extends React.Component {
    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <img title={this.props.title} alt={this.props.description} src={this.props.imageUrl}></img>
                <p>{this.props.description}</p>
            </>
        )
    }
}

export default HornedBeast;