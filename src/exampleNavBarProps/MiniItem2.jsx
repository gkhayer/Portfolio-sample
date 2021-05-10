import MiniNavBar from "./MiniNavBar";
import MiniItemContent from "./MiniItemContent";

const MiniItem2 = () => {
  return (
    <>
      <MiniNavBar />
      <div className="container">
        <MiniItemContent pageInfo="Mini Item 2 yay!!!" />
      </div>
    </>
  );
};

export default MiniItem2;
