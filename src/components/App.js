import "../styles/App.scss";
import { useState } from "react";
import dataMembers from "../data/members.json";

function App() {
  const [members, setMembers] = useState(dataMembers);

  const renderMembers = () => {
    return members.map((member, index) => {
      return (
        <li className="main__card" key={index}>
          <div className="content">
            <h4 className="job">{member.job}</h4>
            <img className="img" src={member.img} alt="" />
            <h3 className="name">{member.name}</h3>
          </div>
        </li>
      );
    });
  };
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">the creative crew</h1>
        <article>
          <h2 className="header__subtitle">who we are</h2>
          <p className="header__text">
            We are team of creatively diverse. drive. Innovative individuals
            working in various locations from de world.
          </p>
        </article>
      </header>
      <main className="main">
        <section>
          <ul className="main__container">{renderMembers()}</ul>
        </section>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
