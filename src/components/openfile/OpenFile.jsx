import React, { useState } from 'react'
import './openFile.css'
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const OpenFile = () => {
    const [img, setImg] = useState(null);

    const dragHandler = (e) => {
        e.preventDefault();
        if(e.dataTransfer.files[0]){
            console.log(e.dataTransfer.files[0]);
            const reader = new FileReader();
            reader.readAsDataURL(e.dataTransfer.files[0]);
            reader.onload = () => {
                setImg(reader.result);
            }
        }
    }


  return (
    <div className='dragDropArea'>
      <label className="dragDropWrapper" for='DragDrop' onDragOver={(e) => dragHandler(e)} onDrop={(e) => dragHandler(e)}>
      <img src={PF+'add.svg'} alt='input icon' />
      <span>Drag & Drop to Upload File</span>
      </label>
      <input type='file' id='DragDrop'/>
    </div>
  );
}

export default OpenFile;