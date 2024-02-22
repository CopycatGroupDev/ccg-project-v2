/* eslint-disable react/prop-types */
import React from 'react'
import { Container, Title } from '../comps'
import { For } from '../functions'
import { motion } from 'framer-motion'

export const SolutionsList = ({ solutions }) => {
  return <Container>
          <For obj={solutions} render={({ title, content, img }, key) => {
            return <div key={key} className='grid max-lg:grid-cols-1 grid-cols-2 items-center gap-8'>{key % 2
              ? <>
                      <img src={img} alt="" className='w-full' />
                      <motion.div className='w-full h-full flex flex-col gap-4' initial={{ opacity: 0, x: 200 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 100, x: 0 }} viewport={{ once: true }}>
                          <Title color='#08A03A' modifier="text-2xl">{title}</Title>
                          <div className='bg-white border-l-4 border-[#08A03A] p-4 h-full'>{content}</div>
                      </motion.div>
                  </>
              : <>
                      <motion.div className='w-full h-full flex flex-col gap-4' initial={{ opacity: 0, x: -200 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 100, x: 0 }} viewport={{ once: true }}>
                          <Title color='#08A03A' modifier="text-2xl">{title}</Title>
                          <div className='bg-white border-l-4 border-[#08A03A] p-4 h-full'>{content}</div>
                      </motion.div>
                      <img src={img} alt="" className='w-full' />
                  </>}</div>
          }} />
      </Container>
}
