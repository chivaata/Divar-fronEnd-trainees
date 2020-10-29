import React from "react";

class SubWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/widgets/actions")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          isLoaded: true,
        });
      });
  }

  render() {
    if (!this.props.show) {
      return null;
    } else {
      return (
        <div className="option">
          {this.state.items.map((item) => {
            if (this.props.body === true) {
              if (item.widget_type === "SCORE_ROW") {
                item.data.action.payload.widget_list.map((list) => {
                  if (list.widget_type === "DESCRIPTION_ROW") {
                    return <div>{list.data.text}</div>;
                  }
                });
              }
            }
          })}
        </div>
      );
    }
  }
}

export default SubWidget;
