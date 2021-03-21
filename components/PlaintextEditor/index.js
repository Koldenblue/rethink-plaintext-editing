import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { listFiles } from '../../files';

import css from './style.css';

function PlaintextEditor({ file, write }) {
  const [innerText, setInnerText] = useState('');
  const [textArea, setTextArea] = useState(<></>);
  const [textToSave, setTextToSave] = useState('');
  console.log(file, write);

  let styles = {
    inputBox: {
      width: "30em"
    },
    btn: {
      display: "block",
      
    }
  }

  // sets the state of the inner text every time it is edited
  const edit = (event) => {
    setInnerText(event.target.value);
  }

  // whenever the file changes, change the default inner text of the input
  useEffect(() => {
    (async () => {
    setInnerText(await file.text())
    })();
  }, [file])


  // renders the text box when a new file is loaded.
  useEffect(() => {
    console.log(innerText)
    setTextArea(
      <textarea
        onChange={(event) => edit(event)}
        defaultValue={innerText}
        style={styles.inputBox}
        rows={"10"}
      >
      </textarea>
  )
  }, [innerText])


  const saveFile = (event) => {
    event.preventDefault();
    console.log('saving file');
    sessionStorage.setItem(`${file.name}`, textToSave)
  }

  const loadFile = (event) => {
    event.preventDefault();
    console.log('loading file');
    let loadedText = sessionStorage.getItem(`${file.name}`);
    console.log(loadedText)
    if (loadedText) {
      setTextArea(
        <textarea
          onChange={(event) => edit(event)}
          defaultValue={loadedText}
          style={styles.inputBox}
          rows={"10"}
        >
        </textarea>
      )
    } else {
      alert('No saved changes yet! Actually the saved changes are stored in session storage, but currently a bug is preventing from loading :(')
    }
  }

  return (
    <div className={css.editor}>
      <h3>TODO</h3>
      <i>text/plain</i>
        <form onSubmit={(event) => saveFile(event)} >
          {textArea}
          <button style={styles.btn}>Save Changes</button>
        </form>
          <button style={styles.btn} onClick={loadFile}>Load Prev Changes</button>
    </div>
  );
}

PlaintextEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default PlaintextEditor;
