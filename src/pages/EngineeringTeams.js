import React from 'react';
import Jumbotron from '../components/Jumbotron';
import ContentEnggTeams from '../components/ContentEnggTeams';


class EngineeringTeams extends React.Component{
    render(){
        return(
            <div>
                <Jumbotron bgImage = "./assets/2.jpg" title = "Engineers - Stakeholder" subtitle= "Fill the content , Go ahead ."/>
                <ContentEnggTeams />
            </div>
        );
    }
}

export default EngineeringTeams;