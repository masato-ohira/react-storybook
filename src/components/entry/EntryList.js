import axios from 'axios'
import React, { useState, useEffect } from 'react'
import _ from 'lodash'

const EntryList = () => {
  // state
  const [list, setList] = useState([])

  // mounted
  useEffect(() => {
    const getData = async () => {
      let { data } = await axios.get('https://api.noidea.xyz/fake/nicknames.json')
      let newList = []
      _.times(20, n => {
        let names = [_.sample(data).name, _.sample(data).name]
        newList.push({
          id: n+1,
          name: names.join(_.sample(['な','の','に']))
        })
      })
      setList(newList)
    }
    getData()
  }, [])

  // template
  return (
    <>
      <table className="table is-fullwidth">
        <tbody>
          {list.map( i => {
            return <tr key={i.id}>
              <th>{i.id}</th>
              <td>{i.name}</td>
            </tr>
          })}
        </tbody>
      </table>
    </>
  )
}

export default EntryList
