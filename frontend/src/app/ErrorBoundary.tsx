/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/destructuring-assignment */
'use client';
import React, { ErrorInfo } from 'react';
import { toast } from 'react-toastify';

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<any, ErrorBoundaryState> {
  constructor(props: any) {
    super(props);
    // this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log({ error, errorInfo });
    toast.error(`An error occurred: ${error.message}`);
  }

  render() {
    // if (this.state.hasError) {
    // }

    return this.props.children;
  }
}

export default ErrorBoundary;
