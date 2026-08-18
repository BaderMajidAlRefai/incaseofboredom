import SlotEntry from "../components/SlotEntry"


function Index(){
    return <div className="flex flex-1 flex-col">
        <h1 className="text-4xl mb-5">Pick Your Poison...</h1>
            <div className="grid h-full grid-cols-3 content-start gap-6 rounded-t-xl bg-surface p-20">
                {Array.from({ length: 20 }, (_, index) => (
                    <SlotEntry
                        key={index}
                        name="Weekend Roulette"
                        bio="A collection of fun activities for when you cannot decide what to do next. Spin the wheel and let chance choose for you."
                        spins={128}
                    />
                ))}
            </div>
    </div>
}

export default Index
