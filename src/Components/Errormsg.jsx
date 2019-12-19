import React from 'react';

const Errormsg = (err) => {
  return (
    <div className="error-msg">
      <h6>
        {err.msg}
      </h6>
    </div>
  );
};

export default Errormsg;