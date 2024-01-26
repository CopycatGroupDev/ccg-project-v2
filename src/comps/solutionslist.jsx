/* eslint-disable react/prop-types */
import React from 'react'
import { Container, Title } from '../comps'
import { For } from '../functions'

export const SolutionsList = ({ solutions }) => {
  return <Container>
          <For obj={solutions} render={({ title, content, img }, key) => {
            return <div key={key} className='grid max-lg:grid-cols-1 grid-cols-2 items-center gap-8'>{key % 2
              ? <>
                      <img src={img} alt="" className='w-full' />
                      <div className='w-full h-full flex flex-col gap-4'>
                          <Title color='#08A03A' modifier="text-2xl">{title}</Title>
                          <div className='bg-white border-l-4 border-[#08A03A] p-4 h-full'>{content}</div>
                      </div>
                  </>
              : <>
                      <div className='w-full h-full flex flex-col gap-4'>
                          <Title color='#08A03A' modifier="text-2xl">{title}</Title>
                          <div className='bg-white border-l-4 border-[#08A03A] p-4 h-full'>{content}</div>
                      </div>
                      <img src={img} alt="" className='w-full' />
                  </>}</div>
          }} />
      </Container>
}
