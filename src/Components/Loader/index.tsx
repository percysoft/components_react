import * as React from 'react';
import './index.scss';

interface ILoaderProps {
  heightLoader: number;
}

export const Loader: React.SFC<ILoaderProps> = (props) => {
  return (
    <div className="b-loader" style={{ width: props.heightLoader, height: props.heightLoader }}>
      <div className="b-loader_spinner">
        <svg className="b-loader_spinner__svg" viewBox="0 0 120 120" fill="transparent">
          <circle r={42} cx={60} cy={60} stroke="#333"
                  strokeWidth="6" strokeDasharray="2 9.5"></circle>
          <linearGradient id="gradient-0-60">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.5"></stop>
            <stop offset="100%" stopColor="#fff" stopOpacity="0"></stop>
          </linearGradient>
          <rect x={0} y={60} width={60} height={60}
                fill="url(#gradient-0-60)" className="b-loader_spinner__rect"></rect>
          <linearGradient id="gradient-0-0">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.5"></stop>
            <stop offset="100%" stopColor="#fff" stopOpacity="0.75"></stop>
          </linearGradient>
          <rect x={0} y={0} width={60} height={60}
                fill="url(#gradient-0-0)" className="b-loader_spinner__rect"></rect>
          <linearGradient id="gradient-60-0">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.75"></stop>
            <stop offset="100%" stopColor="#fff" stopOpacity="0.9"></stop>
          </linearGradient>
          <rect x={60} y="0" width={60} height={60}
                fill="url(#gradient-60-0)" className="b-loader_spinner__rect"></rect>
          <linearGradient id="gradient-60-60">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.9"></stop>
            <stop offset="100%" stopColor="#fff" stopOpacity="1"></stop>
          </linearGradient>
          <rect x={60} y={60} width={60} height={60}
                fill="url(#gradient-60-60)" className="b-loader_spinner__rect"></rect>
          <linearGradient id="arc-gradient">
            <stop offset="0%" stopOpacity="0"></stop>
            <stop offset="49.99%" stopOpacity="0"></stop>
            <stop offset="50%" stopColor="#BBB"></stop>
            <stop offset="100%" stopColor="#333"></stop>
          </linearGradient>
          <circle r={36} cx={60} cy={60} fill="transparent" stroke="url(#arc-gradient)"
                  strokeWidth="2" className="b-loader_spinner__circle"></circle>
        </svg>
      </div>
    </div>
  );
};
