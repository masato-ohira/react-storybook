import React from 'react'

import EntryList from './EntryList'
import ReactExample from '@c/example/ReactExample'

export const entryList = () => {
  return (
    <ReactExample path="src/components/entry/EntryList.js">
      <EntryList/>
    </ReactExample>
  )
}


export default { title: 'Components/Entry' }