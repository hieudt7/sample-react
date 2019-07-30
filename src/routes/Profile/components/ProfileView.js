import React from 'react'
class ProfileView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: null,
      searchKey: '',
      userProfile: null,
    }
  }
  //do something when app init
  componentDidMount() {
    //  this.props.getUserProfile('alixeb11')
  }
  //detech when prop change
  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.userProfile != null && !nextProps.profile.loading) {
      this.setState({
        userProfile: nextProps.profile.userProfile,
      })
    }

  }
  handelKeyDown(e) {
    if (e.key === 'Enter') {
      this.props.getUserProfile(this.state.searchKey)
      return
    }
  }
  handleChange(value) {
    this.setState({
      searchKey: value
    })
  }
  render() {
    const { userProfile } = this.state
    let { profile } = this.props
    return (
      <React.Fragment>
        <div className="profile">
          <div className="search-input">
            <i className="fa fa-search"></i>
            <input type="text" className="form-control" placeholder="Search user"
              onKeyDown={e => this.handelKeyDown(e)}
              onChange={e => this.handleChange(e.target.value)}
            />
          </div>
          {
            userProfile &&
            <div className="user-info">
              <img src={userProfile.avatar_url} alt="" />
              <h3 className="name">{userProfile.name}</h3>
              <hr />
              {
                userProfile.location &&
                <p>
                  <i className="fa fa-map-marker"></i><span>{userProfile.location}</span>
                </p>
              }
              {
                userProfile.email &&
                <p>
                  <i className="fa fa-envelope"></i><a href={'mailto:' + userProfile.email} target="_top">{userProfile.email}</a>
                </p>
              }
              {
                userProfile.url &&
                <p>
                  <i className="fa fa-link"></i><a target="_blank" href={userProfile.url}>{userProfile.url}</a>
                </p>
              }
              <hr />
            </div>
          }
        </div>
      </React.Fragment>
    )
  }
}

export default ProfileView
