import React from "react";

interface Props {
  isActive: boolean;
}

const IconDashboard: React.FC<Props> = ({ isActive }) => {
  return (
    <div>
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.63721 0H1.25565C0.56325 0 0 0.53617 0 1.19528V4.26897C0 4.92821 0.56325 5.46438 1.25565 5.46438H6.63721C7.32974 5.46438 7.89299 4.92821 7.89299 4.26897V1.19528C7.89299 0.53617 7.32974 0 6.63721 0Z"
          fill={isActive ? "#E03B3B" : "white"}
        />
        <path
          d="M6.63721 7.28577H1.25565C0.56325 7.28577 0 7.83045 0 8.50015V15.786C0 16.4555 0.56325 17.0002 1.25565 17.0002H6.63721C7.32974 17.0002 7.89299 16.4555 7.89299 15.786V8.50015C7.89299 7.83045 7.32974 7.28577 6.63721 7.28577Z"
          fill={isActive ? "#E03B3B" : "white"}
        />
        <path
          d="M15.7448 11.5359H10.3632C9.67067 11.5359 9.10742 12.0721 9.10742 12.7313V15.805C9.10742 16.4641 9.67067 17.0003 10.3632 17.0003H15.7448C16.4372 17.0003 17.0004 16.4641 17.0004 15.805V12.7313C17.0004 12.0721 16.4372 11.5359 15.7448 11.5359Z"
          fill={isActive ? "#E03B3B" : "white"}
        />
        <path
          d="M15.7448 0H10.3632C9.67067 0 9.10742 0.544682 9.10742 1.21426V8.50007C9.10742 9.16977 9.67067 9.71445 10.3632 9.71445H15.7448C16.4372 9.71445 17.0004 9.16977 17.0004 8.50007V1.21426C17.0004 0.544682 16.4372 0 15.7448 0Z"
          fill={isActive ? "#E03B3B" : "white"}
        />
      </svg>
    </div>
  );
};

export default IconDashboard;
