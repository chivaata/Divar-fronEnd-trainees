import React from "react";
import "./Widgets_Service.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fontawesome-library.js";

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/widgets")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          isLoaded: true,
        });
      });
  }
  render() {
    console.log(this.state);
    const { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>...Loading...</div>;
    } else {
      return items.map((item) => {
        if (item.widget_type === "SCORE_ROW") {
          return (
            <div>
              <div className="score">
                <div>
                  <img
                    className="image-logo"
                    src={item.data.image_url}
                    alt="logo"
                  />
                </div>
                <div>{item.data.title}</div>
                <div>score</div>
                <div>
                  <FontAwesomeIcon icon="angle-left" />
                </div>
              </div>
              <hr />
            </div>
          );
        }
      });
    }
  }
}

export default Score;
