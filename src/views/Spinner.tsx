import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import styles from './Home/styles'
import { LinearGradient } from 'expo'

const Spinner = () => {
  return (
    <LinearGradient colors={['#F2F2F2', '#3061D9']} style={styles.loader}>
      <ActivityIndicator size="large" color="#fff" />
    </LinearGradient>
  )
}

export default Spinner
