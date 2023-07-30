import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home"
import { Movies } from "../pages/Movies"
import { MovieDetails } from "../pages/MovieDetails"
import { Reviews } from "./Reviews";
import { Cast } from "./Cast";
import { Container, Header, Link, Main } from "./App.styled";

export const App = () => {
  return (
    <div>

      <Header>
        <Container>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          </nav>
          </Container>
      </Header>

      <Container>
      <Main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movies" element={<Movies />}/>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}/>
            <Route path="reviews" element={<Reviews />}/>
          </Route>
        </Routes>
      </Main>
      </Container>
      </div>
  )


};
