import React, { Component } from "react";

export default class CardServicio extends Component {
  render() {
    return (
      <div className="card">
        <div className="card_body">
          <div className="card_body">
            <h2 className="card_title">{this.props.title}</h2>
          </div>
          <div className="card_img">
            <img className="card_image" src={this.props.src} />
            <div className="card_ref">
              Iconos diseñados por{" "}
              <a
                href={this.props.urlAutor}
                title={this.props.titleImg}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.titleImg}
              </a>{" "}
              from{" "}
              <a
                href="https://www.flaticon.es/"
                title="Flaticon"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.flaticon.es
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
