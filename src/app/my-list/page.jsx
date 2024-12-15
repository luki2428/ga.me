"use client"
import ListElement from "@/components/listElement";
import { useEffect, useRef, useState } from "react";
import styles from "@/css/my-list.module.css"

export default function ListPage(){
    const [elements, setElement] = useState([]);
    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
        const savedList = localStorage.getItem("todo-list");
        if (savedList) {
            setElement(JSON.parse(savedList));
        }
    }, []);

    useEffect(() => {
        // console.log(elements)
        if(elements.length > 0)
            localStorage.setItem('todo-list', JSON.stringify(elements))
    }, [elements])

    const markAsReady = (index) => {
        setElement((prev) =>
            prev.map((item, i) =>
                i === index ? { ...item, compleated: true } : item
            )
        );
    };

    const deleteElement = (index) => {
        // console.log('deleting' + index)
        setElement((prev) => prev.filter((_, i) => i !== index));
    };

    const addElement = () => {
        if(inputValue.trim() != ""){
            setElement((prev) => [{content: inputValue, compleated: false}, ...prev])
            setInputValue("")
        }
    }

    return(
        <section className={`bg-cover bg-center min-h-screen flex justify-center`}>
            <div className={styles.background} />
            <div className="flex flex-col items-center gap-10 mt-36">
                <h1 className="uppercase font-bold text-3xl">Twoja lista</h1>
                <div className="flex gap-2 w-full h-10">
                    <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder="Wpisuj tutaj..." className="font-poppins px-4 w-full outline-none bg-[#201826]" />
                    <button onClick={addElement} className="border border-purple-500 font-bold px-4">Dodaj</button>
                </div>
                <div className="flex flex-col gap-4 w-72 sm:w-80 md:w-96">
                    {elements.map((element, index) => (
                        <ListElement content={element.content} compleated={element.compleated} key={index} onMarkReady={() => markAsReady(index)} onDelete={() => deleteElement(index)} />
                    ))}
                </div>
            </div>
        </section>
    )
}