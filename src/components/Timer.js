

export default function Timer({timer}) {

//Convert seconds to Timeh

    return (
        <div>
            Timer
            {timer.hours}-{timer.minutes}-{timer.seconds}
        </div>
    )
}
