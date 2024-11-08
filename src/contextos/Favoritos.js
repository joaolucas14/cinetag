import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
  const [favorito, setFavoritos] = useState([]);
  return (
    <FavoritosContext.Provider value={{ favorito, setFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritoContext() {
  const { favorito, setFavoritos } = useContext(FavoritosContext);

  function adicionarFavorito(novoFavorito) {
    const favortitoRepetido = favorito.some(
      (item) => item.id === novoFavorito.id
    );

    let novaLista = [...favorito];

    if (!favortitoRepetido) {
      novaLista.push(novoFavorito);
      return setFavoritos(novaLista);
    }

    novaLista.splice(novaLista.indexOf(novoFavorito), 1);
    return setFavoritos(novaLista);
  }
  return {
    favorito,
    adicionarFavorito,
  };
}
