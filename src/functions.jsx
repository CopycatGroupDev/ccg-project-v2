import emailjs from '@emailjs/browser'
import decomposeUrl from 'decompose-url'
import { archi } from './archi'

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
        return [name, /* ${placeholder ?? input.attributes?.placeholder?.value} :  */`${value}`]
      })),
      color: archi.find(({ path }) => path === decomposeUrl(window.location.href).pathname).element.props.header.color,
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

export const hex2rgb = (hex) => {
  const rgbChar = ['r', 'g', 'b']

  const normal = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)
  if (normal) {
    return normal.slice(1).reduce((a, e, i) => {
      a[rgbChar[i]] = parseInt(e, 16)
      return a
    }, {})
  }

  const shorthand = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i)
  if (shorthand) {
    return shorthand.slice(1).reduce((a, e, i) => {
      a[rgbChar[i]] = 0x11 * parseInt(e, 16)
      return a
    }, {})
  }

  return null
}
