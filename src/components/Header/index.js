import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'

import {MdSettings} from 'react-icons/md'

import ReactContext from '../../ReactContext/index'

import './index.css'

class Header extends Component {
  state = {activeRoute: 'home'}

  onActiveChange = event => {
    this.setState({activeRoute: event.target.value})
  }

  render() {
    const {activeRoute} = this.state

    return (
      <ReactContext.Consumer>
        {value => {
          const {lightTheme, changeTheme} = value
          const onChangeTheme = () => {
            changeTheme()
          }

          return (
            <div
              className={
                lightTheme
                  ? 'fullHeaderContainer'
                  : 'fullHeaderContainer backgroundBlack'
              }
            >
              <div className="leftHeaderContainer">
                <Link to="/">
                  <img
                    value="home"
                    onClick={this.onActiveChange}
                    className="newsLogo"
                    src="https://1.bp.blogspot.com/-Qw_x1hfxSIM/YRGEwDlCQUI/AAAAAAAAAz8/NfmgXkZyCjk6utCAr2iAnf_vcxisLh05wCLcBGAsYHQ/s244/IMG_20210810_010848.jpg"
                    alt="website logo"
                  />
                </Link>
                <Link to="/" className={lightTheme ? 'darkText' : 'lightText'}>
                  <button
                    onClick={this.onActiveChange}
                    value="home"
                    type="button"
                    className={
                      activeRoute === 'home'
                        ? 'activeRouteStyle'
                        : 'notActiveRouteStyle'
                    }
                  >
                    Home
                  </button>
                </Link>
                <Link
                  to="/profile"
                  className={lightTheme ? 'darkText' : 'lightText'}
                >
                  <button
                    onClick={this.onActiveChange}
                    value="profile"
                    type="button"
                    className={
                      activeRoute === 'profile'
                        ? 'activeRouteStyle'
                        : 'notActiveRouteStyle'
                    }
                  >
                    Profile
                  </button>
                </Link>
              </div>
              <div>
                <button
                  type="button"
                  className="themeBtn"
                  onClick={onChangeTheme}
                  light={lightTheme}
                >
                  <img
                    profile="true"
                    className="themeLogo"
                    src={
                      lightTheme
                        ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                    }
                    alt="website logo"
                  />
                </button>
              </div>
              <Link to="/settings">
                <button
                  type="button"
                  value="settings"
                  onClick={this.onActiveChange}
                  className={
                    lightTheme ? 'settingsIconLight' : 'settingsIconDark'
                  }
                >
                  <MdSettings
                    className={
                      lightTheme ? 'settingsIconLight' : 'settingsIconDark'
                    }
                  />
                </button>
              </Link>
            </div>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default withRouter(Header)
