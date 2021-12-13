import React from 'react'

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const OpenFile = () => {
  return (
    <div style="height:0;width:20%;padding-bottom:20%;background-color:white">
<div>
<img src = {PF + 'add.svg'} alt = "add" />
</div>
</div>
  )
}

export default OpenFile