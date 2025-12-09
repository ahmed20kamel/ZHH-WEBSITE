'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import PersonCard from './PersonCard';

interface Person {
  id: string;
  name: string;
  title: string;
  photo?: string;
  hasPhoto: boolean;
  gender?: 'male' | 'female';
}

interface OrgLevel {
  level: number;
  people: Person[];
}

const orgData: OrgLevel[] = [
  // Level 1: Chairman
  {
    level: 1,
    people: [
      {
        id: 'chairman',
        name: 'MOHAMED AL HAMMADI',
        title: 'Chairman',
        hasPhoto: true,
        photo: '/assets/team/mohamed-al-hammadi.jpg',
      },
    ],
  },
  // Level 2: C-Level & Divisional CEOs
  {
    level: 2,
    people: [
      {
        id: 'legal-counsel',
        name: 'MOHAMED SALAH',
        title: 'Group Legal Counsel',
        hasPhoto: false,
        gender: 'male',
      },
      {
        id: 'cfo',
        name: 'NAJEEB PK',
        title: 'Chief Financial Officer',
        hasPhoto: true,
        photo: '/assets/team/najeeb-pk.jpg',
      },
      {
        id: 'cto',
        name: 'AKRAM ALI MIR',
        title: 'Chief Technology Officer',
        hasPhoto: true,
        photo: '/assets/team/akram-ali-mir.jpg',
      },
      {
        id: 'cmo',
        name: 'SHAMMA AL AMRI',
        title: 'Chief Marketing Officer',
        hasPhoto: false,
        gender: 'female',
      },
      {
        id: 'real-estate-ceo',
        name: 'AHMED ALI',
        title: 'ZHH Real Estate CEO',
        hasPhoto: false,
        gender: 'male',
      },
      {
        id: 'construction-ceo',
        name: 'SHADI MOHAMED',
        title: 'ZHH Construction CEO',
        hasPhoto: false,
        gender: 'male',
      },
      {
        id: 'trading-ceo',
        name: 'MOHAMED RAFEEQ',
        title: 'ZHH General Trading CEO',
        hasPhoto: true,
        photo: '/assets/team/mohamed-rafeeq.jpg',
      },
    ],
  },
  // Level 3: Jewelust Team
  {
    level: 3,
    people: [
      {
        id: 'jewelust-ceo',
        name: 'MOHAMED AL HAMMADI',
        title: 'Jewelust CEO',
        hasPhoto: true,
        photo: '/assets/team/mohamed-al-hammadi.jpg',
      },
      {
        id: 'jewelust-congo-coo',
        name: 'PIUS WAMPAMBA',
        title: 'Jewelust - Congo, COO',
        hasPhoto: false,
        gender: 'male',
      },
      {
        id: 'jewelust-turkey-coo',
        name: 'MUSTAFA DOGAN',
        title: 'Jewelust - Turkey, COO',
        hasPhoto: true,
        photo: '/assets/team/mustafa-dogan.jpg',
      },
      {
        id: 'jewelust-mali-coo',
        name: 'CHEICK OUMAR',
        title: 'Jewelust - Mali, COO',
        hasPhoto: true,
        photo: '/assets/team/cheick-oumar.jpg',
      },
      {
        id: 'jewelust-dubai-coo',
        name: 'ABDALLAH KHAFASH',
        title: 'Jewelust - Dubai, COO',
        hasPhoto: true,
        photo: '/assets/team/abdallah-khafash.jpg',
      },
      {
        id: 'jewelust-uganda-coo',
        name: 'ISMAIL DABBUR',
        title: 'Jewelust - Uganda, COO',
        hasPhoto: true,
        photo: '/assets/team/ismail-dabbur.jpg',
      },
      {
        id: 'wholesale-director',
        name: 'ABDEL RAHIM ASI',
        title: 'Wholesale Bullion & Cash Director',
        hasPhoto: true,
        photo: '/assets/team/abdel-rahim-asi.jpg',
      },
      {
        id: 'retail-director',
        name: 'HARIF CHEENAMADATH',
        title: 'Jewelry & Bullion Retail Director',
        hasPhoto: true,
        photo: '/assets/team/harif-cheenamadath.jpg',
      },
    ],
  },
];

