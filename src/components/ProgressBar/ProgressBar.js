import React from "react"
import "./ProgressBar.scss"

const ProgressBar = props => {
  const { dataPercent, strokeColor } = props
  const strokeDash = dataPercent.match(/(\d+)/)
  const strokeDashoffset = (strokeDash[0] * 630) / 100
  return (
    <div className="progress" data-percent={dataPercent}>
      <svg viewBox="-10 -10 220 220">
        <g fill="none" transform="translate(100,100)" strokeWidth="5">
          <path d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke={strokeColor} />
          <path d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke={strokeColor} />
          <path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke={strokeColor} />
          <path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke={strokeColor} />
          <path d="M -86.6,50 A 100,100 0 0,1 -86.6,-50" stroke={strokeColor} />
          <path d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke={strokeColor} />
        </g>
      </svg>
      <svg viewBox="-10 -10 220 220">
        <path
          d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"
          strokeDashoffset={strokeDashoffset}
        ></path>
      </svg>
    </div>
  )
}

export default ProgressBar
