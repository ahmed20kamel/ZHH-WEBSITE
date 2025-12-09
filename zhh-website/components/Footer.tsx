import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const divisions = [
    { name: 'ZHH Construction', href: '/divisions#construction' },
    { name: 'ZHH Real Estate', href: '/divisions#real-estate' },
    { name: 'ZHH General Trading', href: '/divisions#trading' },
    { name: 'Jewelust', href: '/divisions#jewelust' },
  ];

  const links = [
    { name: 'Who We Are', href: '/about' },
    { name: 'What We Do', href: '/divisions' },
    { name: 'Our Impact', href: '/projects' },
    { name: 'Investors', href: '/investors' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="bg-[#032D46] text-white" style={{ paddingTop: '64px', paddingBottom: '48px' }}>
      <div className="container-unified">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <img
                  src="/assets/logos/zhh-group-holding-logo.svg"
                  alt="ZHH Group Holding"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 
                className="font-bold text-white"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: 'clamp(14px, 1.5vw, 17px)',
                  fontWeight: 700,
                  letterSpacing: '0.5px'
                }}
              >
                ZHH GROUP HOLDING
              </h3>
            </div>
            <p 
              className="text-white/80 leading-relaxed"
              style={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: 'clamp(12px, 1.3vw, 14px)',
                lineHeight: 1.6,
                fontWeight: 400
              }}
            >
              Building Value Across Construction, Real Estate, Trading & Precious Metals
            </p>
          </div>

          {/* Group Companies */}
          <div>
            <h4 
              className="font-semibold uppercase tracking-wide mb-4 text-white"
              style={{ 
                fontSize: 'clamp(12px, 1.3vw, 14px)',
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 600,
                letterSpacing: '0.5px',
                marginBottom: '20px'
              }}
            >
              GROUP COMPANIES
            </h4>
            <ul className="space-y-2">
              {divisions.map((division) => (
                <li key={division.href}>
                  <Link
                    href={division.href}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                    style={{ 
                      fontSize: 'clamp(11px, 1.2vw, 13px)',
                      fontFamily: '"Montserrat", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    {division.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="font-semibold uppercase tracking-wide mb-4 text-white"
              style={{ 
                fontSize: 'clamp(12px, 1.3vw, 14px)',
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 600,
                letterSpacing: '0.5px',
                marginBottom: '20px'
              }}
            >
              ZHH GROUP HOLDING
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                    style={{ 
                      fontSize: 'clamp(11px, 1.2vw, 13px)',
                      fontFamily: '"Montserrat", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              className="font-semibold uppercase tracking-wide mb-4 text-white"
              style={{ 
                fontSize: 'clamp(12px, 1.3vw, 14px)',
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 600,
                letterSpacing: '0.5px',
                marginBottom: '20px'
              }}
            >
              CONTACT
            </h4>
            <div className="space-y-2 text-white/80">
              <p 
                style={{ 
                  fontSize: 'clamp(13px, 1.4vw, 15px)',
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 400,
                  lineHeight: 1.6
                }}
              >
                Abu Dhabi, United Arab Emirates
              </p>
              <p>
                <a
                  href="tel:+971504044187"
                  className="hover:text-white transition-colors duration-300"
                  style={{ 
                    fontSize: 'clamp(13px, 1.4vw, 15px)',
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 400
                  }}
                >
                  +971 50 404 4187
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p 
              className="text-white/70" 
              style={{ 
                fontSize: 'clamp(13px, 1.4vw, 15px)',
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 400,
                margin: 0
              }}
            >
              © {currentYear} All Rights Reserved by ZHH Group Holding
            </p>
            <p 
              className="text-white/60" 
              style={{ 
                fontSize: 'clamp(12px, 1.3vw, 14px)',
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 400,
                margin: 0
              }}
            >
              Designed with excellence for ZHH Group
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

