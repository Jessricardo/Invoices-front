/**
*
* FullPageLoader
*
*/

import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import {
  LoaderContainer,
} from './styledComponents';

class FullPageLoader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <LoaderContainer>
        <CircularProgress
          size={80}
          thickness={5}
          color="#00b74f"
        />
      </LoaderContainer>
    );
  }
}

FullPageLoader.propTypes = {

};

export default FullPageLoader;
