import React from 'react'
import Img from 'gatsby-image'

import styles from './about.module.css'

export default ({ data }) => (
  <div className={styles.aboutContainer} id="about">
    <div className={styles.aboutInnerContainer}>
      <Img className={styles.aboutImage} alt="An image of Nicole" fluid={data.image.fluid} />
      <h1 className={styles.aboutHeadline}>{data.headline}</h1>
      <h2 className={styles.aboutSubHeadline}>{data.subHeadline}</h2>
      <p className={styles.aboutText}>{data.description.description}</p>
    </div>
  </div>
)
