import styles from "./MovieCatalog.module.css";

import GenreList from "../GenreList/GenreList";
import MoviePreview from "../MoviePreview/MoviePreview";
import { mockMovie } from "../../mock/mockMovie";
import { useInfiniteQuery } from 'react-query';
import { fetchPosts } from './mon.service.ts'

export const MovieCatalog = () => {
  
  
  // FETCHS DES CARTES A FAIRE
  
  /*function MovieCards() {
    const {
      data,
      isLoading
    } = useInfiniteQuery({
      queryKey: ["getPosts"],
      queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
    });
    
    ...
  }*/
  
  return (
    <>
      <GenreList />
      <div className={styles.layout}>
        <MoviePreview movie={mockMovie}/>
      </div>
    </>
  );
};
