export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact Us', href: '/contact' },
];

export const LEGAL_LINKS = [
  { name: 'Terms & Conditions', href: '/legal/terms-and-conditions' },
  { name: 'Privacy Policy', href: '/legal/privacy-policy' },
  { name: 'Disclaimer', href: '/legal/disclaimer' },
  { name: 'Cookie Policy', href: '/legal/cookie-policy' },
  { name: 'Refund & Cancellation Policy', href: '/legal/refund-and-cancellation-policy' },
];

export const USER_AGREEMENT_LINKS = [
  { name: 'Lender Agreement', href: '/legal/user-agreement-lenders' },
  { name: 'Borrower Agreement', href: '/legal/user-agreement-borrowers' },
];

export const POLICY_LINKS = [
    { name: 'KYC & Verification', href: '/legal/kyc-and-verification-policy' },
    { name: 'Data Handling & Security', href: '/legal/data-handling-and-security-policy' },
    { name: 'Compliance', href: '/legal/compliance' },
];

export const ALL_LEGAL_LINKS = [
  { slug: 'terms-and-conditions', name: 'Terms & Conditions' },
  { slug: 'privacy-policy', name: 'Privacy Policy' },
  { slug: 'refund-and-cancellation-policy', name: 'Refund & Cancellation Policy' },
  { slug: 'cookie-policy', name: 'Cookie Policy' },
  { slug: 'disclaimer', name: 'Disclaimer' },
  { slug: 'user-agreement-lenders', name: 'User Agreement for Lenders' },
  { slug: 'user-agreement-borrowers', name: 'User Agreement for Borrowers' },
  { slug: 'kyc-and-verification-policy', name: 'KYC & Verification Policy' },
  { slug: 'data-handling-and-security-policy', name: 'Data Handling & Security Policy' },
  { slug: 'compliance', name: 'Compliance' },
];

export const DASHBOARD_NAV_LINKS = (role: 'borrower' | 'lender') => [
  { name: 'Dashboard', href: `/dashboard/${role}`, icon: 'LayoutDashboard' },
  { name: 'Verification', href: '/dashboard/verification', icon: 'ShieldCheck' },
  { name: 'Messages', href: '#', icon: 'MessageSquare' },
  { name: 'Profile', href: '#', icon: 'User' },
];
