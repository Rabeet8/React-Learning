import React, {useEffect} from 'react'


export default function App() {

  useEffect(()=>{
    console.log("I re-rendered")
    // On Every Render It will triger every time componenet re-render
  
    useEffect(() =>{
        console.log("Running only one time")
    }, []);
    //Dependency array [], it tells react to only run this on the first render
    // component DidMount Alternative
    
    
    let name = "rabeet"
    useEffect(()=>{
        console(`The name chanage: ${name}`)
    },[name])
    // On first render + whenever dependency changes!, The difference here with component Did mount and  Didupdate is the dependency in the array
    // it will fire once the component is loaded
    //componentDidUpdate Alternative

    useEffect(()=>{
      console(`The name chanage: ${name}`)
      return() =>{
        // when components unmount the clean up function will trigger 
        console.log("We unmounted")
      }
  },[name])

  //First the component will unmount than it re-rendered than the name will change


})
  return (
    <div>
      
    </div>
    })
