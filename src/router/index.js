import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import TherapyView from '@/views/TherapyView.vue'
import SessionsView from '@/views/SessionsView.vue'
import AboutMeView from '@/views/AboutMeView.vue'
import ContactView from '@/views/ContactView.vue'


const pages = [
    {
        path: '/',
        name: 'home',
        meta: {
          title: 'Lichaamsgerichte psychotherapie in Leeuwarden | Sandra Postma',
          description: 'Lichaamsgerichte psychotherapie bij Sandra Postma in Leeuwarden. Ontdek hoe aandacht voor lichaam en gevoel je kan ondersteunen bij persoonlijke ontwikkeling.',
            englishPath: '/en/',
            englishTitle: 'Body-Oriented Psychotherapy in Leeuwarden | Sandra Postma',
            englishDescription: 'Body-oriented psychotherapy with Sandra Postma in Leeuwarden. Explore how attention to your body, feelings and relationships can support personal development.',
        },
        component: HomeView
    },
    {
        path: '/therapie',
        name: 'therapy',
        meta: {
          title: 'Lichaamsgerichte psychotherapie | Sandra Postma',
          description: 'Lees over lichaamsgerichte psychotherapie bij Sandra Postma: aandacht voor lichaam, emoties en patronen, en voor wat zich in het contact met anderen afspeelt.',
            englishPath: '/en/therapy',
            englishTitle: 'Body-Oriented Psychotherapy | Sandra Postma',
            englishDescription: 'Learn about body-oriented psychotherapy with Sandra Postma: working with bodily experience, emotions and patterns, and what happens in relationships with others.',
        },
        component: TherapyView
    },
    {
        path: '/sessies',
        name: 'sessions',
        meta: {
          title: 'Sessies en tarieven | Sandra Postma',
          description: 'Praktische informatie over therapiesessies bij Sandra Postma in Leeuwarden: kennismaking, werkwijze, tarieven en vergoeding door zorgverzekeraars.',
            englishPath: '/en/sessions',
            englishTitle: 'Sessions and Fees | Sandra Postma',
            englishDescription: 'Practical information about therapy sessions with Sandra Postma in Leeuwarden, including intake appointments, fees, session duration and insurance reimbursement.',
        },
        component: SessionsView
    },
    {
        path: '/over',
        name: 'about',
        meta: {
          title: 'Over Sandra Postma | Lichaamsgerichte psychotherapie',
          description: 'Maak kennis met Sandra Postma, lichaamsgericht therapeut in Leeuwarden. Lees over haar achtergrond, opleiding en persoonlijke benadering van therapie.',
            englishPath: '/en/about',
            englishTitle: 'About Sandra Postma | Body-Oriented Psychotherapy',
            englishDescription: 'Meet Sandra Postma, a body-oriented therapist in Leeuwarden. Read about her background, training and personal approach to therapy.',
        },
        component: AboutMeView
    },
    {
        path: '/contact',
        name: 'contact',
        meta: {
          title: 'Contact en kennismaking | Sandra Postma',
          description: 'Neem contact op met Sandra Postma voor lichaamsgerichte psychotherapie in Leeuwarden. Vind het praktijkadres aan de Ypeijstraat 27 en het contactformulier.',
            englishPath: '/en/contact',
            englishTitle: 'Contact and Introductory Sessions | Sandra Postma',
            englishDescription: 'Contact Sandra Postma about body-oriented psychotherapy in Leeuwarden. Find the practice address at Ypeijstraat 27, email details and the contact form.',
        },
        component: ContactView
    },
]

export default function createAppRouter(history = createWebHistory(import.meta.env.BASE_URL)) {
  return createRouter({
  history,
  routes: pages.flatMap(page => {
    const meta = { ...page.meta, pageName: page.name, dutchPath: page.path }
    return [
      { ...page, meta: { ...meta, locale: 'nl' } },
      {
        ...page,
        path: meta.englishPath,
        name: `${page.name}_en`,
        meta: { ...meta, locale: 'en', title: meta.englishTitle, description: meta.englishDescription },
      },
    ]
  }),
  scrollBehavior(to, from, savedPosition) {
    // Scroll to top on every navigation
    if (savedPosition) {
        return savedPosition; // This handles browser back/forward
    } else {
        return { top: 0 }; // Scroll to top of the page
    }
  }
  })
}
