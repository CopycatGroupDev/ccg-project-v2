import { contactForm } from '../arrays'
import { Container } from '../comps'
import React from 'react'
import { sendMessage } from '../functions'
import { useSearchParams } from 'react-router-dom'
import { headerProps } from '../archi'

const Contact = ({ alertSetter, alert }) => {
  const [searchParams] = useSearchParams()
  const subjectDefaultValue = searchParams.get('subject')
  const defaultValues = {
    rse: 'Demande du formulaire RSE'
  }

  return (<>
        <Container>
            <div className="grid grid-cols-2 [&_label]:grid [&_label>input]:w-full  gap-4 w-full text-start" style={{ textWrap: 'nowrap' }}>
                <form className="contents" onSubmit={sendMessage(({ message }) => { alertSetter([...alert, { text: message, color: 'limegreen' }]) })}>
                    {contactForm.Contact.map(({ className, Input }, id) => {
                        const { placeholder, name } = Input().props

                        const props = { required: true, className: 'border-gray-300' }
                        if (name === 'object' && subjectDefaultValue) props.defaultValue = defaultValues[subjectDefaultValue]

                        return (<label className={className} key={id}>
                            {placeholder}
                            {Input(props)}
                        </label>)
                    })}
                    <label className="col-span-2">
                        <button type="submit" className='p-4 bg-[#0061ad] rounded-full text-white mt-2 mx-auto min-w-[50%]'>Envoyer</button>
                    </label>
                </form>
            </div>
        </Container>
    </>)
}

export default Contact
