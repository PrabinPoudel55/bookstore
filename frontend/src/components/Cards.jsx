import React from 'react'

function Cards({ item }) {
  return (
<>
<div className="mt-7 my-4 ">
    <div className="card bg-base-100 w-full shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
  src={item.image}
  alt={item.name}
  className="h-60 w-full object-cover"
/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title }</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Rs{item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[1px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
</div>
</>
  )

}

export default Cards
