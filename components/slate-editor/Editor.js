import React from 'react';
import {Editor} from 'slate-react';
import {Value} from 'slate';

//Create initial value...

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph'
              }
            ]
          }
        ]
      }
    ]

  }
})

export default class SlateEditor extends React.Component {
  state = {
    value: initialValue,
    isLoaded: false
  }

  componentDidMount() {
    this.setState({
      isLoaded: true
    })
  }

  onChange = ({value}) => {
    this.setState({value})
  }

  onKeyDown = (event, editor, next)=>{
    if(event.key !== '&') return next()

    //Prevent the ampersand character from being inserted.
    event.preventDefault();

    //Change the value by inserting 'and' at the cursor's position.
    editor.insertText('and')
    return true;
  }

  render() {
    const {isLoaded} = this.state;
    return (
      <>
        {
          isLoaded &&
          <Editor value={this.state.value}
                  onChange={this.onChange}
                  onKeyDown={this.onKeyDown}
          />
        }
      </>
    );
  }
}