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
const CodeNode = (props) =>{
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
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

  onKeyDown = (event, editor, next)=>{
    if(event.key !== 'x' || !event.ctrlKey) return next()

    //Prevent the ampersand character from being inserted.
    event.preventDefault();

    // Determine whether any of current selected blocks are code blocks
    const isCode = editor.value.blocks.some(block => block.type == 'code')

    // Toggle the block type depending on 'isCode'
    editor.setBlocks(isCode ? 'paragraph' : 'code')
    return true;
  }

  renderNode = (props, editor, next) =>{
    switch(props.node.type) {
      case 'code':
        return <CodeNode {...props} />
      case 'paragraph':
        return <p{...props.attributes}>{props.children}</p>
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
          />
        }
      </>
    );
  }
}