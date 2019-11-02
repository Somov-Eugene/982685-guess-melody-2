export default function createNodeMock(element) {
  if (element.type === `audio`) {
    return {
      createRef() {
        return {
          current: {src: `test.wav`}
        };
      }
    };
  }

  return null;
}
