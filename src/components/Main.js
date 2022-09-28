import "../styles/layout/Main.scss";
import { Link } from "react-router-dom";

const Main = (props) => {
  const renderMembers = props.members.map((item) => {
    const image = require(`../images/${item.img}`);

    return (
      <li className="main__card" key={item.id}>
        <Link to={`/teamMember/${item.id}`}>
          <div className="content">
            <h4 className="job">{item.job}</h4>
            <img className="img" src={image} alt="" />
            <h3 className="name">{item.name}</h3>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <main className="main">
      <section>
        <ul className="main__container">{renderMembers}</ul>
      </section>
    </main>
  );
};
export default Main;
