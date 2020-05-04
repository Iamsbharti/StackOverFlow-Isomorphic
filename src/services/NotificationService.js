import delay from "redux-saga";

export default {
  async getNotification() {
    const notification_count = 42;
    console.warn("Getting Notifications value from REAL API");
    await delay(1000);
    return notification_count;
  },
};
