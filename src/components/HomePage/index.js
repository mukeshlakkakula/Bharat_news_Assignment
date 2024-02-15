import {Component} from 'react'

// import Header from '../Header'
import './index.css'

import HomeData from './index.json'

import ReactContext from '../../ReactContext'

class HomePage extends Component {
  state = {homeList: HomeData}

  render() {
    const {homeList} = this.state

    const homeDisplay = homeList.articles.map(each => (
      <div key={each.title} className="HomeImages">
        <img src={each.urlToImage} alt="article" className="newsImages" />
        <div>
          <h1>Author:{each.author}</h1>
          <p>About: {each.description}</p>
          <p>Published at: {each.publishedAt}</p>
        </div>
      </div>
    ))

    return (
      <ReactContext.Consumer>
        {value => {
          const {lightTheme} = value

          return (
            <div
              className={
                lightTheme ? 'homePageContainer' : 'homePageContainer darkMode'
              }
            >
              {homeDisplay}
            </div>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default HomePage
