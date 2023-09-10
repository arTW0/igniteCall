import { styled, Heading, Text } from '@ignite-ui/react'

export const Container = styled('div', {
  marginLeft: 'auto',
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  display: 'flex',
  alignItems: 'center',
  gap: '$20',
  overflow: 'hidden',
})

export const Hero = styled('div', {
  maxWidth: 480,
  padding: '0 $10',

  [`${Heading}`]: {

  },

  [`${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
    fontSize: '$xl',
  }
})

export const Preview = styled('div', {})