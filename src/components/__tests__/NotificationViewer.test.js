import React from "react";
import delay from "redux-saga";
import renderer from "react-test-renderer";
import NotificationViewer from "../NotificationViewer";

//get mock implementation for the test
jest.mock("../../services/NotificationService");
const getNotifications = require("../../services/NotificationService").default;

describe("Notification Viewer Statefull Compoenent Tests", () => {
  beforeAll(() => {
    getNotifications.__setCount(5);
  });
  it("should render notification viewer component", async () => {
    const notificationTree = renderer.create(<NotificationViewer />);
    await delay();

    //get root of the tree
    const instance = notificationTree.root;
    const component = instance.findByProps({ className: "notification" });
    const notification_text = component.children[0];
    expect(notification_text).toEqual("5 Notifications Awaiting");
  });
});
