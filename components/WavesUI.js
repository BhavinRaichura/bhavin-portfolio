import React from "react";

function WavesUI({backgroundColor, fillColor, rotation, classes }) {
  return (
    <svg
      _ngcontent-serverApp-c7=""
      className= {"rotate-" + (rotation ?? "0") + ( " " + classes || "")}
      style={{ backgroundColor }}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="250px"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      aria-hidden="true"
      class="ng-tns-c7-2"
    >
      <path
        _ngcontent-serverApp-c7=""
        fill={fillColor}
        fill-opacity="1"
        d="M0,224L30,208C60,192,120,160,180,165.3C240,171,300,213,360,213.3C420,213,480,171,540,154.7C600,139,660,149,720,160C780,171,840,181,900,160C960,139,1020,85,1080,90.7C1140,96,1200,160,1260,186.7C1320,213,1380,203,1410,197.3L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        class="ng-tns-c7-2"
      ></path>
    </svg>
  );
}

export default WavesUI;
