export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    title: "🇯🇵 Genki Desu Ka",
    description: "A Japanese language learning webapp for learning and practicing basic vocabulary.",
    tags: ["Next.js", "React", "TypeScript"],
    url: "https://www.genkidesuka.app",
  },
];

export const contributions: Project[] = [
  {
    title: "🔄 flow-to-typescript-codemod",
    description:
      'Contributed improvements to Stripe\'s Flow-to-TypeScript codemod as part of <a href="https://medium.com/pinterest-engineering/migrating-3-7-million-lines-of-flow-code-to-typescript-8a836c88fea5" target="_blank" rel="noopener noreferrer" class="underline underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-100">migrating Pinterest\'s 3.7M-line web codebase</a>. Added support for indexed access types, fixed intersection type bugs, and improved React type conversions.',
    tags: ["TypeScript", "Flow", "Codemod"],
    repo: "https://github.com/stripe-archive/flow-to-typescript-codemod/pull/7",
  },
  {
    title: "🎨 Gestalt",
    description:
      "Pinterest's open source React UI component library that supports their design language. Migrated the codebase to TypeScript.",
    tags: ["React", "TypeScript", "Design System"],
    repo: "https://github.com/pinterest/gestalt",
  },
];
