import React from 'react';

interface LogoutIconProps {
  width?: number;
  height?: number;
  fill?: string;
  style?: React.CSSProperties;
  secondaryFill?: string;
}

const LogoutIcon: React.FC<LogoutIconProps> = ({
  width = 24,
  height = 24,
  fill,
  style = {},
  secondaryFill = '#00B39F'
}) => (
  <svg
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    viewBox="0 0 17 19"
    width={width}
    fill={secondaryFill}
  >
    <path d="M11.7 14V11.3H5.4V7.7H11.7V5L16.2 9.5L11.7 14Z" fill={fill} />
    <path d="M9.9 0.5C10.3774 0.5 10.8352 0.689642 11.1728 1.02721C11.5104 1.36477 11.7 1.82261 11.7 2.3V4.1H9.9V2.3H1.8V16.7H9.9V14.9H11.7V16.7C11.7 17.1774 11.5104 17.6352 11.1728 17.9728C10.8352 18.3104 10.3774 18.5 9.9 18.5H1.8C1.32261 18.5 0.864773 18.3104 0.527208 17.9728C0.189642 17.6352 0 17.1774 0 16.7V2.3C0 1.82261 0.189642 1.36477 0.527208 1.02721C0.864773 0.689642 1.32261 0.5 1.8 0.5H9.9Z" />
  </svg>
);

export default LogoutIcon;
