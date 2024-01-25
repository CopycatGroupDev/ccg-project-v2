import { solutionsList, timelines } from '../arrays'
import { SolutionsList, Title, Timeline } from '../comps'
import React from 'react'

const Solutions = ({ color }) => {
  return (<>
        <Timeline color={color} list={timelines.Solutions} />
        <Title>Accompagnement sur nos solutions</Title>
        <SolutionsList solutions={solutionsList} />
    </>)
}

export default Solutions
