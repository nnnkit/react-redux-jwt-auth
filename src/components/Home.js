import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  state = {
    articles: [],
  };
  componentDidMount() {
    fetch('https://conduit.productionready.io/api/articles?limit=10&offset=0')
      .then(res => res.json())
      .then(({articles}) => this.setState({articles}));
  }

  render() {
    return (
      <ul>
        {this.state.articles.map(article => (
          <li>
            <Link key={article.id} to={`/articles/${article.slug}`}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
