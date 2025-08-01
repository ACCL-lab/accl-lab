// src/components/TeamGroup.jsx
import TeamCard from "./TeamCard";

export default function TeamGroup({ title, members }) {
  if (!members?.length) return null;

  return (
    <>
      <h3 className="text-center my-4">{title}</h3>
      <div className="row g-4 justify-content-center">
        {members.map((member, idx) => (
          <TeamCard key={idx} member={member} groupTitle={title}/>
        ))}
      </div>
    </>
  );
}
