/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Vidhya Classes",
  tagline: "A promising 30 Week program to help you land your dream job",
  url: "https://Vidhya-Classes.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Vidhya-Classes", // Usually your GitHub org/user name.
  projectName: "Vidhya-Classes.github.io/", // Usually your repo name.
  stylesheets: ["https://fonts.googleapis.com/icon?family=Material+Icons"],
  onBrokenLinks: "ignore",
  themeConfig: {
    navbar: {
      title: "We Build Engineers",
      logo: {
        alt: "Vidhya Classes",
        src: "img/vidhya.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Announcements",
          items: [
            {
              label: "Cohort 4 Applications",
              href: "https://forms.gle/jCWALYZmJ5K7BCJM9",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/emRqrFysne",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/vidhya-classes",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Vidhya Classes.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
