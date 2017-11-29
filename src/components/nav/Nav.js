import React from "react";
import Wrapper from "./wrapper";
import { StyledLink, Ul, Li, Btn } from "./styles";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleNav = this.handleToggleNav.bind(this);
    this.state = {
      navOpen: false
    };
  }

  handleToggleNav() {
    this.setState({
      navOpen: !this.state.navOpen
    });
  }

  render() {
    return (
      <Wrapper>
        <Ul>
          {this.props.children.map(Link=> (
            <Li isOpen={this.state.navOpen} key={Link.props.to}>
              <StyledLink to="/">
                {Link}
              </StyledLink>
            </Li>
          ))}
        </Ul>
        <Btn>
          <button onClick={this.handleToggleNav}> {this.props.buttonLabel}</button>
        </Btn>
      </Wrapper>
    );
  }
} 

export default Nav;