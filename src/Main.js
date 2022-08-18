import React, { useState } from 'react';
import Todolist from './Itemlist';

function Todo() {
    const [input, setInput] = useState('')

    const [items, setItems] = useState([])

    const [itemdone, setItemdone] = useState([])





    const handleChange = (event) => {
       // console.log('task display');
        setInput(event.target.value);   //event.=> contains new input
    };

    const addEvent = () => {
        //console.log('task added');
        setItems((prvItem) => {
            return [...prvItem, input]
        });
        setInput('')

    };

//     const newTodo={
//         id:Date.now(),
//         status:false,
//         text:input
//     }
//     const done = (item) =>{
//     return(e)=>{setItems(items.map (item =>{
//         if(item.id==id){
//            item.status=e.target.checked
//         }
//         console.log('done');
//         return item
//     }))
//     }
// }
    


    const deleteItem=(id)=>{
        console.log(items[id]);
        
    setItems((prvItem)=> {

        return prvItem.filter((arr,index)=>{
            // console.log(arr);
            return index == id;
            

        });
    });
    };


    const checkedItem=(id)=>{
        setItems((prv)=> {
            return prv.filter((arr,index)=>{
                // console.log(arr);
                return index !== id;
                
    
            });
        });
        
    }

    const incompleted=(items,id)=>{
        console.log("incompleted");
        console.log(items.filter((items) => items.index === id));
        return items.filter((items) => items.index === id)

    }


    const completed =(items,id)=>{
        console.log("completed");
        console.log(items.filter((items) => items.index !== id));

    }


    // setItems((done)=> {
    //      return done.filter((arr,index)=>{
    //          // console.log(arr);
    //          return index == id;







    return (


        <div className='wrapper'>
            <h2>ToDo</h2>
            <header>
                <label className='menu'>Task</label>
                
               
               <button className='btn'onClick={()=>
               incompleted(items)
                }> 
               <label className='menu'> pending</label>
               </button>

           

               <button className='btn'onClick={()=>
               completed(items)
                }>  <label className='menu'>completed</label>
                </button>
            </header>

            <input placeholder='  enter your task. . . .'
                value={input}
                onChange={handleChange}
            />
            <button className='add' onClick={addEvent} >add</button>
            <ol>
              
                <li>{input}</li>
              
                {items.map((itemval,index) => {
                    return <Todolist
                    id={index}
                    key={index}
                    text={itemval}
                    onSelect={deleteItem}
                    ch={checkedItem}
                   
                    />

                })}
               {/* <li onChange={checkedItem}>{checkedItem}hai</li> */}
            </ol>
        </div>


        //</div>
    )
}

export default Todo;