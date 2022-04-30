import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/start";
function App() {
  const [username,setUsername]=useState(null);
  const [questionNumber,setQuestionNumber]=useState(1);
  const [stop,setStop]=useState(false);
  const [earned,setEarned]=useState("₹ 0");
  const data = [
    {
      id: 1,
      question: "1. Besides Sachin Tendulkar, who is the only other Indian cricketer to have scored over 13,000 runs in test cricket?",
      answers: [
        {
          text: " Virat Kohli",
          correct: false,
        },
        {
          text: " Rahul Dravid",
          correct: true,
        },
        {
          text: " Sunil Gavaskar",
          correct: false,
        },
        {
          text: "VVS laxman",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: " Ranthambore, Sariska and Keoladeo Ghana are all names of what?",
      answers: [
        {
          text: "National Parks",
          correct: true,
        },
        {
          text: "Goosebumps",
          correct: false,
        },
        {
          text: "Mountains",
          correct: false,
        },
        {
          text: " Rivers",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: " India’s official entry to Oscars 2021, ” Jallikattu” is, a film in which language?",
      answers: [
        {
          text: "Kannada",
          correct: false,
        },
        {
          text: " Punjabi",
          correct: false,
        },
        {
          text: "Hindi",
          correct: false,
        },
        {
          text: " Malayalam",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "In 2020, Louise Gluck won the Nobel Prize in which category?",
      answers: [
        {
          text: "Literature",
          correct: true,
        },
        {
          text: "Sports",
          correct: false,
        },
        {
          text: " Music",
          correct: false,
        },
        {
          text: " Dance",
          correct: false,
          
        },
      ],
    },
    {
      id: 5,
      question: ". In 1994, who became the winner of the first-ever Filmfare R D Burman Award for New Music Talent?",
      answers: [
        {
          text: "Udit Narayan",
          correct: false,
        },
        {
          text: ". A. R. Rahman",
          correct: true,
        },
        {
          text: "Lata Mangeshkar",
          correct: false,
        },
        {
          text: "Raj Burman",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What colour did Lord Shiva’s throat turn into when he drank the deadly poison during Samudra Manthan?",
      answers: [
        {
          text: "Red",
          correct: false,
        },
        {
          text: "Yellow",
          correct: false,
        },
        {
          text: " Blue",
          correct: true,
        },
        {
          text: "Black",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: " Which of these is an ashram set up by Gandhiji set up near Wardha in Maharashtra?",
      answers: [
        {
          text: "Sevagram",
          correct: true,
        },
        {
          text: "Sri Aurobindo Ashram",
          correct: false,
        },
        {
          text: "Parmarth Niketan Ashram",
          correct: false,
        },
        {
          text: "Sivananda Ashram",
          correct:false,
        },
      ],
    },
    {
      id: 8,
      question: "In November 2020 Indian-origin Priyanca Radhakrishnan became a minister in which country?",
      answers: [
        {
          text: "Sri lanka",
          correct: false,
        },
        {
          text: "New Zealand",
          correct: true,
        },
        {
          text: "India",
          correct: false,
        },
        {
          text: "Bangladesh",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which group has represented Riyaz Poonawala and Shaukat Shopwala in One Day International Cricket?",
      answers: [
        {
          text: "Afghanistan",
          correct: false,
        },
        {
          text: "Asia",
          correct: false,
        },
        {
          text: "Africa",
          correct: false,
        },
        {
          text: "UAE",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: " Who was the Defense Minister of India when the India-China War of 1962 began?",
      answers: [
        {
          text: "Nirmala Sitharaman",
          correct: false,
        },
        {
          text: "Manohar Parrikar",
          correct: false,
        },
        {
          text: "Rajnath Singh",
          correct: false,
        },
        {
          text: "VK Krishna Menon",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "Which daughter of Gokulada and Vrajkunwerba Kapadia, born on April 11 1869, was mother to Harilal, Manilal, Ramdas and Devdas?",
      answers: [
        {
          text: "Priyanka Gnadhi",
          correct: false,
        },
        {
          text: "Soniya Gandhi",
          correct: false,
        },
        {
          text: "Jonita Gandhi",
          correct: false,
        },
        {
          text: "Kasturba Gandhi",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: " Patna was renamed Azimabad in 1704 after Azim-us-Shan was the grandson of which Mughal emperor?",
      answers: [
        {
          text: "Ajjrudin badshah",
          correct: false,
        },
        {
          text: "Aurangzeb",
          correct: true,
        },
        {
          text: "Azim pathan",
          correct: false,
        },
        {
          text: "Mohammad hasnan",
          correct:false,
        },
      ],
    },
    {
      id:13,
      question: " Which of these countries has won both the men’s ICC Cricket World Cup and men’s FIFA World Cup?",
      answers: [
        {
          text: "South Africa",
          correct: false,
        },
        {
          text: "Portugal",
          correct: false,
        },
        {
          text: "England",
          correct: true,
        },
        {
          text: "USA",
          correct: false,
        },
      ],
    },
    {
      id:14,
      question: "If you were eating a preparation in ‘tambda rassa’ or ‘pandhra rassa’, you are eating a dish that traditionally belongs to which of these regions?",
      answers: [
        {
          text: "Mumbai",
          correct: false,
        },
        {
          text: "Pune",
          correct: false,
        },
        {
          text: "Nagpur",
          correct: false,
        },
        {
          text: "Kolhapur",
          correct: true,
        },
      ],
    },
    {
      id:15,
      question: "Which country’s parliament in 2020 approved a new map of their country showing Indian territories of Lipulekh, Kalapani and Limpiyadhura as a part of it?",
      answers: [
        {
          text: "Nepal",
          correct: true,
        },
        {
          text: "China",
          correct: false,
        },
        {
          text: "Banladesh",
          correct: false,
        },
        {
          text: "Pakistan",
          correct:false,
        },
      ],
    }, 
  ];
  const moneyPyramid= useMemo(()=>
    [
          { id: 1, amount: "₹ 1000" },
          { id: 2, amount: "₹ 5000" },
          { id: 3, amount: "₹ 10,000" },
          { id: 4, amount: "₹ 20,000" },
          { id: 5, amount: "₹ 40,000" },
          { id: 6, amount: "₹ 80,000" },
          { id: 7, amount: "₹ 120000" },
          { id: 8, amount: "₹ 200000" },
          { id: 9, amount: "₹ 400000" },
          { id: 10, amount: "₹ 800000" },
          { id: 11, amount: "₹ 16,00000"},
          { id: 12, amount: "₹ 32,00000"},
          { id: 13, amount: "₹ 50,00000"},
          { id: 14, amount: "₹ 10000000"},
          { id: 15, amount: "₹ 50000000"}, 
    ].reverse()
  ,[]);
  useEffect(()=>{
 questionNumber>1&&
 setEarned(moneyPyramid.find((m)=>m.id===questionNumber-1).amount);
  },[moneyPyramid, questionNumber]);
  return (
    <div className="app">
    {username ? (
      <>
      <div className="main">
      {stop ?( 
        <h1 className="endText">Congrats you earned ={earned}</h1>
        ):(
          <>
        <div className="top">
    <div className="timer">
      <Timer setStop={setStop} questionNumber={questionNumber}/>
    </div>
        </div>
        <div className="bottom">
        <Trivia 
          data={data}
          setStop={setStop}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
        </div>
        </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
        {moneyPyramid.map((m)=>(
          <li className={questionNumber ===m.id ? "moneyListItem active":"moneyListItem"}>
           <span className="moneyListItemNumber">{m.id}</span> 
           <span className="moneyListItemAmount">{m.amount}</span> 
          </li>
        ))}      
        </ul>
      </div>
      </>
    ):<Start setUsername={setUsername}/>}
     
    </div>
  );
}

export default App;
