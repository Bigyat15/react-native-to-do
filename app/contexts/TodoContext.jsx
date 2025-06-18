import { createContext} from "react";
import { collection, addDoc, onSnapshot,query,where,orderBy,doc,updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useState,useEffect } from "react";
import { useUser } from "../../hooks/useUser";

export const TodoContext = createContext()

export function TodoProvider({children}){
    const [todo,setTodos] = useState([]);
    const {user} = useUser()

    useEffect(() => {
        fetchTodoByUser()
      }, [user]);

    async function fetchTodoByUser(){
        if (!user) return;
    
        const q = query(
          collection(db, "todos"),
          where("userId", "==", user.uid),
          orderBy("createdAt", "desc")
        );
    
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const fetched = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setTodos(fetched);
        });
    
        return () => unsubscribe(); // cleanup
    }
    

    async function addTodo(text){
        try{
            await addDoc(collection(db,"todos"),{
                text,
                userId:user.uid,
                completed:false,
                createdAt: new Date().toISOString()
            });
        }catch(err){
            console.log(err);
        }
    }

    async function finishTodo(todoId){
        try{
            const todoRef = doc(db,"todos",todoId);
            await updateDoc(todoRef,{
                completed:true,
            })
            console.log(`Marked as completed`)
        }catch(err){
            console.log(err);
        }
    }

    async function deleteTodo(todoId){
        try{
            const todoRef = doc(db,"todos",todoId);
            await deleteDoc(todoRef)
        }catch(err){
            console.log(err)
        }
    }

    return(
        <TodoContext.Provider value={{todo,addTodo,finishTodo,deleteTodo}}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoProvider
