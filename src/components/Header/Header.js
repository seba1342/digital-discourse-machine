import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import RandomTextGenerator from 'react-scrolling-text';

import './styles.css';

const TitleAndDescription = ({ data }) => {
  const title = data.site.siteMetadata.title;

  return (
    <div className="header">
      <h1 className="header__brand">
        <RandomTextGenerator
          charList={['D', 'i', 'G', 'i', 'T', 'A', 'L', 'D', 'i', 'S', 'C', 'O', 'U', 'R', 'S', 'E', 'M', 'A', 'C', 'H', 'i', 'N', 'E']}
          text={title}
          interval={10}
          timePerChar={200}
        />
      </h1>
      <Link to={'/'} className='header__link' activeClassName='header__link--active'>home</Link>
      <Link to={'/essay'} className='header__link' activeClassName='header__link--active'>essay</Link>
    </div>
  );
};

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  );
};

export default Header;
