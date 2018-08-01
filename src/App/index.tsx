import * as React from 'react';
import { ShimmerEffect } from '../Components/ShimmerEfect';
import { Loader } from '../Components/Loader';
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
      <Loader heightLoader= {100}/>
      </React.Fragment>
    );
  }
}
