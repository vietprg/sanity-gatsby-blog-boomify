export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62a9afd2a6f0457c499e3cae",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-boomify-studio",
                  apiId: "77bedb14-258b-4e4f-a93f-655f07e5d59f",
                },
                {
                  buildHookId: "62a9afd28e3ae779f952d348",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-boomify",
                  apiId: "4bc77ce3-b368-4d73-b87a-f0dee32f6b91",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/vietprg/sanity-gatsby-blog-boomify",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-boomify.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
