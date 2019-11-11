import React, {Component} from 'react';
import CoolButton from './CoolButton'
// import CoolButton from '../CoolButton/CoolButton';


class Navbar extends Component {
    render() {
        return (
            <div>

                <nav className="navbar is-transparent">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                        </a>
                        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item" href="https://bulma.io/"> Home  </a>
                            <div className="navbar-item has-dropdown is-hoverable">


                            </div>
                        </div>
                    </div>




                    <div className="navbar-end">
                        <div className="navbar-item">
                            {/* <div className="field is-grouped">
                                <p className="control">
                                    <a className="button is-info">
                                        <span>
                                            Login
          </span>
                                    </a>
                                </p>
                                <p className="control">
                                    <a className="button is-primary" href="">

                                        <span>SignUp</span>
                                    </a>
                                </p>
                            </div> */}
                                 <CoolButton
                  type="button is-rounded my-class is-danger is-small"
                  name="Login"
                />
                <CoolButton type="button is-small is-success" name="Signup" />
                        </div>

                    </div>
                </nav>

            </div>
        )
    }
}


export default Navbar