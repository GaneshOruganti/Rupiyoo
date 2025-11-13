export const legalContent: Record<string, { title: string; content: string }> = {
  'terms-and-conditions': {
    title: 'Terms & Conditions',
    content: `
      <p class="text-sm text-muted-foreground">Last Updated: ${new Date().toLocaleDateString()}</p>
      <h2 class="text-2xl font-bold mt-6 mb-4">1. Introduction</h2>
      <p>Welcome to Rupiyoo Connect ("Platform", "we", "us", or "our"). These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our Platform, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our Platform.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">2. The Rupiyoo Platform</h2>
      <p>Rupiyoo is a technology platform that acts as a digital marketplace. We connect users who wish to borrow money ("Borrowers") with users who wish to lend money ("Lenders").</p>
      <p class="font-bold mt-2">IMPORTANT: Rupiyoo is NOT a lender, financial institution, or creditor. We do not lend money, arrange for credit, or make any credit decisions. Our role is strictly limited to that of a facilitator providing a neutral platform for Borrowers and Lenders to connect.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">3. User Eligibility and Accounts</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>You must be at least 18 years old and a resident of India to use our Platform.</li>
        <li>You agree to provide accurate, current, and complete information during the registration process.</li>
        <li>You are responsible for safeguarding your account password and for all activities that occur under your account.</li>
        <li>All users, both Borrowers and Lenders, must successfully complete our Know Your Customer (KYC) and verification process to use the core features of the Platform.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-4">4. User Obligations</h2>
      <p>As a user of the Platform, you agree not to:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li>Use the Platform for any illegal purpose or in violation of any local, state, national, or international law.</li>
        <li>Post any content that is fraudulent, false, misleading, or deceptive.</li>
        <li>Engage in any activity that could harm, disable, overburden, or impair the Platform.</li>
        <li>Attempt to collect or store personal data about other users without their express permission.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-4">5. Disclaimer of Warranties</h2>
      <p>The Platform is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the operation of the Platform or the information, content, or materials included. Specifically, we do not warrant that:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li>A Borrower will find a Lender.</li>
        <li>A Lender will find a suitable Borrower.</li>
        <li>A loan will be granted.</li>
        <li>Any party will perform their obligations under any loan agreement.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-4">6. Limitation of Liability</h2>
      <p>To the fullest extent permitted by law, Rupiyoo shall not be liable for any damages of any kind arising from the use of this Platform, or from any information, content, or services included on or otherwise made available to you through this Platform, including, but not limited to direct, indirect, incidental, punitive, and consequential damages. This includes any disputes, losses, or damages arising between a Borrower and a Lender.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">7. Intellectual Property</h2>
      <p>All content on the Platform, including text, graphics, logos, and software, is the property of Rupiyoo or its content suppliers and is protected by intellectual property laws. You may not use, reproduce, or distribute any content from the Platform without our prior written permission.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">8. Governing Law and Dispute Resolution</h2>
      <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Delhi, India.</p>
      `,
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    content: `
      <p class="text-sm text-muted-foreground">Last Updated: ${new Date().toLocaleDateString()}</p>
      <h2 class="text-2xl font-bold mt-6 mb-4">1. Information We Collect</h2>
      <p>We collect information to provide and improve our services. This includes:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Personal Identification Information:</strong> Name, email address, phone number, address, date of birth, PAN, Aadhaar number, and other information required for KYC verification.</li>
        <li><strong>Financial Information:</strong> Information about your loan requirements (for Borrowers) or lending preferences (for Lenders). We do not store bank account or credit card details directly; this is handled by our secure payment partners if applicable.</li>
        <li><strong>Technical Information:</strong> IP address, browser type, device information, and usage data collected through cookies and similar technologies.</li>
        <li><strong>Uploaded Documents:</strong> Documents and images you upload for verification, such as ID proofs.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-4">2. How We Use Your Information</h2>
      <p>Your information is used for the following purposes:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li>To create and manage your account.</li>
        <li>To perform mandatory KYC and identity verification.</li>
        <li>To facilitate connections between Borrowers and Lenders.</li>
        <li>To communicate with you about your account and our services.</li>
        <li>To improve and personalize your experience on the Platform.</li>
        <li>To comply with legal obligations and enforce our terms.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-4">3. Information Sharing and Disclosure</h2>
      <p>We do not sell or rent your personal information. We may share your information in the following limited circumstances:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>With Other Users:</strong> We share limited information (like your first name, city, and request details) to facilitate connections. Your full contact details are only shared when you choose to connect with another user.</li>
        <li><strong>With Service Providers:</strong> We work with third-party companies for services like KYC verification, cloud hosting, and data analytics. These providers only have access to the information necessary to perform their functions and are contractually obligated to protect it.</li>
        <li><strong>For Legal Reasons:</strong> We may disclose information if required by law, subpoena, or other legal process, or if we have a good faith belief that disclosure is necessary to protect our rights, your safety, or the safety of others.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-4">4. Data Security</h2>
      <p>We implement robust security measures, including encryption (in transit and at rest), access controls, and regular security audits, to protect your data from unauthorized access, alteration, or destruction. See our Data Handling & Security Policy for more details.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">5. Your Rights and Choices</h2>
      <p>You have the right to access, correct, or delete your personal information, subject to legal and contractual restrictions. You can manage your profile information through your dashboard or by contacting our support team.</p>
    `,
  },
  'disclaimer': {
    title: 'Disclaimer',
    content: `
      <p class="text-sm text-muted-foreground">Last Updated: ${new Date().toLocaleDateString()}</p>
      <h2 class="text-2xl font-bold mt-6 mb-4">General Disclaimer</h2>
      <p>The information, services, and content provided on the Rupiyoo Connect platform are for informational purposes only. Rupiyoo is a technology service provider that facilitates a marketplace for Borrowers and Lenders. We are not a financial institution, bank, NBFC, or credit provider.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">No Financial Advice</h2>
      <p>Rupiyoo does not provide financial, investment, or legal advice. The content on our platform, including blog posts and guides, is not a substitute for professional advice from a qualified financial advisor. You should conduct your own research and consult with professionals before making any financial decisions.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">No Guarantee of Loans or Returns</h2>
      <p>Rupiyoo does not guarantee that a Borrower will receive a loan or that a Lender will find a suitable Borrower. We do not guarantee any returns on investment for Lenders. All lending and borrowing activities are conducted at the users' own risk. The terms of any loan, including amount, interest rate, and repayment schedule, are negotiated and agreed upon solely between the Borrower and the Lender.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">User Responsibility and Due Diligence</h2>
      <p>While Rupiyoo facilitates a verification process (KYC) to build a foundation of trust, this does not constitute an endorsement or guarantee of any user. All users are solely responsible for conducting their own due diligence and assessment of other users before entering into any agreement. Rupiyoo is not responsible for any user's failure to perform their obligations under a loan agreement.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">Limitation of Liability</h2>
      <p>Rupiyoo is not liable for any direct or indirect loss, damage, or dispute arising from the interactions and transactions between users on the platform. Our liability is strictly limited as per our Terms and Conditions.</p>
    `,
  },
  'cookie-policy': {
    title: 'Cookie Policy',
    content: `
      <p class="text-sm text-muted-foreground">Last Updated: ${new Date().toLocaleDateString()}</p>
      <h2 class="text-2xl font-bold mt-6 mb-4">What Are Cookies?</h2>
      <p>Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They are used to remember your preferences, help you navigate between pages efficiently, and improve your overall browsing experience.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">How We Use Cookies</h2>
      <p>We use cookies for several purposes:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Strictly Necessary Cookies:</strong> These are essential for you to move around the website and use its features, such as accessing secure areas. Without these cookies, services like user login cannot be provided.</li>
        <li><strong>Performance Cookies:</strong> These cookies collect information about how you use our platform, for instance, which pages you go to most often. This data helps us optimize our website and make it easier to navigate.</li>
        <li><strong>Functionality Cookies:</strong> These cookies allow our website to remember choices you make (such as your user name or the region you are in) and provide enhanced, more personal features.</li>
        <li><strong>Analytics Cookies:</strong> We use third-party analytics services like Google Analytics to help us understand how users engage with our platform.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">Your Choices Regarding Cookies</h2>
      <p>You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas may be restricted.</p>
    `,
  },
  'refund-and-cancellation-policy': {
    title: 'Refund & Cancellation Policy',
    content: `
      <p class="text-sm text-muted-foreground">Last Updated: ${new Date().toLocaleDateString()}</p>
      <h2 class="text-2xl font-bold mt-6 mb-4">1. General Policy</h2>
      <p>This policy outlines the terms for refunds and cancellations related to any fees charged directly by Rupiyoo Connect for the use of its platform services (e.g., subscription fees, feature fees).</p>
      <p class="font-bold mt-2">This policy does NOT apply to the loan amounts, interest, or any funds transacted between Borrowers and Lenders. Rupiyoo is not a party to those transactions, and all such matters must be handled directly between the users as per their mutual agreement.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">2. Platform Service Fees</h2>
      <p>Rupiyoo may charge fees for certain services, such as premium memberships for Lenders or specific platform features. All fees will be clearly disclosed before you make a payment.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">3. Cancellation Policy</h2>
      <p>If you have subscribed to a recurring service on our platform, you may cancel your subscription at any time through your account dashboard or by contacting support. The cancellation will take effect at the end of your current billing period. You will continue to have access to the service until the end of the billing period.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">4. Refund Policy</h2>
      <p>Platform service fees paid to Rupiyoo are generally non-refundable. We do not provide refunds or credits for any partial subscription periods or unused services.</p>
      <p>Exceptions may be made in the following cases, at our sole discretion:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li>If there was a technical error on our part that resulted in a billing mistake.</li>
        <li>In cases of proven fraudulent activity on your account.</li>
      </ul>
      <p>To request a refund, you must contact our support team within 7 days of the charge with a detailed explanation and any relevant evidence. All refund requests will be investigated and decided upon on a case-by-case basis.</p>
    `,
  },
  'user-agreement-lenders': {
    title: 'User Agreement for Lenders',
    content: `
      <p class="text-sm text-muted-foreground">Last Updated: ${new Date().toLocaleDateString()}</p>
      <p>This User Agreement for Lenders ("Agreement") is a supplement to the general Terms and Conditions and applies specifically to users acting as Lenders on the Rupiyoo Connect platform.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">1. Your Role as a Lender</h2>
      <p>By registering as a Lender, you represent and warrant that:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li>You are legally permitted to lend money in your jurisdiction and will comply with all applicable laws, including regulations on interest rates and lending practices.</li>
        <li>You are lending your own funds and are not acting as an intermediary for an undisclosed third party.</li>
        <li>You will conduct your own due diligence on any Borrower before entering into a loan agreement. You understand that Rupiyoo's verification is a preliminary check and not a guarantee of a Borrower's creditworthiness or character.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-4">2. Conduct and Fair Practices</h2>
      <p>As a Lender, you agree to:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li>Communicate respectfully and professionally with all Borrowers.</li>
        <li>Provide clear, transparent, and fair terms for any loan you offer. All interest rates, fees, and repayment schedules must be explicitly stated.</li>
        <li>Adhere to fair debt collection practices and not engage in any form of harassment, intimidation, or coercion.</li>
        <li>Maintain the confidentiality of Borrower information obtained through the platform.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">3. Relationship with Rupiyoo</h2>
      <p>You are an independent user of the platform. This Agreement does not create any agency, partnership, or employment relationship between you and Rupiyoo. Rupiyoo is not your agent and has no authority to act on your behalf.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">4. Disclaimer of Liability</h2>
      <p>You acknowledge and agree that lending money involves inherent risks, including the risk of default and loss of principal. Rupiyoo is not responsible for any financial losses you may incur. We do not guarantee the repayment of any loan. All lending decisions and their consequences are solely your responsibility.</p>
    `,
  },
  'user-agreement-borrowers': {
    title: 'User Agreement for Borrowers',
    content: `
      <p class="text-sm text-muted-foreground">Last Updated: ${new Date().toLocaleDateString()}</p>
      <p>This User Agreement for Borrowers ("Agreement") is a supplement to the general Terms and Conditions and applies specifically to users acting as Borrowers on the Rupiyoo Connect platform.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">1. Your Role as a Borrower</h2>
      <p>By registering as a Borrower, you represent and warrant that:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li>You are seeking a loan for a legitimate purpose and will provide truthful information in your loan request.</li>
        <li>You understand that posting a request does not guarantee you will receive a loan.</li>
        <li>You are responsible for carefully reviewing all terms offered by a Lender before entering into any agreement.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-4">2. Loan Agreements</h2>
      <p>Any loan agreement you enter into is a legally binding contract between you and the Lender. Rupiyoo is not a party to this agreement. You are solely responsible for fulfilling your obligations, including making repayments on time and as per the agreed schedule.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">3. Your Responsibilities</h2>
      <p>As a Borrower, you agree to:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li>Communicate honestly and transparently with potential Lenders.</li>
        <li>Provide any additional information requested by a Lender for their due diligence, at your discretion.</li>
        <li>Honor the terms of any loan agreement you accept.</li>
        <li>Immediately report any Lender who engages in unfair, deceptive, or harassing behavior.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-4">4. Disclaimer</h2>
      <p>Rupiyoo does not endorse any Lender and makes no representations regarding their reliability or the fairness of their terms. It is your responsibility to assess the suitability of any Lender and the terms they offer.</p>
    `,
  },
  'kyc-and-verification-policy': {
    title: 'KYC & Verification Policy',
    content: `
      <p class="text-sm text-muted-foreground">Last Updated: ${new Date().toLocaleDateString()}</p>
      <h2 class="text-2xl font-bold mt-6 mb-4">1. Our Commitment to Safety</h2>
      <p>To foster a secure and trustworthy environment, Rupiyoo Connect has implemented a mandatory Know Your Customer (KYC) and identity verification process for all users who wish to engage in core platform activities (i.e., posting loan requests or connecting with users).</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">2. What We Verify</h2>
      <p>Our verification process, often powered by AI and third-party services, aims to verify:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Identity:</strong> We verify that you are who you say you are by checking your name, date of birth, and photograph against a government-issued ID.</li>
        <li><strong>Document Validity:</strong> We check that the document you provide (e.g., Aadhaar card, PAN card, Passport) is authentic and not expired or tampered with.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">3. The Process</h2>
      <p>The verification process typically involves:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li>Submitting your full name and other personal details.</li>
        <li>Uploading a clear, legible image of a valid government-issued photo ID.</li>
        <li>In some cases, providing a live selfie for liveness detection and face matching against the ID photo.</li>
      </ul>
      <p>Our system will analyze the provided information and provide a verification status. We may require additional information or manual review in certain cases.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">4. Data Handling</h2>
      <p>All documents and personal data submitted for verification are handled in accordance with our Privacy Policy and Data Handling & Security Policy. Data is encrypted, stored securely, and used solely for the purpose of identity verification and compliance.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">5. Limitations</h2>
      <p>While our KYC process is a critical tool for building trust, it is not a foolproof guarantee of a user's future conduct or financial reliability. We strongly encourage all users to perform their own due diligence. A "verified" status indicates that a user has successfully completed our identity check process at a specific point in time.</p>
    `,
  },
  'data-handling-and-security-policy': {
    title: 'Data Handling & Security Policy',
    content: `
      <p class="text-sm text-muted-foreground">Last Updated: ${new Date().toLocaleDateString()}</p>
      <h2 class="text-2xl font-bold mt-6 mb-4">1. Our Security Philosophy</h2>
      <p>At Rupiyoo Connect, we consider data security to be a foundational pillar of our platform. We are committed to protecting the confidentiality, integrity, and availability of the information our users entrust to us.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">2. Data Encryption</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>In Transit:</strong> All data transmitted between your device and our servers is encrypted using industry-standard Transport Layer Security (TLS).</li>
        <li><strong>At Rest:</strong> Sensitive personal information and documents stored on our servers are encrypted using strong cryptographic algorithms like AES-256.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">3. Access Control</h2>
      <p>We operate on the principle of least privilege. Access to sensitive user data is strictly limited to authorized personnel who require it to perform their job functions (e.g., customer support, compliance review). All access is logged and monitored.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">4. Secure Infrastructure</h2>
      <p>Our platform is hosted on secure cloud infrastructure that provides robust physical and network security protections. We regularly patch and update our systems to protect against known vulnerabilities.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">5. Secure Software Development</h2>
      <p>We follow secure coding practices to prevent common vulnerabilities like SQL injection, cross-site scripting (XSS), and others. Our code is regularly reviewed for security flaws.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">6. Incident Response</h2>
      <p>In the unfortunate event of a data breach, we have an incident response plan in place to promptly investigate, contain the impact, and notify affected users and regulatory authorities as required by law.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">7. User Responsibility</h2>
      <p>While we take extensive measures to secure your data, you also play a crucial role. We urge you to use a strong, unique password for your Rupiyoo account and to be cautious of phishing attempts.</p>
    `,
  },
  'compliance': {
    title: 'Compliance with Indian Laws',
    content: `
      <p class="text-sm text-muted-foreground">Last Updated: ${new Date().toLocaleDateString()}</p>
      <h2 class="text-2xl font-bold mt-6 mb-4">Our Commitment to Compliance</h2>
      <p>Rupiyoo Connect is committed to operating in full compliance with the laws of India. This document provides a general overview of our approach to key regulations. This is not legal advice.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">Information Technology Act, 2000 (IT Act)</h2>
      <p>As an "intermediary" under the IT Act, we adhere to the prescribed due diligence requirements. This includes:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li>Publishing our Terms and Conditions, Privacy Policy, and other user agreements.</li>
        <li>Informing users not to host, display, or share any information that is illegal, harmful, or violates any law.</li>
        <li>Providing a mechanism for users to report and takedown unlawful content.</li>
        <li>Cooperating with law enforcement agencies as required by law.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">Reserve Bank of India (RBI) Guidelines on Digital Lending</h2>
      <p>Rupiyoo Connect operates as a Lending Service Provider (LSP) that provides a marketplace platform. We are NOT a Regulated Entity (RE) like a bank or NBFC. We strive to operate within the spirit of the RBI's digital lending guidelines by ensuring:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Transparency:</strong> We mandate that Lenders on our platform must be transparent about interest rates, fees, and all terms of the loan. A standardized Key Fact Statement (KFS) is encouraged.</li>
        <li><strong>User Consent:</strong> We collect user data based on explicit consent and for specific purposes outlined in our Privacy Policy.</li>
        <li><strong>Grievance Redressal:</strong> We provide a clear grievance redressal mechanism for issues related to the platform's functioning. Disputes related to loan agreements themselves must be resolved between the Borrower and Lender.</li>
        <li><strong>No Direct Fund Flow:</strong> Our platform does not handle the disbursement or repayment of loan amounts. All financial transactions happen directly between the Borrower and the Lender.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">Disclaimer</h2>
      <p>The regulatory landscape is constantly evolving. We continuously monitor legal and regulatory changes and update our platform and policies accordingly. However, it is the responsibility of each user (especially Lenders) to ensure their own activities on the platform comply with all applicable laws.</p>
    `,
  },
};
