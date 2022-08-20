import React from "react";

export const IconMinus = (props: {scale?: number}) => {
  const { scale = 1 } = props;
  
  return (
    <svg
      width={`${scale*16}`}
      height={`${scale*4}`}
      viewBox="0 0 16 4"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.8571 0.285736C6.46862 0.285736 8.56859 0.285736 1.14286 0.285736C0.511786 0.285736 0 0.797522 0 1.42859V2.57145C0 3.20252 0.511786 3.71431 1.14286 3.71431C9.53138 3.71431 7.43141 3.71431 14.8571 3.71431C15.4882 3.71431 16 3.20252 16 2.57145V1.42859C16 0.797522 15.4882 0.285736 14.8571 0.285736Z" />
    </svg>
  );
};
