import React from 'react';
function Alert(props) {
    if (props.empty) {
        return (
          <div style={{ textAlign: 'center', color:'red' }}>
            oops, looks like you haven't typed anything
          </div>
        );
    }
    return (
        <div>

        </div>
    )
}

export default Alert;
