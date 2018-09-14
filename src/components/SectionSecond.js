import React from 'react';
import './SectionFirst.css';


class SectionSecond extends React.Component{
    render(){
        return(
            <div className="gl-d-flex gl-align-item-center gl-flex-direction">
                <h1 className="display-3 " > Labeled Data Categories</h1>

                <div className="row" id="section-second">
                    <div className="col-3 gl-d-flex gl-justify-content-center" >
                        <div id="second-half">
                            <img
                                src="./assets/1.gif"
                                width="400"
                                height="250"
                                className="d-inline-block align-top"
                                alt=""
                            />

                        </div>
                    </div>
                    <div className="col-9 gl-d-flex gl-flex-directon ">
                        <div id="first-half">
                            <p>
                                You can think of machine learning as programming + data. Instead of writing
                                rules to recognize images, Google Engineers write algorithms that find patterns
                                 in data. Machine Learning involves training a computer model to find patterns in
                         data.</p>
                            <h4 className="strong">High Quality Data</h4>
                            <ul>
                                <li>Machines are great at making smart decisions from vast datasets, whereas people are much better at making decisions with less information</li>
                                <li>For example, people are great at looking at a complex image and picking out discrete entities: “that’s a cat but you can only see its tail”</li>
                                <li>High quality dataset of these annotated images teaches machine to see those objects (i.e. machine intelligence).</li>
                                <li>With enough data and tuning, machine algorithms can identify images quickly and accurately</li>
                            </ul>
                            <p>These approaches are very “data-hungry", having a lot of data is key to coming up with
                                good training sets for these approaches. Human Judgment plays a key role in high
                                quality and unbiased datasets. The more high-quality data that you train a well-designed
                            model with, the more intelligent your solution will be.</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default SectionSecond;