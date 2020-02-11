import axios from 'axios'
import React from 'react'
import _ from 'lodash'

class EntryList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  async componentDidMount() {
    let { data } = await axios.get('https://api.noidea.xyz/fake/nicknames.json')
    let newList = []
    _.times(20, n => {
      let names = [_.sample(data).name, _.sample(data).name]
      newList.push({
        id: n+1,
        name: names.join(_.sample(['な','の','に']))
      })
    })
    this.setState({ list: newList })
  }

  render() {
    return (
      <>
        <table className="table is-fullwidth">
          <tbody>
            {this.state.list.map( i => {
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
}

export default EntryList
