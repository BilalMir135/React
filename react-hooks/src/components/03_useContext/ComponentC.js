import React from 'react';
import { NameContext, AgeContext } from './Context';

//using context without hooks
function ComponentC() {
  return (
    <div>
      <h1>Component C</h1>
      <NameContext.Consumer>
        {(name) => {
          return (
            <AgeContext.Consumer>
              {(age) => {
                return (
                  <div>
                    Name: {name} Age:{age}
                  </div>
                );
              }}
            </AgeContext.Consumer>
          );
        }}
      </NameContext.Consumer>
    </div>
  );
}

export default ComponentC;
