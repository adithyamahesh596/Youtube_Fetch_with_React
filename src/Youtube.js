import React, {Component} from 'react';

const API = 'AIzaSyCJwJl9WuhJu8jso47DXIqEx9os0WMaAqU';
const CHANNEL_ID = 'UCK8sQmJBp8GCxrOtXWBpyEA';
const RESULT = 10;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelID=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${RESULT}`;

class Youtube extends Component {

    constructor(props) {
        super(props);

        this.state = {
            result_yt: []
        };
        this.clicked = this.clicked.bind(this);
    }
        clicked = () => {
            fetch(finalURL)
                .then((response) => response.json())
                .then((responseJson) => {
                    //console.log(responseJson);
                    const result_yt = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
                    this.setState({result_yt});

                })
                .catch((error) => {
                    console.error(error);
                });
        };


    render(){
        console.log(this.state.result_yt);
        return(
            <div>
                <button onClick={this.clicked}>Get Youtube videos</button>
            <div className="youtube">
                <iframe title="Embedding youtube video" width="560" height="315" src="https://www.youtube.com/embed/15_DCzw_vHU"
                        frameBorder="0"
                        allowFullScreen></iframe>
            </div>
            </div>
        );
    }
}

export default Youtube;