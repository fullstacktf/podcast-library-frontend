import * as React from "react";
import { useColorModeValue } from "@chakra-ui/react";

function SvgComponent(props: any) {
  const bg = useColorModeValue("black", "#ffbd59");
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100px"
      height="100px"
      viewBox="0 0 100 100"
      xmlSpace="preserve"
      {...props}
    >
      <path fill={bg} d="M45.697 45.697a6.083 6.083 0 00-.002 8.603 6.082 6.082 0 008.606.001 6.08 6.08 0 000-8.607 6.08 6.08 0 00-8.604.003zM76.549 79.165c15.972-16.109 15.934-42.207-.122-58.263-.023-.023-.05-.037-.073-.059l.006-.006-1.696-1.698-.02.02a2.38 2.38 0 00-3.136.141l-.003-.003-.026.026-.008.007-.006.008-2.773 2.772-.002.002a.002.002 0 01-.002.002l-.2.2.02.02a2.376 2.376 0 00.01 2.951l-.019.019.19.19v.001h.001L70.196 27l.027-.027c.022.023.037.05.06.073C82.95 39.714 82.99 60.3 70.405 73.02l-.017-.017-1.504 1.504-.003.002-.002.003-.188.188.019.019a2.38 2.38 0 00.141 3.136l-.003.003.031.031.002.003.003.002 1.396 1.396.002.003.003.002 1.376 1.376.002.003.003.002.198.198.02-.02a2.377 2.377 0 002.952-.009l.019.019 1.567-1.568a.018.018 0 01.005-.004l.018-.019.107-.107-.003-.001z" />
      <path fill={bg} d="M64.923 67.54c9.561-9.699 9.523-25.365-.123-35.01-.023-.023-.05-.037-.073-.06l.007-.007-1.697-1.698-.02.02a2.382 2.382 0 00-3.136.141l-.003-.003-.029.029-.005.004-.004.005-2.774 2.774-.004.003-.003.004-.198.198.02.02a2.376 2.376 0 00.009 2.951l-.019.019.189.189.002.002.002.002 1.504 1.505.027-.027c.022.023.037.05.06.073 6.258 6.257 6.293 16.407.119 22.717l-.013-.013-1.505 1.505-.002.001-.001.002-.189.189.019.019a2.38 2.38 0 00.141 3.135l-.004.004 2.816 2.815.201.201.02-.02a2.378 2.378 0 002.951-.009l.02.02 1.572-1.572.125-.125-.002-.003z" />
      <g>
        <path fill={bg} d="M54.305 45.7a6.083 6.083 0 00-8.606-.001 6.08 6.08 0 000 8.605 6.08 6.08 0 008.605-.001 6.084 6.084 0 00.001-8.603z" />
        <path fill={bg} d="M43.109 63.089l.019-.019-.188-.188-.003-.004-.003-.003-1.503-1.504-.027.027c-.022-.023-.037-.05-.059-.072-6.258-6.258-6.293-16.408-.119-22.718l.013.013 1.697-1.696-.02-.02a2.38 2.38 0 00-.141-3.135l.004-.004-3.018-3.017-.02.02a2.376 2.376 0 00-2.951.009l-.019-.019-.191.191-1.381 1.381-.125.125.003.003c-9.562 9.699-9.523 25.365.123 35.011.022.022.049.037.072.059l-.006.006 1.697 1.698.02-.02a2.382 2.382 0 003.135-.141l.003.003.029-.029.005-.004.004-.005 2.775-2.775.003-.002.002-.002.199-.199-.02-.02a2.374 2.374 0 00-.009-2.95z" />
        <path fill={bg} d="M31.483 74.715l.019-.019-.19-.19-.001-.001-.001-.001-1.506-1.505-.027.027c-.022-.023-.037-.05-.059-.073C17.05 60.284 17.012 39.7 29.597 26.98l.016.016 1.504-1.504.003-.002.002-.003.188-.188-.019-.019a2.38 2.38 0 00-.141-3.136l.004-.004-1.434-1.434-.001-.001-.001-.001-1.581-1.581-.02.021a2.376 2.376 0 00-2.951.009l-.02-.02-1.696 1.697.003.003c-15.974 16.11-15.936 42.209.121 58.265.023.023.05.037.073.059l-.007.007 1.697 1.698.02-.02a2.382 2.382 0 003.136-.142l.003.003.033-.033 2.778-2.779.005-.004.004-.005.196-.196-.02-.02a2.376 2.376 0 00-.009-2.951z" />
      </g>
    </svg>
  );
}

export default SvgComponent;
