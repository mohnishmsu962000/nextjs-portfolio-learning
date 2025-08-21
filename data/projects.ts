interface Projects{
  slug: string,
  name: string,
  description: string,
  technologies: string[],
  fullDescription?: string
}

export const projects: Projects[] = [
  {
    slug: "portfolio-website",
    name: "Portfolio Website", 
    description: "Personal portfolio built with Next.js and Tailwind CSS",
    technologies: ["Next.js", "Tailwind", "React"],
    fullDescription: "A complete personal portfolio..."
  },
  {
    slug: "ai-resume-suggester",
    name: "AI Resume Suggester", 
    description: "An AI based resume suggester that tailors your resume according to the JD",
    technologies: ["Next.js", "Tailwind", "React"],
    fullDescription: "A complete application..."
  },
  {
    slug: "task-manager",
    name: "Task Manager", 
    description: "An AI based resume suggester that tailors your resume according to the JD",
    technologies: ["Next.js", "Tailwind", "React"],
    fullDescription: "A complete application..."
  },
  {
    slug: "weather-app",
    name: "Weather App", 
    description: "An AI based resume suggester that tailors your resume according to the JD",
    technologies: ["Next.js", "Tailwind", "React"],
    fullDescription: "A complete application..."
  },
  
]