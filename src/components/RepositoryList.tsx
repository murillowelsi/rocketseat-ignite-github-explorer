import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";

import "../styles/repositories.scss";

interface Repository {
  name: string;
  description: string;
  html_url: string;
  language: string;
  created_at: string;
  updated_at: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  // o primeiro parametro do useEffect é a função que vai ser executada.
  // o segundo paramentro é a dependencia, ou seja, quando repositories for alterado
  // a função será executada. Se o array de dependencia estiver vazio, vai executar apenas uma vez

  // cuidado para nao deixar o useEffect sem o segundo parametro
  // jamais alterar dentro do useEffect o conteudo do segundo parametro. Isso vai gerar um loop
  useEffect(() => {
    fetch("https://api.github.com/users/murillowelsi/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
