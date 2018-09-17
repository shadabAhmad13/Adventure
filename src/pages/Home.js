import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
// import { backgroundImage } from '';
import ContentHome from '../components/ContentHome';


class Home extends Component {
    render(){
        
        return (
            <div>
                <Jumbotron bgImage= "./assets/eng.jpg"title = "AI in real world" subtitle = "Our Human judgement team helps machine think , behave and understood the world as we humans do"/>
                <ContentHome />
            </div>
        );
    }
}

export default Home;