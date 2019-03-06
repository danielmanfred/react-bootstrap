import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
    .then(res => res.json())
    .then(json => this.setState({ photos: json }))
  }

  render() {
    return (
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          
          <a className="navbar-brand" href="#"><i className="fas fa-igloo"></i>&nbsp;Responsive Website</a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
          aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <section className="collapse navbar-collapse" id="navbarMainToggler">
            <div className="navbar-nav ml-auto pr-3">
              <a className="nav-item nav-link" href="#">Home</a>
              <a className="nav-item nav-link" href="#">Channel</a>
              <a className="nav-item nav-link" href="#">Login</a>
            </div>

            <form className="form-inline">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input className="form-control mr-3" placeholder="username"/>
                <button className="btn btn-outline-success">Login</button>
              </div>
            </form>

          </section>
        </nav>

        <section id="carouselSection" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselIndicators" data-slide-to="1"></li>
            <li data-target="#carouselIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://via.placeholder.com/600/92c952" alt="Image 1" className="d-block w-100"/>
            </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/600/771796" alt="Image 2" className="d-block w-100"/>
            </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/600/24f355" alt="Image 3" className="d-block w-100"/>
            </div>
          </div>
        </section>

        <section className="container p-2">
          <ul className="list-unstyled">

            {
              this.state.photos.map(photo => {
                return (
                  <li className="media pt-2">
                    <img src={photo.thumbnailUrl} alt="" className="mr-3"/>
                    <div className="media-body">
                      <h5 className="mt-0 mb-1">{photo.title}</h5>
                      <p>ID: {photo.id}</p>
                      This is a basic React App Application
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </section>

        <footer className="container col-12 pt-3 footer bg-dark text-light text-center">
          <container className="container d-flex justify-content-around col-10 col-md-3">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-google-plus-g"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
          </container>
        </footer>
      </div>
    );
  }
}

export default App;
