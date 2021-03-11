import React, { Component } from "react";

export interface WithWindowWidthProps {
  width?: number;
}

interface State {
  width: number;
}

const withWindowWidth = <T extends unknown>(
  WrappedComponent: React.ComponentType<T>
) =>
  class extends Component<T, State> {
    state = {
      width: 0,
    };

    componentDidMount() {
      window.addEventListener("resize", this.handleResize);
      this.setState({ width: window.innerWidth });
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }

    handleResize = () => {
      this.setState({
        width: window.innerWidth,
      });
    };

    render() {
      const { width } = this.state;
      return <WrappedComponent {...(this.props as T)} width={width} />;
    }
  };

export default withWindowWidth;
