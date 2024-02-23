import emailjs from '@emailjs/browser'

export const For = ({ obj, render }) => {
  return obj.map((value, index) => {
    return render(value, index)
  })
}

export const sendMessage = (callback) => {
  return (e) => {
    e.preventDefault()
    // let confirmMessage = ''
    emailjs.send('service_o6semg5', 'template_fngu4h2', {
      ...Object.fromEntries(Object.entries(e.target.elements).map(([key, input]) => {
        const { name, placeholder, value } = input
        return [name, `${placeholder ?? input.attributes?.placeholder?.value} : ${value}`]
      })),
      page: window.location.href,
      to_name: 'Erwan'
    }, '8Rs9RvEbWiGOIy4pj').then(
      result => {
        callback({ result: result.text, message: 'Message envoyé' })
      },
      error => console.log(error.text)
    )
  }
}
