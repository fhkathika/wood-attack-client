import React from 'react';

const reactList=()=> {
    function getData(e){
      console.log(e.target.value)  

    }
  return (<div>
      <input type="text"  onBlur={getData}/>
  </div>)
}
export default reactList
