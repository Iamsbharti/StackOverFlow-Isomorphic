import React from "react";
import notification from "../services/NotificationService";

export default class NotificationViewer extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      count: -1,
    };
  }
  async componentDidMount() {
    const count = await notification.getNotification();
    this.setState({
      count,
    });
  }
  render() {
    return (
      <div className="mt-2 mb-3">
        <div className="notification">
          {this.state.count != -1
            ? `${this.state.count} Notifications Awaiting`
            : "Notifications Loading..."}
        </div>
      </div>
    );
  }
}
