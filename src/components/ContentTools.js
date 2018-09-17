import React from 'react';

class ContentTools extends React.Component{
    render(){
        return(
            <div className="d-flex flex-column" style={{padding: '30px 180px'}}>
                <div>
                    <p style={{fontSize: 25}}> 
                    Performing thousands of judgments by hundreds of raters everyday requires robust and
                     user friendly platforms. Currently, Crowd Compute QASA extends this support to us.
                      Crowd Compute is the primary platform where raters perform their day to day tasks 
                      while QASA is the secondary platform and used for quality audits of the judgments 
                      performed by raters.
                    </p>
                </div>
                <div className="d-flex flex-row" style={{padding: '15px 0'}}>
                    <div>
                        <img src="./assets/newlogo.png" alt="" style= {{maxWidth: 80}} />
                    </div>
                    <div className="d-flex align-items-center" style={{marginLeft: 10}}>
                        <p style={{fontSize:19}}> <span className = "font-weight-bold">Crowd Compute </span>provides labelling 
                             platform with different overlaid plugins per the
                             Engineer requirements</p>
                    </div>
                </div>
                <div className="d-flex flex-row" > 
                    <div>
                        <img src="./assets/qasalogo.png" alt="" style= {{maxWidth: 80}} />
                    </div>
                    <div className="d-flex align-items-center" style={{marginLeft: 10}}>
                      <p style={{fontSize: 19}}><span className="font-weight-bold">QA System Automation </span>is a end-to-end quality management system used to input, store,
                           manage quality reviews and audits at one place.</p>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div className="col-lg-4">
                        <h1>fxdgcfhgvjbhkj</h1>
                    </div>
                    <div className="col-lg-8 ">
                        <h1>Crowd Compute</h1>
                        <ul>
                            <li>Crowd Compute provides labelling platform with different overlaid plugins per the Engineer requirements</li>
                            <li>Crowd Compute is an easy to use, general-purpose, scalable crowdsourcing system</li>
                            <li>Scalable quality-controlled micro-tasking for creating and maintaining large machine learning training data</li>
                        </ul>
                    </div>

                </div>


            </div>
            
        );
    }
}

export default ContentTools;