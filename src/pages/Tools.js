import React from 'react';
import Jumbotron from '../components/Jumbotron';
import ContentTools from '../components/ContentTools';

class Tools extends React.Component{
    render(){
        return(
            <div>
                <Jumbotron bgImage= "./assets/toolbanner.jpg"title = "Operating Platform" subtitle = "Fill out the content , Go ahead "/>
                <ContentTools />
            </div>
        );
    }
}

export default Tools;