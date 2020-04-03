import React from "react";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        {/* <h1>Welcome to a Rick &amp; Morty fan page</h1> */}
        <div className='welcomePageImgContainer'>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </div>
      </header>
    </section>
  );
}
