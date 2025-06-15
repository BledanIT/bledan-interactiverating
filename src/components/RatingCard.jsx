import { useState, useEffect } from "react";
import RateButton from "./RateButton";
import TextContent from "./TextContent";
import SubmitButton from "./SubmitButton";
import ShowResult from "./ShowResult";

const RatingCard = () => {
    const votes = [1, 2, 3, 4, 5];
    const [rate, setRate] = useState(0);
    const [isSent, setIsSent] = useState(false);

    useEffect(() => {
        setIsSent(false);
    }, [])

    return (
        <main className = {`flex flex-col gap-8 justify-between md:w-[28rem] w-auto rounded-3xl md:m-auto mx-4 my-auto bg-gradient-to-t from-bgMain to-bgSecondary ${isSent ? 'py-12' : 'py-10'} px-10 to-[250%]`}>
            {isSent ?
                (
                    <>
                        <img src = './images/illustration-thank-you.svg' alt='submitted' className = 'mx-auto'></img>
                        <ShowResult vote = {rate}/>
                        <TextContent isSent = {isSent} />
                    </>
                )
                :
                (
                    <>
                        <RateButton value = {0} />
                        <TextContent isSent = {isSent} />
                        <div className = 'flex justify-between'>
                        {votes.map((vote) => (
                            <RateButton key = {vote} value = {vote} isSelected = {rate === vote} onSelect = {() => setRate(vote)} />
                            ))
                        }
                        </div>
                        <SubmitButton onSubmit = {() => setIsSent(true)}/>
                    </>
                )
            }
        </main>
    )
}

export default RatingCard