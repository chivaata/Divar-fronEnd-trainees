import React from "react";

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
              <div>{item.data.title}</div>
            </div>
          );
        }
      });
    }
  }
}

export default Score;
