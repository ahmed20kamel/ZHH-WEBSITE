import { Metadata } from 'next';
import OurStructurePageClient from './OurStructurePageClient';

export const metadata: Metadata = {
  title: 'Our Structure | ZHH Group Holding',
  description: 'Explore the organizational structure of ZHH Group Holding, from leadership to divisional management.',
  keywords: 'ZHH Structure, Organizational Chart, Leadership, Management Team',
};

export default function OurStructurePage() {
  return <OurStructurePageClient />;
}
