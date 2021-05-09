import React from "react";

function Header({ nominationsCount }) {
  return (
    <header className="mt-5 mb-5 text-center">
      <h1
        style={{
          fontSize: "4rem",
          textTransform: "uppercase",
        }}
      >
        The Shoppies
      </h1>
      <hr />
      <p style={{ fontSize: "1.5rem" }}>Nominate your top 5 movies!</p>
      <p style={{ fontSize: "1rem", fontStyle: "italic" }}>
        You currently have{" "}
        <strong style={{ color: "blue" }}>{nominationsCount}</strong> movies in
        your nomination list. Click <a href="#nominations">here</a> to see your
        nominations
      </p>
    </header>
  );
}

export default Header;
