

export default function Proplay({count,aTem,bTem}){
    // 
    // console.log(count)
    const Aplus = aTem.reduce(function(hap,a){
       return hap+a
    },0)
    const Bplus = bTem.reduce(function(hap,b){
       return hap+b
    },0)
    // console.log(Aplus,Bplus)
    return(
        <div>

            {
            count === 6 ?
            ( <>
                <p>{
                    Aplus>Bplus
                    ?
                    (`A팀이 ${Aplus}점으로 승리하였습니다.`)
                    :
                    (`B팀이 ${Bplus}점으로 승리하였습니다.`)
                    }</p>
            </>)
            :
            (<>
                <p>{
                    count === 0?
                    (`게임은 5번만 실행됩니다.`)
                    :
                    (`${count}번째 실행`)
                    }
                </p>
                <p></p>
             </>)

             }

           </div>
    )
}