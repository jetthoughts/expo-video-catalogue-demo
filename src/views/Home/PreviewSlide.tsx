import React, { SFC } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

interface PreviewProps {
  preview: Preview
}

interface Preview {
  previewImage: string
  name: string
  id: string
  duration: string
}

const PreviewSlide: SFC<PreviewProps> = ({ preview }) => {
  const { previewImage, name, id, duration } = preview
  return (
    <View style={styles.slideHolder}>
      <TouchableOpacity onPress={() => true}>
        <Image style={styles.slideImage} source={{ uri: previewImage }} />
      </TouchableOpacity>
      <Text style={styles.videoDuration}>{duration}</Text>
      <Text numberOfLines={2} style={styles.slideText}>
        {name}
      </Text>
    </View>
  )
}

export default PreviewSlide
