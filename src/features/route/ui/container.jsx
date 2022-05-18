import { useSelector } from "react-redux";

export const BrowserRoute = ({ children }) => {
  const currentRoute = useSelector((state) => state.route.currentRoute);
  let currentChildren = children.filter((x) => {
    return currentRoute.includes(x.props.route);
  });
  if (currentChildren.length === 0) {
    currentChildren = children.filter((x) => {
      return x.props.route.includes("restraunts");
    });
  }

  return <div>{currentChildren}</div>;
};
