import React from 'react';

//Render prop is another way to achieve common functionality like HOC
function User(props) {
  //render prop #01
  //return <h2>{props.render(true)}</h2>;

  //render prop #02
  return <h2>{props.children(false)}</h2>;
}

export default User;
