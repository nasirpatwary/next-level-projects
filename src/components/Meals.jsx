
"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const Meals = async () => {
    const [search, setSearch] = useState("a")
    const [error, setError] = useState("")
    const [meals, setMeals] = useState([])
    console.log(meals);

    const loadData = async () =>{
      try {
        const res = await fetch(`https://themealdb.com/api/json/v1/1/search.php?f=${search}`)
        const data = await res.json()
        console.log(data.meals);
        setMeals(data.meals)
        setError('')
      } catch (error) {
       setError("No Data Found")
      }
    }
    const handler = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value)
    }
    useEffect(() =>{
        loadData()
    }, [])
    return (
        <div>
           <input onChange={handler} className="outline-none pl-2 border-transparent py-1" type="text" placeholder='Search Meals' /> 
           <button onClick={()=> loadData()} className="text-white border border-l-0 px-3 py-1 rounded">Search</button>
           <div className="mt-8 grid grid-cols-4 gap-4">
                {
                    meals?.length > 0 && !error && meals?.map((meal) =>(
                    <div key={meal?.idMeal} className="border p-4 space-y-2">
                        <Image  src={meal?.strMealThumb} alt={meal.strMeal} width={500} height={400}/>
                        <h4>Title: {meal?.strMeal}</h4>
                        <p>Category: {meal?.strCategory}</p>
                        <p>StrArea: {meal?.strArea}</p>
                        <button className="text-white bg-sky-500 rounded py-1 px-3"><Link href={`/dashboard`}>Meals</Link></button>
                    </div>
                ))}
                {
                    error && <h6>No Data Found.....</h6>
                }
           </div>
        </div>
    );
};

export default Meals;