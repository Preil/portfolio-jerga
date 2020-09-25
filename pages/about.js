import React from 'react';

class About extends React.Component {
  render() {
    return (
      <>
        <h1 className="customClass">I am About</h1>
        {/*to make style global add "global" after jsx*/}
        <style jsx >
          {`
            .customClass {
              color: red;
            }

          `}
        </style>
      </>
    )
  }
}

export default About;