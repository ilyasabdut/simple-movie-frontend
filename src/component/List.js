export default function List({ movie }) {
  return (
    <ul className="list-group">
      <li className="list-group-item">{movie.name} - {movie.rate}</li>
    </ul>
  );
}
