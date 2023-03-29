import { useEffect,useState } from "react";
import uniqid from "uniqid";
import aussie from "./pictures/aussieShep.jpg";
import beagle from "./pictures/beagle.jpg";
import cattleDog from "./pictures/cattleDog.jpeg";
import doberman from "./pictures/doberman.jpg";
import golden from "./pictures/golden.jpeg";
import pitbull from "./pictures/mrworldwide.jpeg";
import poodle from "./pictures/poodle.jpeg";
import shiba from "./pictures/shiba.jpeg";
import shihtuz from "./pictures/shihtuz.jpeg";
import weiner from "./pictures/weiner.jpeg";

const Cards = () =>{
  

    const [cardsArr, setCardsArr] = useState([
        {
            picture: aussie,
            name: 'aussie',
            id: uniqid(),
            order: 0,
        },
        {
            picture: beagle,
            name: 'beagle',
            id: uniqid(),
            order: 1,
        },
        {
            picture: cattleDog,
            name: 'cattleDog',
            id: uniqid(),
            order: 2,
        },
        {
            picture: doberman,
            name: 'doberman',
            id: uniqid(),
            order: 3,
        },
        {
            picture: golden,
            name: 'golden',
            id: uniqid(),
            order: 4,
        },
        {
            picture: pitbull,
            name: 'pitbull',
            id: uniqid(),
            order: 5,
        },
        {
            picture: poodle,
            name: 'poodle',
            id: uniqid(),
            order: 6,
        },
        {
            picture: shiba,
            name: 'shiba',
            id: uniqid(),
            order: 7,
        },
        {
            picture: shihtuz,
            name: 'shihtuz',
            id: uniqid(),
            order: 8,
        },
        {
            picture: weiner,
            name: 'weiner',
            id: uniqid(),
            order: 9,
        }
    ]);
 
    const randomize = () => {
        
        const randomizedArr = [];

        while(randomizedArr.length < 10){
            let randomNumber = Math.floor(Math.random()* 10);

            if(randomizedArr.length === 0){
                randomizedArr.push(randomNumber);
            }
            else{
                for(let i = 0; i < randomizedArr.length; i ++){
                    if(randomizedArr[i] !== randomNumber){
                        randomizedArr.push(randomNumber);
                    }
                }
            }
        }

    }
    
    return(
        <div>
            
        </div>
    )

}

export default Cards;