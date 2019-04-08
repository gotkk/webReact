import React from "react";

class Header extends React.Component {

    renderNavbar() {
        const a = window.location.pathname;

        switch (a) {
            case "/travels":
                return (
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="/travels">Travels<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/hotels">Hotels</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/restaurants">Restaurants</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                );
            case "/hotels":
                return (
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/travels">Travels<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/hotels">Hotels</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/restaurants">Restaurants</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                );
            case "/restaurants":
                return (
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/travels">Travels<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/hotels">Hotels</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/restaurants">Restaurants</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                );
            case "/about":
                return (
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/travels">Travels<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/hotels">Hotels</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/restaurants">Restaurants</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link active" href="/about">About</a>
                        </li>
                    </ul>
                );
            default:
                return (
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/travels">Travels<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/hotels">Hotels</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/restaurants">Restaurants</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                );

        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container title">
                    <a className="navbar-brand" href="/">Samutprakarn</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {this.renderNavbar()}
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;