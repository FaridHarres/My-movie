
import { Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler, Collapse, Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import '../App.css'

export default function Header() {
  return (
    <div >
      <div>
        <Navbar
          dark
          expand="md"
          style={{backgroundColor: "black",}}
        >
          <NavbarBrand href="/">
            <img src='./img/logo.png' style={{ width: "80px", margin: "5px" }} />
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() { }} />
          <Collapse navbar>
            <Nav className="me-auto" navbar >
              <NavItem>
                <NavLink href="/components/" style={{ color: "#FFFFFF", margin: "5px" }}>
                  LAST RELEASES
                </NavLink>
              </NavItem>
              <div>
                <Button
                  id="Popover1"
                  type="button"
                  style={{ width: "80px", margin: "5px" }}
                >
                  FILM
                </Button>
                <Popover
                  flip
                  target="Popover1"
                  toggle={function noRefCheck() { }}
                >
                  <PopoverHeader>
                    Popover Title
                  </PopoverHeader>
                  <PopoverBody>
                    Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                  </PopoverBody>
                </Popover>
              </div>

            </Nav>
          </Collapse>
        </Navbar>
      </div>



    </div>
  )
}