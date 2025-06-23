let todoList=[
    // {
    //     item:'buy Milk',
    //     dueDate:'17/02/24',
    // },
    // {
    //     item:'buy Milk',
    //     dueDate:'17/02/24', 
    // }
];
displayItems();

function addTodo(){
    let inputElement=document.querySelector('#todo-input');            //calling todo input from html file
    let dateElement=document.querySelector('#todo-date');   //calling date from html
    let todoItem=inputElement.value;  //taking value from input box
    let todoDate=dateElement.value;  //taking value of date
    todoList.push({item:todoItem,dueDate:todoDate});   //pushing item in an empty array
    inputElement.value='';    // removing data from input box
    dateElement.value='';
    displayItems();
    localStorage.setItem('todoList',JSON.stringify(todoList));
    let list=JSON.parse(localStorage.getItem('todoList'));
  
}

function displayItems(){
    let containerElement=document.querySelector('.todo-container');  // ek containerelement nikala from html aur uski class dedi

    let newhtml=''; // making new string
   
    for(let i=0;i<todoList.length;i++){  //iterate newhtml
       let item=todoList[i].item;
       let dueDate=todoList[i].dueDate;
        
        newhtml+=`
        
        <span> ${item}</span>  
        <span> ${dueDate}</span>  
        <button class='btn-delete' onclick=" todoList.splice(${i},1); displayItems();">Delete</button>
        `;  //item likha in todo ,button -delete (if anyone touch delete to use index vaale item ko delete kiya ,aur phir updated list ko display kiya )
      
    }
    containerElement.innerHTML=newhtml;  // innerhtml ko completely change kiya aur new se assign kar  diya
   
}
