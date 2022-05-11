import React from 'react'
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText} from './ErrorBoundaryStyles'

class ErrorBoundary extends React.Component {
  constructor() {
      super()

      this.state = {
          hasErrored: false
      }
  }
  static getDerivedStateFromError(error) {
      // process the error
      return { hasErrored: true}
  }

  componentDidCatch(error, info) {
    console.log(error)
  } // this lifecycle methods allow us to get the actual error and the info related to the error
  // info might be which component actually throw the error

  render() {
      if(this.state.hasErrored) {
          return (
              <ErrorImageOverlay>
                  <ErrorImageContainer imageUrl='./23.svg' />
                  <ErrorImageText>Sorry this page is broken</ErrorImageText>
              </ErrorImageOverlay>
          )
      }

      return this.props.children
  }
}

export default ErrorBoundary