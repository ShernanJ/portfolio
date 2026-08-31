# Portfolio v4

A clean Next.js portfolio for Shernan Javier.

## Running Locally

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding Future Work

Each project has two parts:

1. The work-grid card in `data/projects.ts`
2. The full case-study page in `content/work/[slug].mdx`

The `slug` must match across both files. For example, a project with
`slug: "my-project"` should have this case-study file:

```txt
content/work/my-project.mdx
```

### 1. Add The Work-Grid Card

Add a new object to the `projects` array in `data/projects.ts`:

```ts
{
  slug: "my-project",
  name: "My Project",
  year: "2026",
  shortDescription: "Short one-line description for the work grid.",
  role: "Builder",
  link: {
    href: "/work/my-project",
    type: "case-study",
    label: "Read case study",
  },
  media: {
    type: "image",
    src: "/data/images/my-project-cover.png",
    alt: "Short description of the project cover image.",
  },
  featured: true,
  technologies: ["Next.js", "AI", "Product"],
  visual: {
    background: "#f4f4f4",
    fit: "cover",
  },
}
```

If the project does not have a visual yet, remove the `media` field and the card
will use the project name as a placeholder.

### 2. Add The Case Study

Create `content/work/my-project.mdx`:

```mdx
export const caseStudy = {
  title: "The big case-study headline",
  summary:
    "A short summary that appears near the top of the project page.",
  meta: [
    { label: "Role", value: "Builder" },
    { label: "Focus", value: "Product, frontend" },
    { label: "Status", value: "Draft" },
  ],
  links: [
    { label: "GitHub Repo", href: "https://github.com/...", type: "github" },
    { label: "Live Demo", href: "https://example.com", type: "live" },
    { label: "Video", href: "https://youtube.com/...", type: "youtube" },
  ],
  snapshot: [
    {
      label: "What it was",
      value: "One sentence explaining the project in plain language.",
    },
    {
      label: "What I did",
      value: "One sentence explaining Shernan's role and contribution.",
    },
    {
      label: "Key learning",
      value: "One sentence explaining the main insight or result.",
    },
  ],
  sections: [
    { id: "overview", label: "Overview" },
    { id: "work", label: "What I worked on" },
  ],
};

<CaseSection id="overview" label="Overview" title="What it is">
Write normal markdown text here. Do not wrap paragraphs in `<p>` tags.
</CaseSection>

<CaseSection id="work" label="What I worked on" title="The useful parts">
Add more writing here.

<CaseImage
  alt="Short description of the image."
  aspect="16 / 9"
  caption="Optional caption."
  src="/data/images/my-project-detail.png"
/>
</CaseSection>
```

The optional `links` array renders in the overview area. Add only the links that
exist for that project. Common labels include `GitHub Repo`, `Live Demo`,
`LinkedIn Post`, `X Post`, `YouTube Video`, and `Video`.

The `sections` array controls the left sidebar navigation on the project page.
Every section listed there needs a matching `<CaseSection id="...">`.

#### Case Study Strategy

Keep the page system consistent, but do not force every project into the same
story. Recruiters and founders should be able to skim each page quickly, while
the section choices should reflect what the project proves about Shernan.

Use this shared outer shape by default:

1. Hero
2. Overview and snapshot
3. Context
4. What was built
5. Key decisions or workflows
6. Technical details, when relevant
7. Outcome, tradeoffs, or lessons

The `snapshot` field is optional but recommended. Keep it short and
non-technical. It should answer:

- What it was
- What Shernan did
- The key result, learning, or product insight

Vary the inner sections by project type:

- Founder/product projects: Problem, Product, Core Loop, Architecture, What
  Worked, What Was Hard, Lessons, Next Time.
- Engineering projects: Context, Technical Challenge, Architecture,
  Implementation, Tradeoffs, Results, What I Learned.
- Design/frontend projects: Context, UX Problem, Visual Direction,
  Implementation, Before/After, Outcome.
- Experimental projects: Hypothesis, Prototype, How It Worked, What Broke,
  What I Learned, Next Iteration.

MerchMe is intentionally framed as a co-founder/product case study because it
explains a market pivot, a two-sided marketplace, and product lessons. Do not
copy that exact arc into every project. Other projects should emphasize the
strongest signal they provide, such as frontend craft, systems thinking,
security judgment, ambiguity, or shipping speed.

Good case studies are easy to skim:

- Use plain-language section titles.
- Keep the summary and snapshot near the top.
- Avoid long technical blocks before the reader understands the product.
- Add screenshots or diagrams when they clarify the story.
- Mention hard parts honestly, but frame them as judgment and learning.
- Keep jargon understandable to non-technical readers.

### 3. Register The Case Study

Import and register the MDX file in `content/work/index.ts`:

```ts
import MyProject, {
  caseStudy as myProjectCaseStudy,
} from "@/content/work/my-project.mdx";
```

Then add it to the `caseStudies` object:

```ts
"my-project": {
  caseStudy: myProjectCaseStudy,
  Content: MyProject,
},
```

### 4. Add Images

Put images in `public/data/images`.

Reference them from project cards or MDX using the public URL path:

```txt
/data/images/my-project-cover.png
```

For videos, use this shape in `data/projects.ts`:

```ts
media: {
  type: "video",
  src: "/data/videos/my-project-demo.mp4",
  poster: "/data/images/my-project-poster.png",
  alt: "Short description of the video.",
}
```

### 5. Check It

Run:

```bash
npm run lint
npm run build
```
