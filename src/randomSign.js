export default () => {
  const signItems = ['+', '-', '*'];
  const randomSign = Math.floor(Math.random() * signItems.length);
  return (signItems[randomSign]);
};
