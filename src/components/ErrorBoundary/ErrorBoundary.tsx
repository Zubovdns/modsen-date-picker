/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component } from 'react';

import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(_: Error): ErrorBoundaryState {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		console.error('Ошибка поймана ErrorBoundary:', error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong...</h1>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
