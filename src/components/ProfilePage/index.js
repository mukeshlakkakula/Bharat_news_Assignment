import {Component} from 'react'

import ReactContext from '../../ReactContext'
import Data from './index.json'

import './index.css'

class ProfilePage extends Component {
  state = {data: Data, showList: [], activeBtn: 'posted'}

  componentDidMount() {
    this.onPosted()
  }

  onPosted = () => {
    const {data} = this.state
    const filterPosted = data.articles.filter(
      each => each.author === 'John Smith',
    )
    this.setState({showList: filterPosted, activeBtn: 'posted'})
  }

  onLiked = () => {
    const {data} = this.state
    const likedPosted = data.articles.filter(each => each.liked === 'true')
    this.setState({showList: likedPosted, activeBtn: 'liked'})
  }

  onSaved = () => {
    const {data} = this.state
    const savedPosted = data.articles.filter(each => each.saved === 'true')
    this.setState({showList: savedPosted, activeBtn: 'saved'})
  }

  render() {
    const {showList, activeBtn} = this.state

    const mapper = showList.map(each => (
      <div key={each.title} className="mapperContainer">
        <img src={each.urlToImage} alt="article" className="profileImages" />
        <div>
          <h1>
            <span style={{fontWeight: 'bold', color: 'red'}}>Author: </span>
            {each.author}
          </h1>
          <p>
            {' '}
            <span style={{fontWeight: 'bold'}}>About: </span> {each.description}
          </p>
          <p>
            {' '}
            <span style={{fontWeight: 'bold'}}>Published at: </span>{' '}
            {each.publishedAt}
          </p>
        </div>
      </div>
    ))

    const profileImage = (
      <img
        className="profileImgStyle"
        src="https://i.pinimg.com/564x/ac/0a/d9/ac0ad9cd641fc537d74022758d771c1f.jpg"
        alt="profile"
      />
    )

    return (
      <ReactContext.Consumer>
        {value => {
          const {lightTheme} = value

          return (
            <div
              className={
                lightTheme
                  ? 'profilePageContainer'
                  : 'profilePageContainer darkMode'
              }
            >
              <div className="profileAndDetailsContainer">
                <div className="profileImageContainer">{profileImage}</div>
                <div className="profileFullDetailsContainer">
                  <h1>John Smith</h1>
                  <h4> 35 years old</h4>
                  <p>Bachelors degree in Journalism from KL University</p>
                  <p>
                    <span style={{fontWeight: 'bold', color: 'blue'}}>
                      Work Experience:{' '}
                    </span>
                    I have been working as a journalist for 10 years. I started
                    my career as a reporter for a local newspaper, where I
                    covered a variety of beats including local politics,
                    education, and community events. After gaining experience, I
                    transitioned to a larger regional newspaper where I
                    specialized in investigative journalism, uncovering
                    corruption and injustice in the local government.
                  </p>
                  <p>
                    <span style={{fontWeight: 'bold', color: 'blue'}}>
                      Awards and Recognitions:{' '}
                    </span>
                    <span style={{fontWeight: 'bold'}}>
                      Excellence in Journalism{' '}
                    </span>
                    award from the Press Association and the{' '}
                    <span style={{fontWeight: 'bold'}}>
                      Investigative Reporting Award{' '}
                    </span>
                    from the Society of Professional Journalists.
                  </p>
                </div>
              </div>
              <div className="postedAndLikedButtons">
                <button
                  type="button"
                  className={
                    activeBtn === 'posted'
                      ? 'buttonStyles onActive'
                      : 'buttonStyles'
                  }
                  onClick={this.onPosted}
                >
                  Posted
                </button>
                <button
                  type="button"
                  className={
                    activeBtn === 'liked'
                      ? 'buttonStyles onActive'
                      : 'buttonStyles'
                  }
                  onClick={this.onLiked}
                >
                  Liked
                </button>
                <button
                  type="button"
                  className={
                    activeBtn === 'saved'
                      ? 'buttonStyles onActive'
                      : 'buttonStyles'
                  }
                  onClick={this.onSaved}
                >
                  Saved
                </button>
              </div>
              <div className="likedAndPostedContainer">{mapper}</div>
            </div>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default ProfilePage
