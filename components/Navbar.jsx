import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="ui secondary pointing menu container">
            <Link to="/">
                <span className="item animated zoomIn"><i className="apple icon"></i> macOS</span>
            </Link>
            <Link to="/windows">
                <span className="item animated zoomIn delay-1s"><i className="windows icon"></i> Windows</span>
            </Link>
            <Link to="/formation">
                <span className="item animated zoomIn delay-2s"><i className="book icon"></i> Formations</span>
            </Link>
            <Link to="/news">
                <span className="item animated zoomIn delay-3s"><i className="terminal icon"></i> Hacking News</span>
            </Link>
            <Link to="/series">
                <span className="item animated zoomIn delay-4s"><i className="tv icon"></i> Series</span>
            </Link>
            <Link to="/films">
                <span className="item animated zoomIn delay-5s"><i className="film icon"></i> Films</span>
            </Link>
            <Link to="/ebook">
                <span className="item animated zoomIn delay-5s"><i className="book icon"></i> Ebooks</span>
            </Link>
            <div className="right menu">
                <a className="ui item animated heartbeat pulse infinite slower" href="https://github.com/LasCC" target="_blank" rel="noopener noreferrer"><i className="github icon"></i> Github</a>
            </div>
        </div>
    )
}
