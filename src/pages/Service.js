import React  from 'react';
import Jumbotron from '../components/Jumbotron';
// import {backgroundImage} from '';


class Service extends React.Component{
    render(){
        return(
            <div>
                <Jumbotron bgImage = "./assets/opbanner.png" title = "Services" subtitle= "Audio Labelling , Video Labellint and many more other services."/>
                <h1 className="display-3">Service</h1>
            </div>
        );
    }
}

export default Service;