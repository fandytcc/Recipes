import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { LinearProgress } from 'material-ui/Progress'
import Snackbar from 'material-ui/Snackbar'


class Loading extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    loadError: PropTypes.string
  }

  render() {
    const { loading, loadError } = this.props
    if (!loading) return null
    if (!loadError) return null

    return (
      <div className="Loading" style={{width: '100%'}}>
        <LinearProgress />
      </div>
    )
  }
}

const mapStateToProps = ({ loading, loadError }) => ({
  loading: loading.length > 0,
  loadError: loadError
})

export default connect(mapStateToProps)(Loading)


// <Snackbar
//   open
//   message={this.props.loadError}
//   autoHideDuration: 5000,
//   anchorOrigin={{
//       vertical: 'top',
//       horizontal: 'left',
//   }}
// />
