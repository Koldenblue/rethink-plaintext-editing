import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { listFiles } from '../../files';

import css from './style.css';

function PlaintextEditor({ file, write }) {
  const [innerText, setInnerText] = useState('');
  const [textArea, setTextArea] = useState(<></>);
  const [textToSave, setTextToSave] = useState('');
  const textRef = useRef(null)
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
    setTextToSave(event.target.value);
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
        ref={textRef}
      >
      </textarea>

)
if (textRef.current) {
  textRef.current.value=innerText
}
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
          ref={textRef}
        >
        </textarea>
      )
    } else {
      alert('No saved changes yet! ')
    }
    if (textRef.current) {
      textRef.current.value=innerText
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
