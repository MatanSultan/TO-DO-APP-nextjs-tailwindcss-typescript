"use client"
import { Button, Flex, ListItem, UnorderedList, Text, Input } from '@chakra-ui/react'
import { use, useState } from 'react'
import 'public/globals.css';
import { Main } from 'next/document';

export default function Home() {
    const [tasks, setTasks] = useState(["dont forget to do this", "dont forget to do that"])
    const [Item, setItem] = useState("")
    function removeItem(taskName: string) {
        setTasks(tasks.filter(task => {
            
            return task != taskName
        }))
    }

    function AddItem() {
        if (Item != "" && !tasks.includes(Item)) {
            let temp = tasks;
            temp.push(Item)
            setTasks(temp)
            setItem("")
        }
    }
    return (
        <>

   <div className="bg-gray-200 w[100%] h[100%]">
        <h1 className="text-red-600 text-center text-3xl">Todo app  </h1>
<div  className="text-center justify-center">
            <Input
                placeholder='Item Name'
               
                value={Item}
                color="black"
                onChange={(e) => {
                    setItem(e.target.value)
                }}>
            </Input>
            <Button onClick={AddItem} className="bg-green-600 justify-center text-white">Add Item</Button>
            </div>
      <UnorderedList>
                {tasks.map((task) => {
                    return (
                     <ListItem key={task}>
                     <div className="text-center justify-center">
                        {task}
                        <Button
                          className="bg-red-600 justify-center text-white"

                 
                            onClick={() => {
                                removeItem(task)
                            }}>
                            Delete
                        </Button>
</div>

                    </ListItem>)
               
                    
                })}
                
           
            </UnorderedList>
            </div>
            </>
    )
}