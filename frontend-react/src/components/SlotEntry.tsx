type SlotEntryProps = {
    name: string
    bio: string
    spins: number
}

function SlotEntry({ name, bio, spins }: SlotEntryProps){
    return <div className="flex h-80 w-80 flex-col rounded-[2px] border border-text/10 bg-background p-6">
        <h2 className="text-2xl font-bold text-primary">{name}</h2>
        <p className="mt-4 line-clamp-3 text-text/70">{bio}</p>
        <div className="mt-auto flex items-center justify-between border-t border-text/10 pt-4">
            <span className="text-sm text-secondary">{spins} spins</span>
            <span className="rounded-lg bg-primary px-4 py-2 font-bold text-background">Spin</span>
        </div>
    </div>
}

export default SlotEntry
