# LekoArts’ Minimal Blog — Unofficial Starter

This is the “unofficial” starter site for [@lekoarts/gatsby-theme-minimal-blog](https://www.npmjs.com/package/@lekoarts/gatsby-theme-minimal-blog) that adds modifications to the Blog page.

<img src="https://raw.githubusercontent.com/ekafyi/gatsby-starter-minimal-blog-lekoarts-unofficial/master/screenshot-comparison.jpg" alt="Comparison between original theme and this starter site">

More information about the theme:

- Theme: https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog
- Original Starter: https://github.com/LekoArts/gatsby-starter-minimal-blog

💡 If you have never used Gatsby before, head to their [quick start guide](https://www.gatsbyjs.org/docs/quick-start/) or [beginner-friendly tutorials](https://www.gatsbyjs.org/tutorial/). If you are familiar with Gatsby but not familiar with themes, see their [Themes reference guide](https://www.gatsbyjs.org/tutorial/).

## Installation

Use this starter to _create a new site_ in the directory you specify.

```sh
# create a new site at "YOUR-SITE-DIRECTORY"
gatsby new YOUR-SITE-DIRECTORY ekafyi/gatsby-starter-minimal-blog-lekoarts-unofficial

# go to your directory
cd YOUR-SITE-DIRECTORY

# start your site
gatsby develop
```

If adding to an existing site, follow the [regular theme installation instruction](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog#installation), then copy this starter’s `src` [directory content](https://github.com/ekafyi/gatsby-starter-minimal-blog-lekoarts-unofficial/tree/master/src) to your site’s `src` directory.

**Note:** If you encounter `ERROR #85923 GRAPHQL`, run `SHARP_IGNORE_GLOBAL_LIBVIPS=true yarn` in your directory as discussed in [this comment](https://github.com/gatsbyjs/gatsby/issues/22191#issuecomment-598719561).

## Usage

See complete usage instructions and examples [here](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog#usage).

As with the original theme/starter site, you don’t have to modify any code—unless you want to. You can add your content right away (by default in `content` directory), update your site metadata and other options in `gatsby-config.js`, and you’re good to go.

## Shadowed Components

I created this starter site with two modifications to the original theme:

1. Group posts by year in the “Blog” page
2. Display the list of tags in the Blog and Tag pages

Thanks to Gatsby’s “shadowing” feature, I can do it by adding relevant component files in this site’s `src/@lekoarts/gatsby-theme-minimal-blog` directory rather than fork the theme and edit its files directly.

💡 To learn more about shadowing, go to [Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/).

## Other Notes

- I leave everything else identical to the original starter site except one extra post dated this year.
- I don’t use TypeScript here, but I leave the original typing commented out so you can easily enable it.
