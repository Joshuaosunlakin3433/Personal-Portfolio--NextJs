const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p
          className="tracking-widest font-semibold uppercase text-center
           bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text 
           text-transparent"
        >
          {title}
        </p>
      </div>
      <h2 className="mt-6 text-3xl md:text-5xl font-calistoga text-center">
       {eyebrow}
      </h2>
      <p className="font-sans mt-4 text-white/60 md:text-lg lg:text-xl max-w-md text-cente mx-auto text-center">
        {description}
      </p>
    </>
  );
};
 
export default SectionHeader;