import { useEffect, useState } from "react";
import Characters from "./components/Characters";
import { GlobalStyle } from "./style/global";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((newCharacters) =>
        setCharacterList((prevCharacters) => [
          ...prevCharacters,
          ...newCharacters.results,
        ])
      )
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Characters
          characterList={characterList}
          setPage={setPage}
          page={page}
        />
      </>
    </div>
  );
}

export default App;
