import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const EachPalette = ({_id, paletteName, email_fk, palette}) => {
  const handleDelete = () => {
    fetch(`/palette/delete/${paletteName}`, {
      method: 'DELETE'
    })
    // .then(window.location.reload(false))
  }

  const setOfPalettes = palette.map((ele, i) => (
    <div key={i} className="colorBox" style={{'backgroundColor': `${ele}`}}>
      {ele}
    </div>
  ))

  return (
    <div className="eachPalette">
      <div className="titleAndTrash">
        <h4 className="paletteNames">{paletteName}</h4>
        <div id="spaceFiller"></div>
        <div className="trash">
          <span onClick={handleDelete}>
            <FontAwesomeIcon className="faTrash" icon={faTrash} size="2x" />
          </span>
        </div>
      </div>
      <div className="colorBoxes">
        {setOfPalettes}
      </div>
    </div>
  )
};


export default EachPalette;
