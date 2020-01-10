import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    typeHelloWorld();
  },);

  let i = 0;
  const typeHelloWorld = () => {
    const text = "And I can even make it look pretty.";
    // move through each letter to text and repeat function until finished
    if (i < text.length) {
      document.getElementById("typedIntro").innerHTML += text[i];
      i++;
      setTimeout(typeHelloWorld, 60);
    }
  }

  return (
    <div className="headerContainer">
      <div className="contact">
        <a href="mailto:sarahlaftchiev@gmail.com">Get in Touch</a>
      </div>
      <h1>Building Better Software</h1>
      <div id="typedIntro"></div>
      <h2>Sarah Laftchiev</h2>
    </div>
  )
}

export default Header;
