const Description = ({ desc }: { desc: string }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Description</h2>
      <p className="text-lg">{desc}</p>
    </div>
  );
};

export default Description;
