import * as React from 'react';
import { ShimmerEffect } from '../Components/ShimmerEfect';
export class App extends React.Component<{}, {}> {

  constructor(props: any) {
    super(props);
  }

  render() {
    return(
      <React.Fragment>
        <ShimmerEffect
          width= "500px"
          heigth= "40px"
          radius="10%"
        />
      </React.Fragment>
    );
  }
}
