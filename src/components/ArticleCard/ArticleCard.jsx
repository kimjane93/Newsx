import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "materialize-css";
// import { Button, Card, Row, Col } from "react-materialize";
import './ArticleCard.css';

class ArticleCard extends Component {
  // state = {
  //   formData: { id: this.props.article._id },
  // };

  handleSubmit = (e) => {
    // e.preventDefault();
    // this.props.handleDeleteArticle(this.state.formData.id);
    this.props.handleDeleteArticle(this.props.article._id);
  };

  render() {
    const article = this.props.article;
    return (
      <>
            <div className="card z-depth-5 center" style={{'max-width': '500px'}}>
              <div className="card-image">
                <img 
                className="responsive-img z-depth-1" 
                src={article.urlToImage} alt="article-header"/>
                <span><p className="card-title article-title blue-grey darken-4">{article.title}</p></span>
              </div>
              <div className="card-action">
                <Link
                  to={{
                    pathname: "/profile/article",
                    state: { article },
                  }}
                >
                  {" "}
                  Read Article
                </Link>
              </div>

              <div className="card-action remove waves-effect waves-light" onClick={this.handleSubmit}>
                Remove From Bookmarks
              </div>
            </div>
      </>
    );
  }
}

export default ArticleCard;
