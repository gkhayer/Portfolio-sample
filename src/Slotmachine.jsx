import React from "react";

const SlotM = (props) => {
//   let x = "😄";
//   let y = "😄";
//   let z = "😈";

//   let x = props.x;
//   let y = props.y;
//   let z = props.z;



//array deconstruction

//const dontUseWrongExamples = ['js', 'java', 'c#', 'c++', 'Sql']

// var top1 = dontUseWrongExamples[0];
// var top2 = dontUseWrongExamples[1]
// var top3 = dontUseWrongExamples[2]


//In es6 deconstruction will look like:

////let [top1, top2, top3, top4, top5] = dontUseWrongExamples

//console.log(top1, top2, top3, top4, top5)

// get first and last element of an array


//const getfirstandlast = ['js', 'java', 'c#', 'c++', 'Sql']

//console.log(getfirstandlast.length)
//let [first,,,,last ] = getfirstandlast
//console.log("top and least fav langulage is" + first, last) // old way

// new way thats is template literals and template strings

//console.log(`top and least fav langulage is ${first} ${last}`)



// object descructrucing down
let {x, y, z} = props


  if (props.x === props.y && props.y === props.z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x}
            {y}
            {z}
          </h1>
          <h1>This is Matching.</h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x}
            {y}
            {z}
          </h1>
          <h1>This is Not matching.</h1>
          <hr />
        </div>
      </>
    );
  }
};

const Slotmachine = () => {
  return (
    <>
      <h1 className="heading_style">
        🎰 Welcome to <span>Slot Machine game</span>
      </h1>
      <div className="slot_machine_div">
        <SlotM x = "😄" y ="😄" z ="😄" />
        <SlotM x = "😄" y = "😄" z = "😈"/>
        <SlotM x = "😄" y = "😄" z =  '🎅' />
      </div>
    </>
  );
};

export default Slotmachine;
