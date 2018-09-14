import React from 'react';
import './SectionFirst.css';

class SectionFirst extends React.Component{
    render(){
        return(
            <div className="gl-d-flex gl-align-item-center gl-flex-direction">
                <h1 className="display-3 " > What is human judgement ?</h1>
                <div className="row" id="section-first">
                    <div className="col-9 gl-d-flex gl-flex-directon ">
                        <div id="first-half">
                            <p>
                                You can think of machine learning as programming + data. Instead of writing
                                rules to recognize images, Google Engineers write algorithms that find patterns
                                 in data. Machine Learning involves training a computer model to find patterns in
                         data.</p>
                            <h4 className="strong">Human Judgment</h4>
                            <ul>
                                <li>Helps leverage unstructured data to train the model.</li>
                                <li>Provides a human element to the process (empathy, creativity)  builds relationship.</li>
                                <li>Frees the algorithm developer from edge cases(can think relationship more about the
                                average case instead of the worst case).</li>
                            </ul>
                            <p>These approaches are very “data-hungry", having a lot of data is key to coming up with
                                good training sets for these approaches. Human Judgment plays a key role in high
                                quality and unbiased datasets. The more high-quality data that you train a well-designed
                            model with, the more intelligent your solution will be.</p>
                        </div>
                    </div>
                    <div className="col-3 gl-d-flex gl-justify-content-center" >
                        <div id="second-half">
                            <img
                                src="./assets/2.gif"
                                width="400"
                                height="auto"
                                className="d-inline-block align-top"
                                alt=""
                            />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SectionFirst;