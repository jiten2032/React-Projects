import React, { Component } from 'react'

export class Navbar extends Component {

    state = {
        name: null
    }



    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.id

    //     })

    // }

    render() {
       
        return (
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-success sticky-top">
                        <div className="container">

                            <span className="navbar-brand mb-0 h1 fst-italic">FoodyStan</span>


                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="https://www.swiggy.com/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="https://www.swiggy.com/">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="https://www.swiggy.com/">Support</a>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </nav>
                   
                </div>
              

            </div>

        )
    }
}

export default Navbar
