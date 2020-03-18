import React from 'react';

function VoteButton(props) {
  return (
    <>
      <label className={props.wrapperclass}>
        <div className="skew-background"></div>
        <input {...props} />
      </label>
    </>
  );
}

export default VoteButton;
