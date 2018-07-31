import * as React from 'react';
import { Shimmer } from './index.style';

interface IShimmerProps {
  width?: string;
  heigth?: string;
  radius?: string;
}

export class ShimmerEffect extends React.Component<IShimmerProps, any> {
  constructor(props: IShimmerProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <Shimmer
        data-width={this.props.width}
        data-heigth={this.props.heigth}
        data-radius={this.props.radius}
        />
      </div>

    );
  }
}
