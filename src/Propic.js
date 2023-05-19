// A
import A00 from './images/A_0.png';
import A01 from './images/A_1.png';
import A02 from './images/A_2.png';
import A03 from './images/A_3.png';
import A04 from './images/A_4.png';
import A05 from './images/A_5.png';
import A06 from './images/A_6.png';
import A07 from './images/A_7.png';
import A08 from './images/A_8.png';
import A09 from './images/A_9.png';
// B
import B00 from './images/B_zero.png';
import B01 from './images/B_one.png';
import B02 from './images/B_two.png';
import B03 from './images/B_three.png';
import B04 from './images/B_four.png';
import B05 from './images/B_five.png';
import B06 from './images/B_six.png';
import B07 from './images/B_seven.png';
import B08 from './images/B_eight.png';
import B09 from './images/B_nine.png';

const proNum = {
    a:[A00,A01,A02,A03,A04,A05,A06,A07,A08,A09],
    b:[B00,B01,B02,B03,B04,B05,B06,B07,B08,B09]
}
// console.log(proNum)
export default function Propic({team,num=0}){
    const src = proNum[team][num];
    const alt = 'zero';
    return(
        <img src={src} alt={alt}/>
    )
}