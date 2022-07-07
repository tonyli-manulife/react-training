import React from "react";

import styles from './index.module.css'
import ScssStyles from './index.module.scss'
import './index.css'

export default class ReactStyle extends React.Component {

  constructor(props) {
    console.log('ReactStyle in')
    super(props)
  }

  render() {
    const h1 = {
      color: 'red',
      fontSize: "20px",
    }
    return (
      <div>
        <h1 style={h1}>React Training</h1>
        <h1 className="h1">React Training</h1>
        <h1 className={ styles.h1 }>React Training</h1>
        <h1 className={styles.p}>React Training</h1>
        <h1 className={ScssStyles.h1}>React Training</h1>
      </div>
    )
  }
}