import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import { Main } from "./App.styled";
import { Header } from "../Header/Header";

const Home = lazy(() => import("../../pages/Home/Home"));
const Movies = lazy(() => import("../../pages/Movies/Movies"));
const MovieDetails = lazy(() => import("../../pages/MoviesDetails/MovieDetails"));
const Reviews = lazy(() => import("../Reviews/Reviews"));
const Cast = lazy(() => import("../Cast/Cast"));

export const App = () => {


  return (
    <div>
      <Header/>

      <Main>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movies" element={<Movies />}/>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}/>
            <Route path="reviews" element={<Reviews />}/>
            </Route>
            <Route path="*" element={<Navigate to="/" replace />}/>
          </Routes>
          </Suspense>
      </Main>
      </div>
  )


};
