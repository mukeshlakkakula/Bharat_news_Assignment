import ReactContext from '../../ReactContext'

import './index.css'

const Settings = () => (
  <ReactContext.Consumer>
    {value => {
      const {lightTheme} = value

      return (
        <div
          className={
            lightTheme ? 'settingsContainer' : 'settingsContainer darkMode'
          }
        >
          <h1>As per Assignment, no settings are available now</h1>
          <p>explore the profile section</p>
        </div>
      )
    }}
  </ReactContext.Consumer>
)

export default Settings
