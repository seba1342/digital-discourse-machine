import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Header from '../components/Header/Header';

import './styles.css';

class LoveLetterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedFilter: 'all', };
    this.filterLoveLetters = this.filterLoveLetters.bind(this);
  }

  filterLoveLetters(tag) {
    this.setState({
      selectedFilter: tag,
    });
  }

  render() {
    const { allMarkdownRemark } = this.props.data;
    const { edges } = allMarkdownRemark;
    const tags = allMarkdownRemark.distinct;
    const tagCount = Array.from(allMarkdownRemark.group).map(tagCount => tagCount.totalCount);

    const { selectedFilter } = this.state;

    return (
      <div className="container">
        <Header />
        <div className="filter">
          <div className={`filter__item ${selectedFilter === 'all' && 'filter__item--active'}`} key="all" onClick={() => this.filterLoveLetters('all')}>{`all (${allMarkdownRemark.totalCount})`}</div>
          {tags.map((tag, index) => (<div className={`filter__item ${selectedFilter === tag && 'filter__item--active'}`} key={tag} onClick={() => this.filterLoveLetters(tag)}>{`${tag} (${tagCount[index]})`}</div>))}
        </div>

        <div className="container__content">

          {
            //eslint-disable-next-line
            edges.map(function (edge) {
              const { frontmatter } = edge.node;
              const featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid;
              if ((Array.from(frontmatter.tags).includes(selectedFilter)) || (selectedFilter === 'all')) {
                return (
                  <div key={frontmatter.path} className={'loveletter__item'}>
                    <Link to={frontmatter.path} className="loveletter__link">
                      <Img fluid={featuredImgFluid} className="loveletter__image" />
                      <div className="loveletter__image--overlay"></div>
                    </Link>
                  </div>
                );
              }
            })}
        </div>
      </div>
    );
  }
}

export const query = graphql`
  query LoveLettersPageQuery {
    allMarkdownRemark( sort: {order: DESC, fields: [frontmatter___date]}) {
      totalCount
      distinct(field: frontmatter___tags)
      group(field: frontmatter___tags) {
        totalCount
      }
      edges {
        node {
          frontmatter {
            title
            path
            date
            tags
            featuredImage {
              childImageSharp{
                fluid (maxWidth:400, quality:100){
                  src
                  srcSet
                  aspectRatio
                  sizes
                  base64
                }
              }
            }
          }
        }
      }
    }
  }`;

export default LoveLetterList;
