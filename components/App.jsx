import d from '@dominant/core';

document.head.append(d.el('style', `
  #editor {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`));

class App {
  render = () => (
    <div class="App" model={this} onAttach={this.onAttach}>
      {this.editor = (<div id="editor" />)}
    </div>
  );

  onAttach = () => {
    this.editor.ace = ace.edit(this.editor);
    this.ace.setTheme('ace/theme/monokai');
    this.ace.session.setMode('ace/mode/javascript');
  };

  get ace() { return this.editor?.ace }
}

export default App;