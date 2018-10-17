import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Home from './views/Home'
import VideoPlayer from './views/VideoPlayer'

const AppRouter = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="Home" component={Home} initial />
      <Scene key="VideoPlayer" component={VideoPlayer} hideNavBar={true} />
    </Scene>
  </Router>
)

export default AppRouter
