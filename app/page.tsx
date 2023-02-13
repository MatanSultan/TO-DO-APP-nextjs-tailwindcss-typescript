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
        <div>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Boost your productivity with my to do app
            <br />
            Start using our app today.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
           welcome to my to do app, this is a simple app that allows you to add items to a list and delete them when you are done.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started....
       
            </a>
            </div>
        </div>
            <Input
                placeholder='Item Name'
                className="mt-5 bg-gray-900 text-white border-2 border-white focus:outline-none focus:border-green-600 "
               
                value={Item}
                color="white"
                onChange={(e) => {
                    setItem(e.target.value)
                }}>
            </Input>
            <Button onClick={AddItem} className="bg-green-600 justify-center text-white h-10  text-center items-center">Add Item</Button>
         
      <UnorderedList>
      <div className="mt-9"></div>
                {tasks.map((task) => {
                    return (
                     <ListItem key={task} className="text-white ">
            
                        {task}
                        <Button
                          className="bg-red-600 justify-center text-white"

                 
                            onClick={() => {
                                removeItem(task)
                            }}>
                            Delete
                        </Button>


                    </ListItem>)
               
                    
                })}
                
           
            </UnorderedList>
        </div>
        </div>
        </div>
        
        
            </>
    )
}