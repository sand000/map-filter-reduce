# state-and-props-


Question 1. what is the difference between Props and State?

Answer 1.  a) Props   * Props are used to pass data from one component to another.
                   * Data is passed from one component to another.
                   * it is immutable can not be modified.
                   * props are read only.
                   * {props}
              
        b) State   * The data is passed within the component only.
                   * State is both read and write.
                   * The state is a local data storage that is local to the component 
                     only and connot passed to other components.
                   * const [count,setState] = useState(0);
                   
       
	   
                   
Question 2. Explain the useState API?

Answer 2.  Hooks or usestate API allow function to have access to state and other React features.
       It has its own inbult- updater function in React. 
       
       * hooks can only be called inside React funciton components.
       * can only be called at top level of component.
       * can'nt be conditional.
       
       
	   
	   
 Question 3. Explain the how map, filter, reduce work.
 
 Answer 4.  a)Map
               Map() method calls the specified function for every array element one by one.
               array.map(callback fucntion(element,index,arr) =>{}) 
               
            b) Filter
               filter() method filters and extracts the element of an array that satisfies 
               the provided codition. It does not change the origin array.
               array.filter(callback(element,index,arr) => {}) 
               
            c) Reduce
               The reduce() method reduces the given array into a single value by executing a 
               reducer function.  
               Accumulator -> returned in last of function.
               arr.reduce(callback(accumulator, element, currentIndex, array) ={},initialValue)    
