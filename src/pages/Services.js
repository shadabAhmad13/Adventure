import React  from 'react';
import Jumbotron from '../components/Jumbotron';
// import {backgroundImage} from '';
import ContentServices from '../components/ContentServices';



class Services extends React.Component{
    render(){
        return(
            <div>
                <Jumbotron bgImage = "./assets/opbanner.png" title = "Services" subtitle= "Audio Labelling , Video Labellint and many more other services."/>
                <ContentServices />
            </div>
        );
    }
}

export default Services;