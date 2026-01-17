import { useParams } from "react-router-dom";
import { projects } from "../data/project"; // fixed file name if needed
import ReactMarkdown from "react-markdown";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div className="p-10">Project not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-4">{project.title}</h1>

      {/* Tagline */}
      <p className="text-xl text-gray-600 mb-10">{project.tagline}</p>

      {/* Image */}
      <div className="rounded-3xl overflow-hidden mb-12">
        <img
          src={project.image}
          alt={project.title}
          className="w-full object-cover"
        />
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-3 mb-10">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-4 py-1 rounded-full border text-sm"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Content rendered as Markdown */}
      <div className="prose prose-lg max-w-none mb-12">
        <ReactMarkdown>{project.content}</ReactMarkdown>
      </div>

      {/* Links */}
      <div className="flex gap-6">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-black text-white"
          >
            Live Project
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
