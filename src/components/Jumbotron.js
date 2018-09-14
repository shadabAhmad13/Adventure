import React , { Component } from 'react';
import Navbar from './Navbar';
import '../components/Jumbotron.css';

class Jumbotron extends Component{
    render(){
        
        return(
            <div className="jumbotron jumbotron-fluid" style={{backgroundImage: `url(${this.props.bgImage})`}}>
                <Navbar {...this.props}/>
                <div className="container gl-d-flex gl-align-middle gl-align-items-start gl-flex-direction">
                    <h1 className="display-1 gl-banner-title-text gl-banner-title-margin-top"> {this.props.title}</h1>
                    <p className="gl-banner-subtitle-text"> {this.props.subtitle}</p>
                </div>
            </div>
         
        );
    }
}

export default Jumbotron;