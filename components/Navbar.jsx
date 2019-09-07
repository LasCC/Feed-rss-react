import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="ui secondary pointing menu container">
            <Link to="/">
                <p className="item"><i className="apple icon"></i><span id="hoverAnimation">macOS</span></p>
            </Link>
            <Link to="/windows">
                <p className="item"><i className="windows icon"></i><span id="hoverAnimation">Windows</span></p>
            </Link>
            <Link to="/formation">
                <p className="item"><i className="book icon"></i><span id="hoverAnimation">Formations</span></p>
            </Link>
            <Link to="/news">
                <p className="item"><i className="terminal icon"></i><span id="hoverAnimation">Hacking News</span></p>
            </Link>
            <Link to="/series">
                <p className="item"><i className="tv icon"></i><span id="hoverAnimation">Series</span></p>
            </Link>
            <Link to="/films">
                <p className="item"><i className="film icon"></i><span id="hoverAnimation">Films</span></p>
            </Link>
            <Link to="/ebook">
                <p className="item"><i className="book icon"></i><span id="hoverAnimation">Ebooks</span></p>
            </Link>
            <div className="right menu">
                <a className="ui item animated heartbeat pulse infinite slower" href="https://github.com/LasCC" target="_blank" rel="noopener noreferrer"><i className="github icon"></i><span>Github</span></a>
            </div>
        </div>
    )
}
