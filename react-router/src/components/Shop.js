import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const styles = {
    navLink: {
      color: '#000',
      textDecoration: 'none',
    },
  };

  const [repos, setRepos] = useState({});

  useEffect(() => {
    const fecthItems = async () => {
      const response = await fetch(
        'https://api.github.com/users/bilalmir135/repos'
      );
      const data = await response.json();
      console.log(data);
      setRepos(data);
    };
    fecthItems();
  }, []);

  return (
    <div>
      <h1>Shop</h1>
      {repos.length ? (
        repos.map((repoObj, index) => (
          <p key={index}>
            <Link to={`/shop/${index}`} style={styles.navLink}>
              {repoObj.name}
            </Link>
          </p>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Shop;
