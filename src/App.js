import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#fff'
}

let fakeServerData = {
  user: {
    name: 'Ryan',
    playlists: [
      {
        name: 'My favorites',
        songs: [{ name: "Beat It", duration: 258 }, { name: "Moanin'", duration: 570 }, { name: "I've Just Seen A Face", duration: 125 }]
      },
      {
        name: 'Cool',
        songs: [{ name: "Beat It", duration: 258 }, { name: "Moanin'", duration: 570 }, { name: "I've Just Seen A Face", duration: 125 }]
      },
      {
        name: 'Totally Original',
        songs: [{ name: "Beat It", duration: 258 }, { name: "Moanin'", duration: 570 }, { name: "I've Just Seen A Face", duration: 125 }]
      },
      {
        name: 'Not a copy',
        songs: [{ name: "Beat It", duration: 258 }, { name: "Moanin'", duration: 570 }, { name: "I've Just Seen A Face", duration: 125 }]
      },
    ]
  }
}

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: '40%', display: 'inline-block' }} className='aggregate'>
        <h2>{this.props.playlists.length} playlists</h2>
      </div>
    )
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => (
      songs.concat(eachPlaylist.songs)
    ), [])
    let totalDuration = allSongs.reduce((sum, eachSong) => (
      sum + eachSong.duration
    ), 0)
    return (
      <div style={{ ...defaultStyle, width: '40%', display: 'inline-block' }} className='aggregate'>
        <h2>{Math.round(totalDuration / 60)} hours</h2>
      </div>
    )
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={{ defaultStyle }}>
        <img src="" alt="" />
        <input type="text" />
      </div>
    )
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, display: 'inline-block', width: '25%' }}>
        <img src="" alt="" />
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = { serverData: {} }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ serverData: fakeServerData })
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1 style={{ ...defaultStyle, 'font-size': '54px' }}>
              {this.state.serverData.user.name}'s Playlists</h1>}
            <PlaylistCounter playlists={this.state.serverData.user.playlists} />
            <HoursCounter playlists={this.state.serverData.user.playlists} />
            <Filter />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
          </div> : <h1 style={defaultStyle}>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
