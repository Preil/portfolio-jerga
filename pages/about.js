import React from 'react';
import BasePage from '../components/BasePage'

class About extends React.Component {
  render() {
    return (
      <BasePage className="about-page">
        <h1 className="customClass">I am About</h1>
        {/*to make style global add "global" after jsx*/}
        <style jsx >
          {`
            .customClass {
              color: red;
            }

          `}
        </style>
      </BasePage>
    )
  }
}

export default About;