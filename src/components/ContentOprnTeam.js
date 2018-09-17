import React from 'react';

class ContentOprnTeam extends React.Component{
    render(){
        return(
            <div className="d-flex flex-column" style={{padding: '30px 120px'}}>
                <div style={{marginBottom:50}}>
                    <p style={{fontSize: 25}}>Human Judgment Operations team has diverse presence across Americas, EMEA and APAC.
                         Currently, operations is spread across 4 different countries supporting 10
                          international languages. Team has worked on hundreds of tasks to support multiple
                           Google products.
                    </p>
                </div>
                <div className="d-flex flex-row justify-content-around" style={{padding: '15px 15px'}}>
                    <div className="col-lg-3 d-flex flex-column align-items-center" style={{padding: '15px 15px' , background: '#FFFFFF' , boxShadow: '0 2px 20px 0 rgba(0,0,0,0.1)' , borderRadius: '7px'}}>
                        <img src="https://www.figure-eight.com/wp-content/uploads/2018/03/home-icon-1-300x300.png" alt="" />
                        <p style={{fontSize: 22 , marginBottom: 5}}>Over 500 Million Images,</p>
                        <p style={{fontSize: 22 , marginBottom: 5}}>Audio & Videos labeled</p>
                    </div>
                    <div className="col-lg-3 d-flex flex-column align-items-center" style={{padding: '15px 15px'  , background: '#FFFFFF' , boxShadow: '0 2px 20px 0 rgba(0,0,0,0.1)' , borderRadius: '7px'}}>
                        <img src="https://www.figure-eight.com/wp-content/uploads/2018/03/home-icon-2-300x300.png" alt="" />
                        <p style={{fontSize: 22 , marginBottom: 5}}>Over 2 Billion+ Human</p>
                        <p style={{fontSize: 22 , marginBottom: 5}}>Judgments</p>
                    </div>
                    <div className="col-lg-3 d-flex flex-column align-items-center" style={{padding: '15px 15px' , background: '#FFFFFF' , boxShadow: '0 2px 20px 0 rgba(0,0,0,0.1)' , borderRadius: '7px'}}>
                        <img src="https://www.figure-eight.com/wp-content/uploads/2018/03/home-icon-3-300x300.png" alt="" />
                        <p style={{fontSize: 22 , marginBottom: 5}}>Supported 10+ Google</p>
                        <p style={{fontSize: 22 , marginBottom: 5}}>Products in AI</p> 
                    </div>

                </div>
                <div>
                    <div className="d-flex justify-content-center" style={{margin: '20px 0'}}>
                        <h1 className="display-3 strong">Labeling Team across the World</h1>
                    </div>
                    <div className="d-flex justify-content-center">
                        <img src="./assets/new.png" alt=""  style={{maxWidth: 1200}}/>
                    </div>
                </div>
                <div style={{marginTop: 20}}>
                    <div className= "d-flex justify-content-center" > 
                        <img src="./assets/2ndlatest.png" alt="" style={{maxWidth: 1400}} />
                    </div>

                </div>

            </div>
        );
    }
}

export default ContentOprnTeam;