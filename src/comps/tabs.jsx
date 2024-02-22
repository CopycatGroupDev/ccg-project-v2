/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { archi } from '../archi'
import { For } from '../functions'

export const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  return <div className="w-full flex flex-col gap-6 items-center text-base md:text-xl text-gray-400 max-w-[1340px] text-center px-12">
          <div className="bg-[#F2F2F2] w-full p-2 gap-2 flex max-md:flex-col md:max-lg:grid md:max-lg:grid-cols-2 md:max-lg:grid-rows-2">
              <For obj={tabs} render={(value, i) => {
                return <button key={i} className="w-full flex rounded-lg p-2 items-center" style={{ color: archi.find(arc => '/' + value === arc.path).element.props.header.color, background: i === activeTab && 'white' }} onClick={() => setActiveTab(i)}>
                      <img src={value.replace(value[0], value[0].toUpperCase()) + '.svg'} className="h-[50px] aspect-square w-fit rounded-full" />
                      <div className="w-full">{archi.find(arc => '/' + value === arc.path).title}</div>
                  </button>
              }} />
          </div>
          <For obj={tabs} render={(value, i) => {
            return (i === activeTab && <div key={i} className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8">
                  <div className="aspect-[625/418] bg-black"></div>
                  <div className="flex flex-col justify-center gap-4">
                      <button className="w-full flex rounded-lg p-2 items-center gap-4" style={{ color: archi.find(arc => '/' + value === arc.path).element.props.header.color }} onClick={() => setActiveTab(i)}>
                          <img src={value.replace(value[0], value[0].toUpperCase()) + '.svg'} className="h-[50px] aspect-square w-fit rounded-full" />
                          <div className="">{archi.find(arc => '/' + value === arc.path).title}</div>
                      </button>
                      <p className="text-left">Nous mettons à votre disposition notre savoir et notre regard expert pour vous aider à voir plus loin qu'une marque de renom. En effet. nous vous aidons à trouver les services qui répondent le plus à vos attentes. Pour cela. nous nous appuyons sur nos partenaires méticuleusement sélectionnés.</p>
                      <div className="flex flex-wrap text-sm gap-2 uppercase">
                          <For obj={archi.find(arc => '/' + value === arc.path).dropdown} render={(tag, i) => <span key={i} className="px-16 py-2 border rounded-full" style={{ color: archi.find(arc => '/' + value === arc.path).element.props.header.color, borderColor: archi.find(arc => '/' + value === arc.path).element.props.header.color }}>{tag.title}</span>} />
                      </div>
                  </div>
              </div>)
          }} />
      </div>
}