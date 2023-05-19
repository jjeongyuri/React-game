import Propic from "./Propic";

export default function Border({name,team,myteam}){
    // console.log(myteam)
    const num = myteam[myteam.length-1]
    const sum = myteam.reduce((hap,ab)=> hap + ab,0)
    // console.log(sum)
    return(
        <div className="con">
         <h1>{name}</h1>
         <Propic team={team} num={num}/>
         <h2>합</h2>
         <p>{sum}</p>
         <h2>기록</h2>
         <p>{myteam.join(',')}</p>
        </div>
    )
}