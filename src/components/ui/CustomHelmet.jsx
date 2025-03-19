import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function CustomHelmet({p}) {
  return (
    <div>
        <Helmet>
            <title>{p}|GyanFlow</title>
        </Helmet>
    </div>
  )
}
