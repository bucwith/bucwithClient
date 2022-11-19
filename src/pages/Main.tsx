import React from 'react';
import Button from '../components/Button'


const Main = () => {
    return (
        <div>
            메인
            <Button
            onClick={()=>{
                console.log('동작')
            }}
            isRound={true}
            disabled={false}
            text="응원 메시지 보러가기"
            />
        </div>
    );
};

export default Main;