// import "./App.css";
// import { useState } from "react";
// import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
// bakeryData.forEach((item) => {
//   item.image = process.env.PUBLIC_URL + "/" + item.image;
// });
/* ############################################################## */
// inspiration taken from github's 404 page
function App() {
  const [isActive, setIsActive] = useState(false);
  const [linkActive, setLinkActive] = useState(false);
  
  const handleClick = () => {
    // 👇️ toggle
    setIsActive(!isActive);

    // 👇️ or set to true
    setIsActive(true);
  };

  const handleLinkClick = () => {
    setLinkActive(linkActive ? linkActive : !linkActive);
  };
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  return (
    // <div className="App">
    //   <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

    //   {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
    //     <p>Bakery Item {index}</p> // replace with BakeryItem component
    //   ))}

    //   <div>
    //     <h2>Cart</h2>
    //     {/* TODO: render a list of items in the cart */}
    //   </div>
    // </div>
    <div class="App">
    <div class="container" style={{
      backgroundColor: isActive ? 'black' : 'white'
    }}>

      <h1>404</h1>
      <p><strong>Exit does not exist</strong></p>

      <p>
        The site configured at this address does not
        contain the requested exit.
      </p>

      <p>
        If this is your only hope, keep searching.
      </p>

      <p>
        <a href="https://help.github.com/pages/">Read the full documentation</a>
        for more information about using <strong>GitHub Pages</strong>.
      </p>

      <div id="suggestions">
        <a href="https://githubstatus.com">GitHub Status</a> &mdash;
        <a href="https://twitter.com/githubstatus">@githubstatus</a>
      </div>
      <button style={{visibility: isActive ? "hidden" : "visible"}} onClick={handleClick}>shut down</button>
      <a onFocus={handleLinkClick} style={{visibility: isActive ? "visible" : "hidden", color: linkActive ? "red" : "black"}} href="https://ohrtann19.github.io/epicfail/">Exit</a>
    </div>
    </div>
  );
}

export default App;

// // make sure that the filename case matches the URL.<br></br>
// // For root URLs (like <code>http://example.com/</code>) you must provide an
// // <code>index.html</code> file.

// import logo from './logo.svg';
// import whiteImg from './white.jpg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>test</p>
//         <img src={whiteImg} className="white-img" alt="test"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//       </header>
//     </div>
//   );
// }

// export default App;
