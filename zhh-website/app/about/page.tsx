import { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'Who We Are | ZHH Group Holding',
  description: 'Learn about ZHH Group Holding - A leading Emirati holding group building value across construction, real estate, trading, and precious metals since 2003.',
  keywords: 'ZHH Group History, ZHH Team, ZHH Leadership, UAE Holding Company',
};

export default function AboutPage() {
  return <AboutPageClient />;
}
