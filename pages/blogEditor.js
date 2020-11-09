import React from 'react';
import BasePage from '../components/BasePage'
import BaseLayout from "../components/layouts/BaseLayout";
import withAuth from '../components/hoc/withAuth';
import SlateEditor from "../components/slate-editor/Editor";

class BlogEditor extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="blog-editor-page" title="Write Your Story!">
          <SlateEditor />
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth('siteOwner')(BlogEditor);