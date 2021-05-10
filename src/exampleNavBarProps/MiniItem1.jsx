import MiniNavBar from "./MiniNavBar";
import MiniItemContent from './MiniItemContent';

const MiniItem1 = (props) => {
  return (
    <>
      <MiniNavBar />
      <div className="container">
        <MiniItemContent pageInfo="Mini Item 1" />
        <h1>This is coming from the Route: {props.name}</h1>
      </div>
    </>
  );
};

export default MiniItem1;
