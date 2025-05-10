import { Badge } from "@/Components/ui/badge";
const Tools = ({ TechUsed }: { TechUsed: string[] }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Tools Used</h2>

      <div className="flex gap-4 flex-wrap">
        {TechUsed.map((tech, index) => (
          <Badge className="bg-gray-500" key={index}>
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Tools;
