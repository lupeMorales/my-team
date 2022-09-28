import "../styles/App.scss";
import { Routes, Route } from "react-router-dom";
import { matchPath, useLocation } from "react-router-dom";
import { useState } from "react";
import dataMembers from "../data/members.json";
import Header from "./Header";
import Main from "./Main";
import Member from "./Member";

function App() {
  const [members, setMembers] = useState(dataMembers);

  //saca informacion (el id) de la ruta
  const { pathname } = useLocation();

  //vemos si coincide la ruta que quiero encontrar "/teamM....." con el id de la ruta en la que estoy "pathname". Devuelve null o la info en caso de que coincida
  const dataPath = matchPath("/teamMember/:id", pathname);
  //guardo el id en memberId (si dataPath es null nada, pero si es distinto de null saca de dataPath param el id)

  const memberId = dataPath !== null ? dataPath.params.id : null;
  //busco en mi array de members
  const memberFound = members.find((item) => item.id === memberId);
  console.log(memberFound);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main members={members} />
            </>
          }
        ></Route>

        <Route
          path="/teamMember/:id"
          element={<Member member={memberFound} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
