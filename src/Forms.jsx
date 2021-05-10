import React, { useState } from "react";

const Forms = () => {
  const [fullname, setName] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    qualification: ""
  });


  // learning spread operator
//   const testarr = ['vioks', 'test']
//   const newarr = ['male',...testarr, 'biow2', 1] 
//   // deconstruction of an array
//   const [first, ...remaining] = newarr
//   console.log(first)
//   console.log(remaining) // remaining could be any name
//   console.log(newarr.length)

// 2nd example : use it on an object
// const fullnameobj = {
//     fn: 'gagan',
//     ln: 'hayer'
// }
// const bioobj = {
//     id: 1,
//     age: 23,
//     gender: 'female',
//     ...fullnameobj
// }
// console.log(bioobj)

  const inputEvent = (e) => {
    //const name = e.target.name; apply object deconstruction like below
    //const value = e.target.value; // apply object deconstruction like below

    const { name, value } = e.target;

    setName((prevValue) => {
      console.log("previous value is ", prevValue);
      return {
          // prev value(object) match with element name and sett he value (if it matches)
            ...prevValue,
            [name]: value
      }
    //   if (name === "fname") {
    //     return {
    //       firstName: value,
    //       lastName: prevValue.lastName,
    //       email: prevValue.email,
    //       phone: prevValue.phone,
    //     };
    //   } else if (name === "lname") {
    //     return {
    //       firstName: prevValue.firstName,
    //       lastName: value,
    //       email: prevValue.email,
    //       phone: prevValue.phone,
    //     };
    //   } else if (name === "email") {
    //     return {
    //       firstName: prevValue.firstName,
    //       lastName: prevValue.lastName,
    //       email: value,
    //       phone: prevValue.phone,
    //     };
    //   } else if (name === "phone") {
    //     return {
    //       firstName: prevValue.firstName,
    //       lastName: prevValue.lastName,
    //       email: prevValue.email,
    //       phone: value,
    //     };
    //   }


    });
  };
  const updatetoNewValue = (e) => {
    e.preventDefault(); // default page refresh won't work
    console.log("form submitted");
  };

  return (
    <>
     <h1 className="heading_style">
        Submit Form Challenge
      </h1>
      <form onSubmit={updatetoNewValue}>
        <div className="hooks__div">
          <h1>
            Welcome {fullname.firstName} {fullname.lastName}
          </h1>
          <h6>{fullname.email}</h6>
          <h6>{fullname.phone}</h6>
          <h6>{fullname.qualification}</h6>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            name="email"
            onChange={inputEvent}
            autoComplete="off"
            value={fullname.email}
          />
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={inputEvent}
            name="firstName"
            autoComplete="off"
            value={fullname.firstName}
          />
          <input
            type="text"
            placeholder="Enter Your Lastname"
            onChange={inputEvent}
            name="lastName"
            autoComplete="off"
            value={fullname.lastName}
          />
          <input
            type="number"
            placeholder="Enter Your Phone Number"
            onChange={inputEvent}
            name="phone"
            autoComplete="off"
            value={fullname.phone}
          />
           <input
            type="text"
            placeholder="Enter Your qualification"
            onChange={inputEvent}
            name="qualification"
            autoComplete="off"
            value={fullname.qualification}
          />
          <button type="submit" className="hooks__button">
            Submit {"📩"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Forms;
