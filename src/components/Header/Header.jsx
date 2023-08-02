import { Container, Link, HeaderBox } from "./Header.styled";

export const Header = () => {

  return (
   <HeaderBox>
      <Container>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Container>
      </HeaderBox>
  )

}
