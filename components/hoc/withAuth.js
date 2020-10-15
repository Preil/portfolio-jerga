import React from 'react'

export default function (Component) {
  return class withAuth extends React.Component {


    alertMessage(){
      alert('Some message!')
    }

    render() {
      const someVar1 = '1';
      const someVar2 = '2';

      return <Component
        someVar1={someVar1}
        someVar2={someVar2}
        alertMessage={this.alertMessage()}
        {...this.props}/>
    }
  }
}