import { useEffect } from 'react';
import './App.css';
import { FcFullTrash } from "react-icons/fc";
const Root = () => {

useEffect(()=>{
  document.querySelector('#add').onclick = function () {
      if (document.querySelector('#newtask input').value.length == 0) {
          alert("Please enter a Task")
      }
      else {
          document.querySelector('#tasks').innerHTML += `
  <div class="task">
      <label class="taskCheck">
          <input type="checkbox" class="taskCheckbox">
  
          <span id="taskname"> 
              ${document.querySelector('#newtask input').value}

          </span>
      </label>
      <button class="delete">
<lord-icon
    src="https://cdn.lordicon.com/hjbrplwk.json"
    trigger="hover"
    colors="primary:#ffffff,secondary:#a866ee,tertiary:#ffffff,quaternary:#3a3347"
    style="width:55px;height:55px">
</lord-icon>  
</button>
  </div>
  `;
  
          var current_tasks = document.querySelectorAll(".delete");
          for (var i = 0; i < current_tasks.length; i++) {
              current_tasks[i].onclick = function () {
                  this.parentNode.remove();
              }
          }
      }
  }

},[])
 
  
  return (<>
  
  <div className="container">
    <div id="newtask" className="newTask">
        <input type="text" placeholder="Add Task..."/>

     <lord-icon
        id="add"
    src="https://cdn.lordicon.com/ftndcppj.json"
    trigger="hover"
    colors="primary:#a866ee,secondary:#000000"
    style={{width:"55px",height:"55px"}}>
</lord-icon>
    </div>

    <div id="tasks"></div>
    <lord-icon
    id="pen"
    src="https://cdn.lordicon.com/ylvuooxd.json"
    trigger="hover"
    colors="primary:#000000,secondary:#000000,tertiary:#a866ee,quaternary:#ffffff"
    style={{width:"75px",height:"85px"}}>
</lord-icon>
</div>
</>  );
}
 
export default Root;
