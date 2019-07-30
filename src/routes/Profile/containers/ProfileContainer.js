import { connect } from 'react-redux'
import ProfileView from '../components/ProfileView'

import {
  getUserProfile,
} from '../modules/actions'

const mapDispatchToProps = {
  getUserProfile,
}

const mapStateToProps = (state) => ({
  profile: state.profile
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView)
