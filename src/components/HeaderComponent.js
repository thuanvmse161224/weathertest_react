import React, { Component } from "react";
import { Nav, Navbar, NavbarToggler, NavItem, Collapse, Jumbotron } from 'reactstrap';
import { NavLink } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
		this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
	
	render() {
		return (
			<div>
				<Navbar light expand="md">
					<div className="container">
						<NavbarToggler onClick={this.toggleNav}/>
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar className="ml-auto">
								<NavItem>
									<NavLink className="nav-link" to="/Menu"><span class="fa fa-home fa-lg"></span> Menu</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
				<Jumbotron>
					<div className="container">
						<div className="row row-header">
							<div className="col-12 col-sm-6">
								<h1>Weather Finder</h1>
								<p>Find out temperature, conditions and more...</p>
							</div>
						</div>
					</div>
				</Jumbotron>
			</div>
		)
	}

}

export default Header;