import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/AppHome.vue';
import History from '@/components/AppHistory.vue';
import Technical from '@/components/AppTechnical.vue';
import Usage from '@/components/AppUsage.vue';
import Gallery from '@/components/AppGallery.vue';
import ContactForm from '@/components/AppContactForm.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/history', component: History },
    { path: '/technical', component: Technical },
    { path: '/usage', component: Usage },
    { path: '/gallery', component: Gallery },
    { path: '/contact', component: ContactForm },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;