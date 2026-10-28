import { config, fields, singleton } from "@keystatic/core";

const storageKind = process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE;
const repo = (process.env.NEXT_PUBLIC_KEYSTATIC_REPO ?? "vishalhosakere/pavan_portfolio") as `${string}/${string}`;

const tags = (label: string) => fields.array(fields.text({ label: "Tag" }), { label, itemLabel: (props) => props.value });

const bulletPoints = fields.array(fields.text({ label: "Bullet point", multiline: true }), {
  label: "Bullet points",
  itemLabel: (props) => props.value,
});

const timelineEntry = fields.object({
  title: fields.text({ label: "Title", validation: { isRequired: true } }),
  subtitle: fields.text({ label: "Subtitle (organisation, optional)" }),
  date: fields.text({ label: "Dates (free text, e.g. May '22 - Dec '22; leave empty to hide)" }),
  description: bulletPoints,
  tags: tags("Tools and skills"),
});

const timelineItemLabel = (props: { fields: { title: { value: string }; subtitle: { value: string }; date: { value: string } } }) =>
  [props.fields.title.value, props.fields.subtitle.value, props.fields.date.value].filter(Boolean).join(" · ");

const shared = {
  ui: {
    brand: { name: "Pavan's portfolio" },
    navigation: {
      Page: ["header", "aboutme", "experience", "projects", "footer"],
      Settings: ["sociallinks", "seo"],
    },
  },
  singletons: {
    header: singleton({
      label: "Header",
      path: "src/data/header",
      format: { data: "json" },
      schema: {
        name: fields.text({ label: "Full name", validation: { isRequired: true } }),
        role: fields.text({ label: "Role" }),
        description: fields.text({ label: "Short description", multiline: true }),
      },
    }),
    aboutme: singleton({
      label: "About",
      path: "src/data/aboutme",
      format: { data: "json" },
      schema: {
        strings: fields.array(fields.text({ label: "Paragraph", multiline: true }), {
          label: "Paragraphs",
          itemLabel: (props) => props.value,
        }),
        highlight: fields.array(fields.text({ label: "Phrase" }), {
          label: "Highlighted phrases (shown in bold wherever they appear)",
          itemLabel: (props) => props.value,
        }),
      },
    }),
    experience: singleton({
      label: "Experience",
      path: "src/data/experience",
      format: { data: "json" },
      schema: {
        items: fields.array(timelineEntry, { label: "Experience and education", itemLabel: timelineItemLabel }),
        resume: fields.file({
          label: "Resume (PDF)",
          description: "Linked as “View Full Resume”. Upload a .pdf file; it is served at /resume.pdf.",
          directory: "public",
          publicPath: "/",
          validation: { isRequired: true },
        }),
      },
    }),
    projects: singleton({
      label: "Projects",
      path: "src/data/projects",
      format: { data: "json" },
      schema: {
        items: fields.array(timelineEntry, { label: "Projects", itemLabel: timelineItemLabel }),
      },
    }),
    footer: singleton({
      label: "Footer",
      path: "src/data/footer",
      format: { data: "json" },
      schema: {
        note: fields.text({ label: "Quote" }),
        email: fields.text({
          label: "Contact email",
          validation: { isRequired: true, pattern: { regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter an email address" } },
        }),
      },
    }),
    sociallinks: singleton({
      label: "Social links",
      path: "src/data/sociallinks",
      format: { data: "json" },
      schema: {
        github: fields.url({ label: "GitHub profile URL", validation: { isRequired: true } }),
        linkedin: fields.url({ label: "LinkedIn profile URL", validation: { isRequired: true } }),
      },
    }),
    seo: singleton({
      label: "Search and sharing",
      path: "src/data/seo",
      format: { data: "json" },
      schema: {
        title: fields.text({ label: "Page title (about 50-60 characters)", validation: { isRequired: true } }),
        description: fields.text({ label: "Search description (about 150-160 characters)", multiline: true, validation: { isRequired: true } }),
        givenName: fields.text({ label: "Given name" }),
        familyName: fields.text({ label: "Family name" }),
        alumniOf: fields.text({ label: "University" }),
        keywords: tags("Keywords"),
        knowsAbout: tags("Areas of expertise (structured data)"),
        ogImage: fields.image({
          label: "Share image",
          description: "Shown when the site is shared on LinkedIn, X, WhatsApp, etc. Use 1200 x 630.",
          directory: "public",
          publicPath: "/",
          validation: { isRequired: true },
        }),
        ogImageAlt: fields.text({ label: "Share image description (alt text)", validation: { isRequired: true } }),
        ogImageWidth: fields.integer({ label: "Share image width (px)", defaultValue: 1200, validation: { isRequired: true } }),
        ogImageHeight: fields.integer({ label: "Share image height (px)", defaultValue: 630, validation: { isRequired: true } }),
      },
    }),
  },
};

export default storageKind === "cloud"
  ? config({ storage: { kind: "cloud" }, cloud: { project: process.env.NEXT_PUBLIC_KEYSTATIC_CLOUD_PROJECT ?? "" }, ...shared })
  : config({ storage: storageKind === "github" ? { kind: "github", repo } : { kind: "local" }, ...shared });
