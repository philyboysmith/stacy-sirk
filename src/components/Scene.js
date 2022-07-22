import * as React from "react"

const SvgScene = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.93 45.44" {...props}>
    <defs>
      <clipPath id="scene_svg__a">
        <path
          style={{
            fill: "none",
          }}
          d="M0 0h61.93v45.44H0z"
        />
      </clipPath>
    </defs>
    <g
      style={{
        clipPath: "url(#scene_svg__a)",
      }}
    >
      <path
        d="M61.93 43.54h-9V22.85h7.76v-1.77h-7.76V1.81h8.47V0H50.68v45.4h11.25v-1.85Zm-19.27-6.27L35.38.88V0h-2.25v45.4h2.25V11.29l6.84 34.1h2.69V0h-2.25v37.28Zm-13.99 6.27h-9V22.85h7.76v-1.77h-7.76V1.81h8.47V0H17.42v45.4h11.25v-1.85Zm-13.4.09H9.4c-2.97 0-4.9-1.46-5.78-4.37-.82-2.65-1.23-8.18-1.23-16.59S2.8 8.86 3.62 6.22c.91-2.91 2.84-4.37 5.78-4.37h5.74L15.1.04H9.41c-3.98 0-6.57 1.59-7.78 4.77C.54 7.66 0 13.62 0 22.68s.54 15.15 1.63 18c.65 1.74 1.6 2.97 2.87 3.71 1.18.71 2.81 1.06 4.9 1.06h5.65l.22-1.81Z"
        style={{
          fill: "#7b868c",
        }}
      />
    </g>
  </svg>
)

export default SvgScene
