import React, {Component} from 'react';

export default class SingleArticle extends Component {
  state = {
    article: {},
  };
  componentDidMount() {
    fetch(
      `https://conduit.productionready.io/api/articles/${
        this.props.match.params.slug
      }`,
    )
      .then(res => res.json())
      .then(({article}) => this.setState({article}));
  }

  render() {
    return (
      <div>
        <li>
          <h3>{this.state.article.title}</h3>
          <p>{this.state.article.body}</p>
        </li>
      </div>
    );
  }
}
