import {Container} from 'reactstrap'

const BasePage = (props) => {
  const {className} = props
  const {children} = props

  // This is alternative BasePage.defaultProps
  // const className = props.className || '';
  return (
    <div className={`base-page ${className}`}>
      <Container>
        {children}
      </Container>
    </div>
  )
}

// Another way to define default className value:

BasePage.defaultProps = {
  className: ''
};

export default BasePage