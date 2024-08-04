import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

const logo = (
    <svg width="80.04" height="15.4" viewBox="0 0 80.04 15.4" xmlns="http://www.w3.org/2000/svg" fill="none"><path d="M 40.34 7.14 L 46.22 15.2 L 44.1 15.2 L 39.04 8.38 L 37.58 9.66 L 37.58 15.2 L 35.78 15.2 L 35.78 0.92 L 37.58 0.92 L 37.58 7.96 Q 38.18 7.28 38.8 6.6 L 40.04 5.24 L 43.9 0.92 L 46 0.92 L 40.34 7.14 Z M 7.98 13.62 L 7.98 15.2 L 0 15.2 L 0 0.92 L 7.98 0.92 L 7.98 2.5 L 1.8 2.5 L 1.8 6.96 L 7.62 6.96 L 7.62 8.52 L 1.8 8.52 L 1.8 13.62 L 7.98 13.62 Z M 80.04 13.62 L 80.04 15.2 L 72.06 15.2 L 72.06 0.92 L 80.04 0.92 L 80.04 2.5 L 73.86 2.5 L 73.86 6.96 L 79.68 6.96 L 79.68 8.52 L 73.86 8.52 L 73.86 13.62 L 80.04 13.62 Z M 30.38 4.48 L 32.14 4.48 L 32.14 15.2 L 30.7 15.2 L 30.44 13.78 L 30.36 13.78 Q 29.84 14.62 28.92 15.01 Q 28 15.4 26.96 15.4 A 6.46 6.46 0 0 1 25.867 15.314 Q 25.276 15.212 24.809 14.991 A 2.924 2.924 0 0 1 24.04 14.47 Q 23.286 13.755 23.112 12.382 A 7.029 7.029 0 0 1 23.06 11.5 L 23.06 4.48 L 24.84 4.48 L 24.84 11.38 A 3.994 3.994 0 0 0 24.95 12.362 Q 25.275 13.639 26.56 13.882 A 3.546 3.546 0 0 0 27.22 13.94 Q 28.254 13.94 28.921 13.602 A 2.031 2.031 0 0 0 29.69 12.94 A 3.392 3.392 0 0 0 30.13 12.003 Q 30.267 11.559 30.329 11.02 A 8.44 8.44 0 0 0 30.38 10.06 L 30.38 4.48 Z M 46.22 15.2 L 48.04 15.2 L 49.74 10.78 L 55.4 10.78 L 57.12 15.2 L 58.98 15.2 L 53.42 0.86 L 51.8 0.86 L 46.22 15.2 Z M 65.46 2.5 L 65.46 15.2 L 63.66 15.2 L 63.66 2.5 L 59.2 2.5 L 59.2 0.92 L 69.9 0.92 L 69.9 2.5 L 65.46 2.5 Z M 18.02 5.86 L 18.14 5.86 Q 18.12 5.6 18.07 5.09 A 14.641 14.641 0 0 1 18.044 4.792 Q 18.023 4.529 18.02 4.34 A 3.975 3.975 0 0 1 18.02 4.28 L 18.02 0 L 19.78 0 L 19.78 15.2 L 18.36 15.2 L 18.1 13.76 L 18.02 13.76 A 3.967 3.967 0 0 1 17.126 14.663 A 4.843 4.843 0 0 1 16.74 14.92 Q 15.94 15.4 14.68 15.4 A 4.649 4.649 0 0 1 13.187 15.171 A 3.849 3.849 0 0 1 11.48 14.01 Q 10.28 12.62 10.28 9.86 A 10.06 10.06 0 0 1 10.392 8.303 Q 10.52 7.49 10.793 6.839 A 4.296 4.296 0 0 1 11.49 5.69 A 3.959 3.959 0 0 1 14.392 4.289 A 5.422 5.422 0 0 1 14.7 4.28 A 5.482 5.482 0 0 1 15.55 4.342 Q 15.996 4.412 16.365 4.562 A 2.858 2.858 0 0 1 16.73 4.74 A 4.568 4.568 0 0 1 17.623 5.411 A 3.976 3.976 0 0 1 18.02 5.86 Z M 18.04 10.2 L 18.04 9.88 A 9.761 9.761 0 0 0 17.979 8.748 Q 17.839 7.554 17.38 6.81 A 2.076 2.076 0 0 0 16.263 5.938 Q 15.888 5.805 15.42 5.761 A 5.184 5.184 0 0 0 14.94 5.74 A 2.81 2.81 0 0 0 14.016 5.884 Q 13.266 6.144 12.81 6.87 Q 12.1 8 12.1 9.9 A 8.4 8.4 0 0 0 12.169 11.016 Q 12.246 11.584 12.406 12.05 A 3.568 3.568 0 0 0 12.81 12.88 A 2.305 2.305 0 0 0 14.487 13.909 A 3.448 3.448 0 0 0 14.96 13.94 A 4.87 4.87 0 0 0 15.814 13.87 Q 16.275 13.788 16.63 13.609 A 2.011 2.011 0 0 0 17.35 13.01 A 2.967 2.967 0 0 0 17.77 12.179 Q 18.04 11.375 18.04 10.2 Z M 54.86 9.18 L 53.26 4.86 A 6.005 6.005 0 0 1 53.226 4.767 Q 53.18 4.638 53.107 4.421 A 52.314 52.314 0 0 1 53.06 4.28 A 22.435 22.435 0 0 1 52.798 3.438 A 24.667 24.667 0 0 1 52.79 3.41 Q 52.66 2.96 52.58 2.72 Q 52.44 3.34 52.26 3.93 Q 52.122 4.382 52.02 4.687 A 12.392 12.392 0 0 1 51.96 4.86 L 50.34 9.18 L 54.86 9.18 Z" vectorEffect="non-scaling-stroke" fill="currentColor" stroke="currentColor"/>
    <style jsx>{`
      svg {
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      svg:hover {
        mask-position: 100%;
        transition:
          mask-position 1s ease,
          -webkit-mask-position 1s ease;
      }
    `}</style>
  </svg>
)

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/24-S2-2-C-EduKATE'
  },
  docsRepositoryBase: 'https://github.com/24-S2-2-C-EduKATE/24-S2-2-C-EduKATE.github.io',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – EduKATE'
      }
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://nextra.site/og.jpeg'
        : `https://nextra.site/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Make beautiful websites with Next.js & MDX."
        />
        <meta
          name="og:description"
          content="Make beautiful websites with Next.js & MDX."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="nextra.site" />
        <meta name="twitter:url" content="https://nextra.site" />
        <meta
          name="og:title"
          content={title ? title + ' – Nextra' : 'Nextra'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Nextra" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  footer: {
    text: (
        <p className="mt-6 text-xs">
          {new Date().getFullYear()} 24-S2-2-C-EduKATE.
        </p>
    )
  },
  toc: {
    backToTop: true
  }
}

export default config
