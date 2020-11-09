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

// Renderer for code blocks
const CodeNode = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}

const BoldMark = (props) => {
  return(
    <strong>{props.children}</strong>
  )
}

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

  onKeyDown = (event, editor, next) => {
    if (!event.ctrlKey) return next()

    switch (event.key) {
      case 'b': {
        event.preventDefault()
        editor.toggleMark('bold')
        break;
      }
      // when 'x' is pressed toggle text to code block and backward
      case 'x': {
        // Determine whether any of current selected blocks are code blocks
        const isCode = editor.value.blocks.some(block => block.type == 'code')
        //Prevent the 'x' character from being inserted.
        event.preventDefault();
        // Toggle the block type depending on 'isCode'
        editor.setBlocks(isCode ? 'paragraph' : 'code')
        break;
      }
      default: {
        return next();
      }
    }
  }

  renderNode = (props, editor, next) => {
    switch (props.node.type) {
      case 'code':
        return <CodeNode {...props} />
      case 'paragraph':
        return <p{...props.attributes}>{props.children}</p>
      default:
        return next()
    }
  }

  renderMark = (props, editor, next) => {
    switch(props.mark.type){
      case 'bold':
        return <BoldMark {...props} />
      default:
        return next()
    }
  }


  render() {
    const {isLoaded} = this.state;
    return (
      <>
        <pre><code>This is code block rendered</code></pre>
        {
          isLoaded &&
          <Editor value={this.state.value}
                  onChange={this.onChange}
                  onKeyDown={this.onKeyDown}
                  renderNode={this.renderNode}
                  renderMark={this.renderMark}
          />
        }
      </>
    );
  }
}