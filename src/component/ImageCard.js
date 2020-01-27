import React from 'react';


class ImageCard extends React.Component {
    constructor (props) {
        super (props);

        this.state = { spans: 0 };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpan = () => {
        console.log(this.imageRef.current.clientHeight);
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil( height / 10 );
        this.setState({ spans });
    }

    render() {
        const { description, urls } = this.props.image;
        const style = `span ${this.state.spans}`;
        console.log(style);

        return (
            <div style={{gridRowEnd: {style}}}>
                <img alt={description} 
                     src={urls.regular}
                     ref={this.imageRef}
                />
            </div>
        )
    }
}

export default ImageCard;