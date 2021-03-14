import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
            <a className="navbar-brand" href="/"> <h1>Odinachi</h1></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{color: '#fff'}}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">About Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Stack</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Projects</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}
