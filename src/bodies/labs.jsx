/* eslint-disable react/prop-types */
import { timelines } from '../arrays'
import { Timeline } from '../comps'
import React from 'react'

const Labs = ({ color }) => {
  return (<>
      <Timeline color={color} list={timelines.Labs} />
    </>)
}

export default Labs