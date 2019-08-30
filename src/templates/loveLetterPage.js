import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Draggable from 'react-draggable';

import Header from '../components/Header/Header';

import './styles.css';
import './devices.min.css';

import backIcon from './images/chevron-left-solid.svg';

class LoveLetterPage extends React.Component {

  render() {
    const title = this.props.data.markdownRemark.frontmatter.title;
    const htmlAstArray = this.props.data.markdownRemark.htmlAst.children;
    const imageArray = Array.from(this.props.data.markdownRemark.frontmatter.images);
    const { prev, next } = this.props.pageContext;

    let html = '';

    for (var i = 0; i < htmlAstArray.length; i++) {
      if (htmlAstArray[i].type === 'element') {
        if (htmlAstArray[i].children[0].value) {
          html += `<p class="message-bubble">${htmlAstArray[i].children[0].value}</p>`;
        }
      }
    }

    return (
      <div className="container">
        <Header />
        <div className="container__content">
          {imageArray.map((image, index) => {
            return (
              <Draggable key={image.childImageSharp.fluid.src} >
                <div className={`loveletter__image--drag loveletter__image--${index}`}>
                  <Img fluid={image.childImageSharp.fluid} draggable={false} alt='Draggable Love Letter Image' />
                </div>
              </Draggable>
            );
          })}

          <div className="marvel-device iphone-x">
            <div className="notch">
              <div className="camera"></div>
              <div className="speaker"></div>
            </div>
            <div className="top-bar"></div>
            <div className="sleep"></div>
            <div className="bottom-bar"></div>
            <div className="volume"></div>
            <div className="overflow">
              <div className="shadow shadow--tr"></div>
              <div className="shadow shadow--tl"></div>
              <div className="shadow shadow--br"></div>
              <div className="shadow shadow--bl"></div>
            </div>
            <div className="inner-shadow"></div>
            <div className="screen">
              <div className="message">
                <div className="message__header">
                  <Link to="/" className="message__header--back-btn">
                    <img className="message__header--icon" src={backIcon} alt='Back Button icon' />
                  </Link>
                  <span className="message__header--contact-name">{title}</span>
                </div>
                <div className="message__bubbles" dangerouslySetInnerHTML={{ __html: html }} />
                <div className="message__reply">
                  <input type="text" placeholder="iMessage" disabled />
                </div>
              </div>
            </div>
          </div>

          <div className="pagination">
            {prev &&
              <Link to={prev.frontmatter.path} className="pagination__item">
                {'👈💌'}
              </Link>
            }

            {next &&
              <Link to={next.frontmatter.path} className="pagination__item">
                {'💌👉'}
              </Link>
            }
          </div>
        </div>
      </div>
    );
  }
}

export const query = graphql`
  query($pathSlug: String!) {
          markdownRemark(frontmatter: {path: {eq: $pathSlug } }) {
          html
      htmlAst
        frontmatter {
          title
        images {
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
}`;

export default LoveLetterPage;
