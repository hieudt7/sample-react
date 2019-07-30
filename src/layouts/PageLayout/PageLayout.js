import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Header from 'components/Header/Header'
// import { getCurrentUser} from 'routes/Home/modules/actions'
class PageLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: null,
    }
  }
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillMount() {

  }

  render() {
    const { modal } = this.state
    return (
      <div id={`wrapper`}>
        <main>
          <Header />
          {this.props.children}
        </main>
      </div>
    )
  }
}
PageLayout.propTypes = {
  children: PropTypes.node,
}

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
  location: state.location,
  home: state.home
})

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout)
