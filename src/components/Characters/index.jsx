import CharCard from "../CharCard";
import { Main } from "./style";

import React from "react";
import logo from "../../img/RR.png";

function Characters({ characterList, setPage }) {
  React.useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setPage((pageInsideState) => pageInsideState + 1);
      }
    });

    intersectionObserver.observe(document.querySelector("#scroll"));

    return () => intersectionObserver.disconnect();
  }, [setPage]);
  return (
    <Main>
      <ul>
        <li className="soon">
          <img src={logo} alt="Logo Rick and Morty" className="img"/>
        </li>
        {characterList.map((elem) => (
          <CharCard key={elem.id} elem={elem} />
        ))}
        <li id="scroll"></li>
      </ul>
    </Main>
  );
}
export default Characters;
