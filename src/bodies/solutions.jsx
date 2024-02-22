import { solutionsList, timelines } from '../arrays'
import { SolutionsList, Title, Timeline } from '../comps'
import React from 'react'

const Solutions = ({ color, modal }) => {
  return (<>
        <Timeline color={color} list={timelines.Solutions} modal={modal}/>
        <Title>Accompagnement sur nos solutions</Title>
        <SolutionsList solutions={solutionsList} />
    </>)
}

export default Solutions
