export const Logo = () => {
    return (
        <div className="text-left cursor-pointer">
            <h1 className="font-semibold font-plexMono ">ReformPix</h1>
            <div className="flex flex-row justify-between gap-1">
                {fetureArray.map((f, k) => (
                    <h1 key={k} className="text-xs font-sans text-foreground-light">{f}</h1>
                ))} 
            </div>
        </div>

    )
}

const fetureArray = ["Convert •", "Resize •", "Transform"]