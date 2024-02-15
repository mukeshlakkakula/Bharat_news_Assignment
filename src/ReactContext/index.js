import React from 'react'

const ReactContext = React.createContext({
  lightTheme: true,
  changeTheme: () => {},
})

export default ReactContext