export default function OrgChart() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <div 
      ref={sectionRef} 
      style={{ 
        width: '100%', 
        position: 'relative', 
        background: '#FFFFFF',
        borderRadius: '16px',
        padding: 'clamp(61px, 7.7vw, 92px)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
      }}
    >
      {/* Crowe Logo - Top Left */}
      <div
        style={{
          position: 'absolute',
          top: 'clamp(32px, 4vw, 40px)',
          left: 'clamp(32px, 4vw, 40px)',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(12px, 1.5vw, 15px)',
        }}
        className="hidden md:flex"
      >
        {/* Crowe Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(9px, 1vw, 10px)',
            fontFamily: '"Montserrat", sans-serif',
            fontSize: 'clamp(15px, 1.9vw, 20px)',
            fontWeight: 600,
            color: '#032D46',
          }}
        >
          <div
            style={{
              width: 'clamp(40px, 4.5vw, 44px)',
              height: 'clamp(40px, 4.5vw, 44px)',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FF8C00 0%, #FFA500 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: 'clamp(20px, 2.4vw, 22px)',
              boxShadow: '0 3px 10px rgba(255, 140, 0, 0.35)',
            }}
          >
            C
          </div>
          <span>Crowe</span>
        </div>
        {/* Dotted line to Chairman */}
        <svg
          width="clamp(110px, 13vw, 150px)"
          height="2"
          style={{ position: 'relative' }}
        >
          <line
            x1="0"
            y1="1"
            x2="100%"
            y2="1"
            stroke="#032D46"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.35"
          />
        </svg>
      </div>

      {/* Org Chart Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(77px, 9.4vw, 111px)',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
        }}
      >
        {orgData.map((level, levelIndex) => (
          <motion.div
            key={level.level}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: levelIndex * 0.2,
                },
              },
            }}
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              gap: 'clamp(27px, 3.4vw, 34px)',
              flexWrap: 'wrap',
            }}
          >
            {/* Bright Light Blue Connecting Lines - Desktop Only */}
            {level.level > 1 && (
              <div
                style={{
                  position: 'absolute',
                  top: '-clamp(90px, 11vw, 130px)',
                  left: 0,
                  right: 0,
                  height: 'clamp(90px, 11vw, 130px)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
                className="hidden md:block"
              >
                <svg
                  width="100%"
                  height="100%"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                >
                  {/* Main vertical line from parent center */}
                  <line
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="50%"
                    stroke="#62c5f9"
                    strokeWidth="3"
                  />
                  {/* Horizontal line across children */}
                  <line
                    x1="6%"
                    y1="50%"
                    x2="94%"
                    y2="50%"
                    stroke="#62c5f9"
                    strokeWidth="3"
                  />
                  {/* Vertical lines to each child */}
                  {level.people.map((person, personIndex) => {
                    const totalPeople = level.people.length;
                    const cardWidth = 88 / totalPeople;
                    const cardCenterX = 6 + (personIndex + 0.5) * cardWidth;
                    return (
                      <line
                        key={person.id}
                        x1={`${cardCenterX}%`}
                        y1="50%"
                        x2={`${cardCenterX}%`}
                        y2="100%"
                        stroke="#62c5f9"
                        strokeWidth="3"
                      />
                    );
                  })}
                </svg>
              </div>
            )}

            {/* Level Title (Mobile Only) */}
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                marginBottom: 'clamp(24px, 3vw, 31px)',
              }}
              className="block md:hidden"
            >
              <h3
                style={{
                  fontFamily: 'var(--font-english-heading)',
                  fontSize: 'clamp(22px, 2.7vw, 27px)',
                  fontWeight: 700,
                  color: '#032D46',
                  textTransform: 'uppercase',
                  letterSpacing: '1.2px',
                  margin: 0,
                }}
              >
                {level.level === 1
                  ? 'Leadership'
                  : level.level === 2
                  ? 'Executive Team'
                  : 'Jewelust Division'}
              </h3>
            </div>

            {/* Person Cards */}
            {level.people.map((person, personIndex) => (
              <motion.div
                key={person.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  width: level.level === 1 
                    ? 'clamp(320px, 34vw, 400px)' 
                    : 'clamp(280px, 30vw, 340px)',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <PersonCard person={person} />
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
