import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Menu, {SubMenu, MenuItem} from 'rc-menu'
import MetisMenu from 'react-metismenu';
class RMenu extends React.Component{
    render(){
      return(
        <div class="wrapper">

          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><img width="150px" src="https://wp.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/07/logo@2x.png"/></a>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Page
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="#">Blog</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Shop
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="#">Blog</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Blog
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="#">Blog</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </li>
                       <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Gallery
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="#">Gallery</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </li>
                    </ul>
                </div>
                <div className=""><a href="#">Login</a></div>
            </nav>
            <div className="row">
                <div className="col-lg-6">
                  <div className="navbar">
                     <ul className="list-unstyled">
                        <li className="nav-item dropdown">

                              <a className="btn nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-bars"></i> All Categories
                              </a>
                              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Gallery</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                              </div>
                        </li>
                      </ul>
                  </div>
                </div>
                <div className="col-lg-6">

                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Find Your Products" aria-label="Text input with dropdown button"/>
                        <div className="input-group-append">
                            <button className="dropdown-toggle" type="button">All Categories</button>
                            <button className="btn btn-outline-secondary"><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )
    }
}
// class MenuDes extends React.Component{
//     render(){
//        return(
//         <Menu>
//           <MenuItem>1</MenuItem>
//           <SubMenu title="2">
//           <MenuItem>2-1</MenuItem>
//           </SubMenu>
//         </Menu>
//         )
//     }
// }
ReactDOM.render(<RMenu />, 
  document.getElementById('root')

  )