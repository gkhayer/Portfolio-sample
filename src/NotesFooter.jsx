import React from "react";

const NotesFooter = () => {

    const getCurrentYear = new Date().getFullYear()
  return (
    <>
      <footer>copyright © {getCurrentYear}</footer>
    </>
  );
};

export default NotesFooter;
