
const Jobs = ({ result }) => {
  return (
    <>
      <div>
        <h3 className=' text-lg font-bold mb-2 mt-10'>{result.length} Jobs</h3>
      </div>
      <section className="card-container">{result}</section>
    </>
  );
};

export default Jobs;