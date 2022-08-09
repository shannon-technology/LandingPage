
export const About = (props) => {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        {" "}
                        <div></div>
                        <div></div>
                        <img src="img/about1.jpg" className="img-responsive" alt=""/>{" "}
                        <img src="img/about2.jpg" className="img-responsive" alt=""/>{" "}
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="about-text">
                            <h2>{props.data.title}</h2>
                            <p>{ props.data.paragraph}</p>
                            <h3>{props.data.question}</h3>
                            <div className="list-style">
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        {props.data.why
                                            ? props.data.why.map((d, i) => (
                                                <li key={`${d}-${i}`}>{d}</li>
                                            ))
                                            : "loading"}
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        {props.data.why2
                                            ? props.data.why2.map((d, i) => (
                                                <li key={`${d}-${i}`}> {d}</li>
                                            ))
                                            : "loading"}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
