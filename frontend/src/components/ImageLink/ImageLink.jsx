import React from 'react'
import { Link } from './styles'

const ImageLink = ( { imageUrl, width, height, href, ...rest } ) => (
  <Link background={ imageUrl } width={ width } height={ height } href={ href } target='_blank' { ...rest } />
)

export default ImageLink
