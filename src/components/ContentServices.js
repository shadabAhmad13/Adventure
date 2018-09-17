import React from 'react';

class ContentServices extends React.Component{
    render(){
        return(
            <div className="d-flex flex-column" style={{padding: '30px 180px'}}>
                   <div>
                       <p style={{fontSize: 22}}>Human Judgment operations team carries diverse and extensive experience on tasks
                            like Image / Audio labeling and Video annotations. Team provides high-quality 
                            curated data, which in turn helps Google engineers across the globe to train 
                            various Machine Learning models.
                        </p>
                        <p style={{fontSize: 22}}>
                            The team started its operations 4 years back with a small headcount of 50 member 
                            supporting a simple Image labeling task for Google Photos. Since then, team has 
                            grown exponentially (currently - 900+) and supported multiple projects across
                            various products. The growth in the terms of headcount has also been accompanied 
                            by demographic and language diversity across the globe! The complexity of the tasks
                            has also increased significantly and from simple Image labeling, team has taken a 
                            step further and now moved to highly complex tasks like 'Emotion judgment' on Audio 
                            and Video platforms.
                        </p>
                   </div>
                   <div>
                       <h1 className="d-flex justify-content-center" style={{fontSize: 50 , marginBottom: 30 , marginTop: 10}}>Our Services</h1>
                   </div>
                 
                   <div className="d-flex justify-content-around" style={{padding: '15px 15px'}}>
                        <div className="col-lg-3 d-flex flex-column align-items-center" style={{padding: '15px 15px' ,marginRight: 35 , background: '#FFFFFF' , boxShadow: '0 2px 20px 0 rgba(0,0,0,0.1)' , borderRadius: '7px'}}>
                            <img src="https://www.figure-eight.com/wp-content/uploads/2018/03/ml-audit-icon.png" alt="" />
                            <h3 style={{marginBottom: 20 , marginTop: 10}}>Image Labeling</h3>
                            <p style={{fontSize: 18 , marginBottom: 5}}>Use categorization and </p>
                            <p style={{fontSize: 18 , marginBottom: 5}}>information extraction from text in </p>
                            <p style={{fontSize: 18 , marginBottom: 5}}> hundreds  of languages.</p> 
                            
                        </div>
                        <div className="col-lg-3 d-flex flex-column align-items-center" style={{padding: '15px 15px' ,marginRight: 35, background: '#FFFFFF' , boxShadow: '0 2px 20px 0 rgba(0,0,0,0.1)' , borderRadius: '7px'}}>
                            <img src="https://www.figure-eight.com/wp-content/uploads/2018/03/platform-consult-icon.png" alt="" />
                            <h3 style={{marginBottom: 20 , marginTop: 10}}>Video Labeling</h3>
                            <p style={{fontSize: 18 , marginBottom: 5}}>Deploy cutting-edge annotation</p>
                            <p style={{fontSize: 18 , marginBottom: 5}}>tools that combine human and</p>
                            <p style={{fontSize: 18 , marginBottom: 5}}>machine intelligence.</p>
                        </div>
                        <div className="col-lg-3 d-flex flex-column align-items-center" style={{padding: '15px 15px' ,marginRight: 35 , background: '#FFFFFF' , boxShadow: '0 2px 20px 0 rgba(0,0,0,0.1)' , borderRadius: '7px'}}>
                            <img src="https://www.figure-eight.com/wp-content/uploads/2018/03/audio-icon.png" alt="" />
                            <h3 style={{marginBottom: 20 , marginTop: 10}}>Audio Labeling</h3>
                            <p style={{fontSize: 18 , marginBottom: 5}}>Collect audio data to power your</p>
                            <p style={{fontSize: 18 , marginBottom: 5}}>chatbots and speech recognition</p>
                            <p style={{fontSize: 18 , marginBottom: 5}}>technologies.</p>
                        </div>
                        <div className="col-lg-3 d-flex flex-column align-items-center" style={{padding: '15px 15px' ,marginRight: 35 , background: '#FFFFFF' , boxShadow: '0 2px 20px 0 rgba(0,0,0,0.1)' , borderRadius: '7px'}}>
                            <img src="https://www.figure-eight.com/wp-content/uploads/2018/03/ml-audit-icon.png" alt="" />
                            <h3 style={{marginBottom: 20 , marginTop: 10}}>Image Labeling</h3>
                            <p style={{fontSize: 18 , marginBottom: 5}}>Use categorization and </p>
                            <p style={{fontSize: 18 , marginBottom: 5}}>information extraction from text in </p>
                            <p style={{fontSize: 18 , marginBottom: 5}}> hundreds  of languages.</p> 
                            
                        </div>                       
                   </div>
                   <div></div>
                   <div></div>
                   <div></div>
            </div>
        );
    }
}

export default ContentServices;