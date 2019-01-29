import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { FaPlay, FaPause } from 'react-icons/fa'

class ToggleVideo extends Component {

  constructor() {

    super()

    this.toggleVideo = this.toggleVideo.bind(this)
  }

  toggleVideo(e) {
    
    if (this.props.videoref.current.currentTime > 0 && !this.props.videoref.current.paused && !this.props.videoref.current.ended && this.props.videoref.current.readyState > 2) {

      this.props.videoref.current.pause()

    } else {

      this.props.videoref.current.play()
    }
  }


  render() {

    return (

      !this.props.seeking ?

        <div className='video-play-button-container'>

          {this.props.loading ?

            <h1 style={{color: 'white'}}>Loading</h1>
            :
            <div className={this.props.hide ? 'video-hide' : 'video-play-button'} onClick={this.toggleVideo}>
              
              {!this.props.playing ? <FaPlay /> : <FaPause />}

            </div>
          }

        </div>
        :
        null

    )
  }
}

export default hot(module)(ToggleVideo)