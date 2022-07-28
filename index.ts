// Making a network request to fetch some json and print the result
import axios from "axios";

//interfaces are used to define the structure of an object.

interface Todo  {
    id : number;
    title : string;
    completed : boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';
// we can use axios to make a network request to above url as follows:
axios.get(url).then(response => {
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    
   //extract the above console.log statement and extract it into a separate helper function 
})

// const logTodo = () => {
    
// }

