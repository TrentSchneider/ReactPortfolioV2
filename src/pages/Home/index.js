import React from "react";

function Home(props) {
  const mainFormat = `fillHeight ${props.lightDark.background}`;
  return (
    <div className={mainFormat}>
      <h1>Home</h1>
    </div>
  );
}

export default Home;