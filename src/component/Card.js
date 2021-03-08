import Modali, { useModali } from "modali";

export default function Card({ movie }) {
  const [completeModal, toggleCompleteModal] = useModali({
    animated: true,
    title: "Research",
  });

  return (
    <div className="col-md-4">
      <div className="card-deck">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{movie.name}</h5>
            <p className="card-text">
              Genre: {movie.genre}
              <br></br>
              Year: {movie.year}
              <br></br>
              Rate: {movie.rate}
            </p>
            <button onClick={toggleCompleteModal} className="btn btn-primary btn-md mr-1">
              Details
            </button>

            <a href={movie.url} className="btn btn-success btn-md">
                Buy Tickets
            </a>

            <Modali.Modal {...completeModal}>
              <div className="container">
                Title: {movie.name}
                <br></br>
                Genre: {movie.genre}
                <br></br>
                Year: {movie.year}
                <br></br>
                Rate: {movie.rate}
                <br></br>
                Synopsis: {movie.synopsis}
                <br></br>
              </div>
            </Modali.Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
