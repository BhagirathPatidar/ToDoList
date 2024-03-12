"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { title, desc }]);
    settitle("")
    setdesc("")
    console.log(mainTask)
  };
  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setmainTask(copytask)

  }
  let renderTask = <h2> No Task Available</h2>
  if (mainTask.length > 0) {


    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex item-center justify-between mb-5">
          <div className="flex items-center justify-between  w-2/3">
            <h5 className="text-2xl font-semibold">{t.title} </h5>
            <h6 className="text-xl font-semibold" > {t.desc} </h6>
          </div>
          <button
            onClick={() => { deleteHandler(i) }} className=' bg-red-400 text-white px-4 py-2 rounded font-bold'> Delete</button>
        </li>
      );
    })
  }
  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center '>My ToDo list </h1>
      <form onSubmit={submitHandler}>
        <input type='text ' className='text2xl border-zinc-800 border-2 m-8 px-4 py-2 '
          placeholder='Enter TitleHere'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }} />

        <input type='text ' className='text2xl border-zinc-800 border-2 m-8 px-4 py-2 '
          placeholder='Enter Description Here'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }} />
        <button style={{ background: 'black', text: 'white', paddingLeft: '16px', paddingRight: '16px', paddingTop: '8px', paddingBottom: '8px', fontSize: '24px', lineHeight: '32px', fontWeight: '700', fontFamily: 'bold', borderRadius: '4px', margin: '25px' }} className='text-white'>  Add Task </button>
      </form>
      <hr />
      <div className=' p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page