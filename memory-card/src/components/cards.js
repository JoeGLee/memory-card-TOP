import { useEffect,useState } from "react";
import DisplayCards from "./displayCards";
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
    const [scoreArr,setScoreArr] = useState([]);
    const [cardsArr, setCardsArr] = useState([
        {
            picture: aussie,
            name: 'Aussie',
            id: uniqid(),
            order: 0,
        },
        {
            picture: beagle,
            name: 'Beagle',
            id: uniqid(),
            order: 1,
        },
        {
            picture: cattleDog,
            name: 'CattleDog',
            id: uniqid(),
            order: 2,
        },
        {
            picture: doberman,
            name: 'Doberman',
            id: uniqid(),
            order: 3,
        },
        {
            picture: golden,
            name: 'Golden Retriever',
            id: uniqid(),
            order: 4,
        },
        {
            picture: pitbull,
            name: 'Pitbull',
            id: uniqid(),
            order: 5,
        },
        {
            picture: poodle,
            name: 'Poodle',
            id: uniqid(),
            order: 6,
        },
        {
            picture: shiba,
            name: 'Shiba Inu',
            id: uniqid(),
            order: 7,
        },
        {
            picture: shihtuz,
            name: 'Shih Tuz',
            id: uniqid(),
            order: 8,
        },
        {
            picture: weiner,
            name: 'Weiner Dog',
            id: uniqid(),
            order: 9,
        }
    ]);
 
    useEffect(()=>{
      const cards =  document.querySelectorAll(".card")

      const randomize = () => {
        
        const randomNumArr = [];
        const tempArr = [];

        while(randomNumArr.length < 10){
            let randomNumber = Math.floor(Math.random()* 10);

            if(randomNumArr.length === 0){
                randomNumArr.push(randomNumber);
            }
            else{
               if(!randomNumArr.includes(randomNumber)){
                    randomNumArr.push(randomNumber);
               }
            }
        }

        for(let i = 0; i < 10; i++)
        {
            tempArr.push(cardsArr[randomNumArr[i]]);
        }

        setCardsArr(tempArr);
    }

    const keepScore = (e)=>{
      if(scoreArr.length === 0){
        setScoreArr([...scoreArr, e.target.id]);
      }
      else{
        if(scoreArr.includes(e.target.id)){
            setScoreArr([]);
        }
        else if(!scoreArr.includes(e.target.id)){
            setScoreArr([...scoreArr, e.target.id]);
          }
     
      }
      console.log(scoreArr);
    }

    const gamePlay = (e) =>{
        keepScore(e);
        randomize();
    }
    cards.forEach(card => card.addEventListener("click", gamePlay));

    return() => cards.forEach(card => card.removeEventListener("click", gamePlay))
    })


    
    return(
        <div>
          <DisplayCards cardsArr={cardsArr}/>
          <h1 className="score">Score: {scoreArr.length}</h1>
        </div>
    )

}

export default Cards;