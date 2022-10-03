interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
    language: string;
    created_at: string;
    updated_at: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name ?? "Default"}</strong>
      <p>
        <strong>Crated at:</strong> {props.repository.created_at}
      </p>
      <p>
        <strong>Last Update:</strong> {props.repository.updated_at}
      </p>
      <p>{props.repository.description}</p>
      <p>{props.repository.language}</p>

      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  );
}
