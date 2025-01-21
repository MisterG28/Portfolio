interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description: string;
}

const ExperienceCard = ({
  title,
  company,
  duration,
  description,
}: ExperienceCardProps) => {
  return (
    <div className="relative p-6 rounded-lg shadow-lg bg-muted text-muted-foreground border border-border w-full max-w-xl">
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="italic text-primary mb-1">{company}</p>
      <p className="text-sm text-muted-foreground mb-4">{duration}</p>
      <p className="text-balance">{description}</p>
    </div>
  );
};

export default ExperienceCard;
