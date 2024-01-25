import { contactForm } from '../arrays'
import { Container } from '../comps'
import React from 'react'

const Contact = ({}) => {
  return (<>
        <Container>
            <div className="grid grid-cols-2 [&_label]:grid [&_label>input]:w-full  gap-4 w-full text-start" style={{ textWrap: 'nowrap' }}>
                <form className="contents">
                    {contactForm.Contact.map(([modifier, placeholder, Input, name], id) => (
                        <label className={modifier} key={id}>
                            {placeholder} {Input({ placeholder, name: placeholder.toLowerCase().replace(' ', ''), className: 'border-gray-300' })}
                        </label>
                    ))}
                    <label className="col-span-2">
                    <button className='p-4 bg-[#0061ad] rounded-full text-white mt-2 mx-auto min-w-[50%]'>Envoyer</button>
                    </label>
                </form>
            </div>
        </Container>
    </>)
}

export default Contact
