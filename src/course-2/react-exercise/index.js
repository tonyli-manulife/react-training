import React from 'react'
import ReactForm from '../react-form'
import styles from './index.module.css'

const List = (props) => {
  const {keys, data } = props
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {keys.map(key => <th key={key}>{key.toUpperCase()}</th>)}
        </tr>
      </thead>
      <tbody>
        {
          data.map(item => <tr key={item.name}>
              {
                keys.map(key => <td key={key}>
                    {item[key]}
                  </td>
                )
              }
            </tr>
          )
        }
      </tbody>
    </table>
  )
}


export default class ReactExercise extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          'name': 'Ana',
          'age': '20',
        }
      ]
    }
  }

  render() {

    return (
      <div>
        <List keys={['name', 'age']} data={this.state.data} />
        <ReactForm onChange={(data) => {
          const newData = this.state.data.concat(data)
          this.setState({
            data: newData,
          })
        }} />
      </div>
    )
  }

}