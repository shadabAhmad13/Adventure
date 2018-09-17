import React from 'react';
import Jumbotron from '../components/Jumbotron';
import ContentOprnTeam from '../components/ContentOprnTeam';


class OperationsTeam extends React.Component{
    render(){
        return(
            <div>
                <Jumbotron 
                    bgImage = "https://www.figure-eight.com/wp-content/uploads/2018/03/machine-learning-hero-background.jpg"
                    title = "Operations Team" 
                    subtitle= "Fill out the content , Go ahead"/>
                <ContentOprnTeam />
            </div>
        );
    }
}

export default OperationsTeam;