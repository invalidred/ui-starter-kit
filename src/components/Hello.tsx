import * as React from 'react'

export interface IHelloProps {
  compiler: string
  framework: string
}

export const Hello = (props: IHelloProps) => (
  <h1>
    Hello {props.compiler} and {props.framework}!
  </h1>
)
