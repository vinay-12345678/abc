import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <h4>Pesto</h4>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                </div>
            </div>
            </nav>
        </div>
    )
}
