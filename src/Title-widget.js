import React from "react";

class Title extends React.Component {
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
        if (item.widget_type === "TITLE_ROW") {
          return (
            <div>
              <div style={{ color: "grey" }}>{item.data.text}</div>
            </div>
          );
        }
      });
    }
  }
}

export default Title;
