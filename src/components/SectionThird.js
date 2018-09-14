import React from 'react';

class SectionThird extends React.Component{
    render(){
        return(
            <div className="gl-d-flex gl-align-item-center gl-flex-direction">
                <h1 className="display-3 " > Human Perception </h1>
                <div className="row" id="section-first">
                    <div className="col-9 gl-d-flex gl-flex-directon ">
                        <div id="first-half">
                            <p>
                                You can think of machine learning as programming + data. Instead of writing
                                rules to recognize images, Google Engineers write algorithms that find patterns
                                 in data. Machine Learning involves training a computer model to find patterns in
                         data.</p>
                            <h4 className="strong">Unbiased Data</h4>
                            <ul>
                                <li>High quality datasets have been the chief reason for the considerable progress
                                    in the field</li>
                                <li>Biased datasets have often been blamed for narrowing the focus of machine learning,
                                     reducing it to a single benchmark performance number</li>
                                <li>The one of the biggest problems in machine learning are the models that exhibits
                                    bias towards the training data and does not generalize to new data, and/or variance
                                    i.e. learns random things when trained on new data</li>
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
                                src="./assets/3.gif"
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

export default SectionThird;