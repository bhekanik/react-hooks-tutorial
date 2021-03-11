import { Component } from "react";

interface Props {
  render(): JSX.Element;
  title: string;
}

class DocumentTitle extends Component<Props> {
  componentDidMount() {
    document.title = this.props.title;
  }

  componentDidUpdate() {
    document.title = this.props.title;
  }

  render() {
    const { render } = this.props;
    return render();
  }
}

export default DocumentTitle;
