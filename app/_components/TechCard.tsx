export type TechCardProps = {
    icon : React.ElementType;
    tech : string;
    level : string;
};

export const TechCard = ({ icon : Icon, tech, level }:TechCardProps) => {
    return (
        <div className="bg-muted text-muted-foreground rounded-md border-base px-8 py-6 flex flex-col gap-x-3 w-full max-w-full cursor-default">
            <div className="flex justify-center items-center mb-4">
                <Icon size={50}/>
            </div>
            <p className="text-2xl text-center font-caption text-primary">{tech}</p>
            <p className="text-base text-center text-muted-foreground">Niveau: {level}</p>
        </div>
    );
};