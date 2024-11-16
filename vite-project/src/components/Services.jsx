import { useState } from "react";
import ServicesItem from "./ServicesItem"

function Services(){
    // let [myArray,setMyArray]= useState(["Александр", "Мария", "Иван", "Ольга", "Дмитрий", "Анна", "Сергей", "Екатерина", "Николай", "Елена"]);
    //     const addNames=()=>{
    //     let promptName=prompt('enter the name')
    //     let newArr=[...myArray]
    //     newArr.push(promptName)
    //     setMyArray(newArr)
    //     }
    //     const deleteNames=()=>{
    //         let deletedName=prompt('enter the name that you want to delete')
    //         let newDeletedArr=[...myArray]
    //         let filteredArr=newDeletedArr.filter((item)=>{
    //             return item!==deletedName 
    //         })
    //         setMyArray(filteredArr)
    //     }  
    //     const changeNames=()=>{
    //         let changedName=prompt('enter the name that you want to change')
    //         let newAddedName=prompt('name that we add instead off other one')
    //         let newChangedArr=[...myArray]
    //         let changedArr=newChangedArr.findIndex((item)=>item==changedName)
    //         newChangedArr[changedArr]=newAddedName
    //         setMyArray(newChangedArr)
    //     }  
    let [myArray,setMyArray]=useState([
        ["Смартфон", 24999, "Электроника"],
        ["Ноутбук", 79999, "Электроника"],
        ["Наушники", 2999, "Аудиотехника"],
        ["Кофемашина", 15999, "Бытовая техника"],
        ["Телевизор", 44999, "Электроника"],
        ["Микроволновка", 7999, "Бытовая техника"],
        ["Холодильник", 32999, "Бытовая техника"],
        ["Чайник", 1999, "Бытовая техника"],
        ["Игровая консоль", 35999, "Электроника"],
        ["Смарт-часы", 12999, "Электроника"]
      ])
      const sorting=()=>{
        let newArr=[...myArray]
        newArr.sort((a,b)=>(a[1]-b[1]))
        setMyArray(newArr)
      }
      const sorting2=()=>{
        let newArr=[...myArray]
        newArr.sort((a,b)=>(b[1]-a[1]))
        setMyArray(newArr)
      }
      const filtering=()=>{
        let newArr=[...myArray]
        let filteredArr=newArr.filter((item)=>{
            return item[1]>30000
        })
        setMyArray(filteredArr)
      }
      const filtering2=(category)=>{
        let newArr=[...myArray]
        let filteredArr2=newArr.filter((item)=>{
            return item[2]==category
        })
        setMyArray(filteredArr2)
      }
    let serviceOne={
        firstName:'Jane',
        job:'IT',
        salary:140
    }
    let serviceTwo={
        firstName:'Bob',
        job:'HR',
        salary:100
    }
    let serviceThree={
        firstName:'Kate',
        job:'writer',
        salary:200
    }
    let serviceFour={
        firstName:'Samuel',
        job:'security',
        salary:300
    }
    let serviceFive={
        firstName:'Catherine',
        job:'actress',
        salary:1000
    }
    let serviceSix={
        firstName:'Daniel',
        job:'IT',
        salary:400
    }

    return(
        <section className="services">
            <h3>services</h3>
            {/* <button onClick={addNames}>ADD</button>
            <button onClick={deleteNames}>DELETE</button>
            <button onClick={changeNames}>CHANGE</button> */}
            <button onClick={sorting}>Продукты по возврастающей цене:</button>
            <button onClick={sorting2}>Продукты по убывающей цене:</button>
            <button onClick={filtering}>Продукты дороже 30000</button>
            <button onClick={()=>filtering2('Бытовая техника')}>Показать бытовую технику:</button>
            <button onClick={()=>filtering2('Электроника')}>Показать электротехнику:</button>
            <button onClick={()=>filtering2('Аудиотехника')}>Показать аудиотехнику:</button>
        <p>{myArray}</p>
            <ul>
              <ServicesItem active={true} price={serviceOne.salary} headerName={serviceOne.firstName} text={serviceOne.job}/>
              <ServicesItem active={true} price={serviceTwo.salary} headerName={serviceTwo.firstName} text={serviceTwo.job}/>
              <ServicesItem active={true} price={serviceThree.salary} headerName={serviceThree.firstName} text={serviceThree.job}/>
              <ServicesItem active={true} price={serviceFour.salary} headerName={serviceFour.firstName} text={serviceFour.job}/>
              <ServicesItem active={true} price={serviceFive.salary} headerName={serviceFive.firstName} text={serviceFive.job}/>
              <ServicesItem active={true} price={serviceSix.salary} headerName={serviceSix.firstName} text={serviceSix.job}/>
            </ul>
        </section>
    )
}
export default Services