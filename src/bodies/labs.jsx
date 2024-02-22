/* eslint-disable react/prop-types */
import { timelines } from '../arrays'
import { Timeline } from '../comps'
import React from 'react'

const Labs = ({ color, modal }) => {
  return (<>
      <Timeline color={color} list={timelines.Labs} modal={modal} />
    </>)
}

export default Labs
