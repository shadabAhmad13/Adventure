import React from 'react';
import SectionFirst from './SectionFirst';
import SectionSecond from './SectionSecond';
import SectionThird from './SectionThird';

class MainContent extends React.Component{
    render(){
        return(
            <div>
                <SectionFirst />
                <SectionSecond />
                <SectionThird />
            </div>
        );
    }
}

export default MainContent ;