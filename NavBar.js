import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom';
export default function NavBar(props) {
    return (
                            <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">{props.title}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                         <ul className="navbar-nav">
                            <li className="nav-item">
                                 <a className="nav-a active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                 <a className="nav-a" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="/about">{props.aboutText}</a>
                            </li> 
                         </ul>
                         <div className={`form-check form-switch text-${props.mode=== 'light'?'dark':'light'}`}>
                             <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">MODE</label>
                        </div>
                        </div>
                    </div>
                    </nav>
    );
}
NavBar.propTypes ={title: PropTypes.string.isRequired,
                                       aboutText: PropTypes.string.isRequired }
 NavBar.defaultProps={
     title: 'set title here',
     aboutText: 'set about text here'}
                                      
