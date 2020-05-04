let count = 0;
export default {
  __setCount(_count) {
    count = _count;
  },
  async getNotification() {
    console.warn("Services call from Mock");
    return count;
  },
};
