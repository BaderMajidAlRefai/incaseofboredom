function Slot(){
    return <div className="mb-12 flex w-full flex-1 flex-col">
        <div className="flex min-h-96 flex-1 items-center justify-center rounded-t-xl bg-surface">
            <p className="text-lg text-text/40">Slot machine</p>
        </div>

            <div className="bg-[#1d1f20] px-8 py-7">
            <h1 className="text-4xl font-bold text-primary">Weekend Roulette</h1>

            <div className="mt-4 flex items-start justify-between gap-12">
                <p className="max-w-3xl text-lg leading-relaxed text-text/70">
                    A collection of fun activities for when you cannot decide what
                    to do next. Spin the wheel and let chance choose for you.
                </p>

                <p className="shrink-0 text-lg text-secondary">128 spins</p>
            </div>
        </div>
    </div>
}

export default Slot
