import React from 'react'

const Todolist = (props) => {

 


    return (
        <div>
            <div className='row'>
            <i class="fa-solid fa-check"
            onClick={()=>{
                    props.onSelect(props.id);
                }}  > </i>

            <i class="fa-solid fa-trash-can " 
                onClick={()=>{
                    props.checkedItem(props.id);
                }}/>
            </div>
            <div className='row1'>
                <li>{props.text}</li>
            </div>

        </div>
    )
}




export default Todolist;