import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { LinkNav, Logo, LogoRed } from "./Header.styled";
import { navList } from "../../utils/data/navList";
import { useContext } from "react";
import { Context } from "..";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../utils/data/routes";

export const Header = () => {
  const { searchParams, setSearchParams } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const searchQuery = searchParams.get("query") ?? "";

  const handleChange = ({ target }) => {
    setSearchParams({ query: target.value });

    if (!location.pathname.includes(routes.search)) {
      navigate(`/${routes.search}?query=${target.value}`);
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Logo>
            <LogoRed>Move</LogoRed>Store
          </Logo>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {navList.map((item) => {
              return (
                <LinkNav key={item.title} to={item.path}>
                  {item.title}
                </LinkNav>
              );
            })}
          </Nav>
          <Form className="d-flex ms-auto">
            <Form.Control
              type="search"
              placeholder="Movies and Shows"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
              value={searchQuery}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
