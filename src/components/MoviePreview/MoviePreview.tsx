import styles from "./MoviePreview.module.css";
import { Movie } from "../../models";
import { POSTER_URL_PREFIX } from "../../App";

const MoviePreview = ({ movie }: { movie: Movie }) => {
  const goToMovieDetails = () => {
    // A DEFINIR EXPERT
  };

  console.log(POSTER_URL_PREFIX + movie.poster_path);
  return <div className={styles.movieCard} onClick={goToMovieDetails}>
    <img src={POSTER_URL_PREFIX + movie.poster_path} crossOrigin=''></img>
    <div className={styles.titleContainer}>
      <h1>{movie.title}</h1>

      <div className={styles.stars}>{[...Array(5)].map((_, index) => (
        <div className={`${
          (index+1<=(movie.vote_average*5/10)) ? styles.yellowStar : styles.whiteStar
        }`}>★</div>

      ))}</div>
      
    </div>
  </div>;
};

export default MoviePreview;
