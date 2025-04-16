import { useParams } from "react-router-dom";
import { jobs } from "./JobsData";

const CareersInner = () => {
  const { slug } = useParams();
  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    return <p>Job not found.</p>;
  }

  return (
    <div className="job-details">
      <h1>{job.title}</h1>
      <p>{job.location}</p>
      <p>Level: {job.level}</p>
      <div>
        {job.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <p>{job.description}</p>
    </div>
  );
};

export default CareersInner;
