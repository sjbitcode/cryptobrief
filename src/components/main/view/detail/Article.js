import React from 'react';
import PropTypes from 'prop-types';

import { formatISODate } from '../../../../api/helpers';


class Article extends React.Component {
  static propTypes = {
    article: PropTypes.object.isRequired
  };

  render() {
    const { article } = this.props;

    const articleStyle = {
      border: '2px solid black'
    };
    const imgStyle = {
      width: '100px',
      height: '100px'
    };

    return (
      <div style={articleStyle}>
        <p>{article.title}</p>
        <p>{article.author}</p>
        <p>{article.source.name}</p>
        <em>{article.description}</em>
        <p>{article.url}</p>
        <img src={article.urlToImage} style={imgStyle} alt={article.urlToImage}/>
        <p>{formatISODate(article.publishedAt)}</p>
      </div>
    );
  }
};

export default Article;