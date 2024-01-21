export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "IdeaVault",
  description:
    "Private collaborative brainstorming",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Vision",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/Lucas8448/IdeaVault",
    docs: "https://github.com/Lucas8448/IdeaVault/blob/main/README.md",
  },
}
