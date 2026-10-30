const origin = 'https://sandra-postma.nl'

export function getPageHead(route) {
    const { title, description, locale, dutchPath, englishPath, pageName } = route.meta
    const canonical = `${origin}${locale === 'en' ? englishPath : dutchPath}`
    const personId = `${origin}/#person`
    const practiceId = `${origin}/#practice`
    const image = `${origin}/static/sandra_postma.webp`
    const elements = [
        { type: 'link', props: { rel: 'canonical', href: canonical } },
        ...[['nl', dutchPath], ['en', englishPath], ['x-default', dutchPath]].map(([hreflang, path]) => ({
            type: 'link', props: { rel: 'alternate', hreflang, href: `${origin}${path}` },
        })),
        { type: 'meta', props: { name: 'description', content: description } },
        ...Object.entries({
            'og:type': 'website',
            'og:site_name': 'Sandra Postma',
            'og:title': title,
            'og:description': description,
            'og:url': canonical,
            'og:locale': locale === 'en' ? 'en_GB' : 'nl_NL',
            'og:locale:alternate': locale === 'en' ? 'nl_NL' : 'en_GB',
            'og:image': image,
            'og:image:alt': 'Sandra Postma',
        }).map(([property, content]) => ({ type: 'meta', props: { property, content } })),
        { type: 'meta', props: { name: 'twitter:card', content: 'summary' } },
        {
            type: 'script',
            props: { type: 'application/ld+json' },
            children: JSON.stringify({
                '@context': 'https://schema.org',
                '@graph': [
                    {
                        '@type': 'Person',
                        '@id': personId,
                        name: 'Sandra Postma',
                        jobTitle: locale === 'en' ? 'Body-oriented therapist' : 'Lichaamsgericht therapeut',
                        image,
                        url: `${origin}${locale === 'en' ? '/en/about' : '/over'}`,
                        sameAs: [
                            'https://www.linkedin.com/in/sandra-postma-426007254/',
                            'https://www.facebook.com/sandra.postma.75',
                            'https://www.vit-therapeuten.nl/vind-therapeut/therapeut/2240/10242',
                            'https://rbcz.nu/therapeut/s-postma/',
                        ],
                        worksFor: { '@id': practiceId },
                    },
                    {
                        '@type': 'MedicalBusiness',
                        '@id': practiceId,
                        name: 'Praktijk Sandra Postma',
                        image,
                        url: `${origin}/`,
                        email: 'praktijk@sandra-postma.nl',
                        priceRange: '\u20ac80',
                        address: {
                            '@type': 'PostalAddress',
                            streetAddress: 'Ypeijstraat 27',
                            addressLocality: 'Leeuwarden',
                            postalCode: '8933 DT',
                            addressCountry: 'NL',
                        },
                        openingHours: 'Mo-Fr 09:00-17:00',
                        founder: { '@id': personId },
                    },
                    {
                        '@type': pageName === 'about' ? 'AboutPage' : pageName === 'contact' ? 'ContactPage' : 'WebPage',
                        '@id': `${canonical}#webpage`,
                        url: canonical,
                        name: title,
                        description,
                        inLanguage: locale,
                        mainEntity: { '@id': pageName === 'about' ? personId : practiceId },
                    },
                ],
            }),
        },
    ]

    return {
        lang: locale,
        title,
        elements: new Set(elements.map(element => ({
            ...element,
            props: { ...element.props, 'data-page-seo': '' },
        }))),
    }
}