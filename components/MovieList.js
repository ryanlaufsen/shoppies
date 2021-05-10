import './MovieList.css';

const MovieList = (props) => {
    
    const NominationComponent = props.nominationComponent;

    return (
        <>
            {
                props.movies.map((movie, index) => (
                    <li className="item" key={index}>
                        <div className="card">
                            <div className="movie-title">
                                <p>{ movie.Title }</p>
                                <p>{ movie.Year }</p>
                                <div className="gradient-overlay"></div>
                            </div>
                            <div className="image-container">
                                {
                                    movie.Poster !== 'N/A' ?
                                        <img src={ movie.Poster } alt={ movie.Title }></img>
                                        : <p>(No poster available)</p>
                                }
                            </div>
                            <div
                                onClick={() => props.handleNominationClick(movie)}
                                className="overlay flex-col-center"
                            >
                                <NominationComponent />
                            </div>
                        </div>
                    </li>
                ))
            }
        </>
    );
}
 
export default MovieList;