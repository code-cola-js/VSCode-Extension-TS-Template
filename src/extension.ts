import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('hello-world-code-cola-js');

	let disposable = vscode.commands.registerCommand('hello-world-code-cola-js.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World codeCola.js!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
