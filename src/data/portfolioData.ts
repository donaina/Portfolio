import { Experience, Education, Skill, PersonalInfo, Project } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Ayoola Aina',
  title:
    'Core Banking Platform Lead | Digital Transformation | Software Engineer',
  email: 'ayo@webraiders.co', // Replace with your actual email
  phone: '+2348054771205', // Replace with your actual phone
  location: 'Lagos, Nigeria',
  resumeUrl: '/Portfolio/documents/ayoola-aina-resume.pdf', // Updated path for resume download
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/ayoola-aina-10940976/',
    twitter: 'https://twitter.com/don_aina', // Replace with your actual Twitter
    github: 'https://github.com/donaina', // Replace with your actual GitHub
  },
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Digital Transformation & Core Banking Platform Lead',
    company: 'KATSU Network Limited (SABI Africa)',
    period: 'June 2024 - Present',
    description: [
      'Core Banking System Management: Oversee the setup, administration, and management of the core banking application (MIFOS), ensuring seamless integration, functionality, and optimal performance to support bank operations.',
      'Strategic Decision-Making: Act as a key business decider, contributing to the development and implementation of strategic initiatives to drive growth and operational efficiency.',
      'Digital Transformation Leadership: Spearhead digital transformation initiatives across KATSU Microfinance Bank, enhancing the efficiency and scalability of financial services.',
      'Fintech Integration: Manage the integration of Fintech services into Sabi Africa & KATSU MFB\'s platform, enabling microfinance solutions and financial services for SMEs.',
      'Transaction Analysis: Analyze and interpret complex transaction patterns to ensure system integrity, identify trends, and provide actionable insights for decision-making.'
    ],
    technologies: ['MIFOS', 'Fintech Integration', 'Transaction Analysis', 'Digital Transformation'],
  },
  {
    id: 2,
    title: 'Application Support Engineer',
    company: 'VFD Tech',
    period: 'November 2023 - May 2024',
    description: [
      'Customer Support: Delivered front-line technical support for Banking-as-a-Service solutions, ensuring smooth transaction experiences and resolving customer issues promptly.',
      'Transaction Analysis: Analyzed inbound and outbound transactions, leveraging technical deduction skills to troubleshoot and optimize system performance.',
      'Reporting: Compiled and delivered daily reports featuring comprehensive transaction analysis, providing valuable insights for informed decision-making.',
      'Expense Portal Support: Provided 1st-level support for the expense portal used by VFD Group entities and external clients, ensuring high service standards.'
    ],
    technologies: ['Banking-as-a-Service', 'Transaction Analysis', 'Technical Support', 'Reporting'],
  },
  {
    id: 3,
    title: 'Team Lead Application Support & Database Administrator',
    company: 'Abbey Mortgage Bank PLC',
    period: 'February 2022 - October 2023',
    description: [
      'Leadership: Led the CBA support team, ensuring prompt issue resolution and clear communication across cross-functional teams.',
      'System Optimization: Monitored and optimized database performance, ensuring high availability and proactive resource management to prevent failures.',
      'Disaster Recovery: Spearheaded disaster recovery planning and implementation, safeguarding critical business data.',
      'Technical Documentation: Developed comprehensive test cases and documentation using Test-Rail & JIRA, enhancing issue identification and resolution processes.',
      'Strategic Collaboration: Collaborated with management to prioritize tasks and projects based on business needs and current issues.'
    ],
    technologies: ['Database Administration', 'Test-Rail', 'JIRA', 'Disaster Recovery'],
  },
  {
    id: 4,
    title: 'Network Admin & DBA',
    company: 'Abbey Mortgage Bank PLC',
    period: 'March 2020 - January 2022',
    description: [
      'Network Management: Implemented network changes and managed firewalls across 8 branches, ensuring compliance with regulatory requirements.',
      'Database Administration: Oversaw database administration, including backup, replication, and user access management.',
      'Security Measures: Implemented robust security measures to protect data from unauthorized access and potential breaches.',
      'Traffic Analysis: Conducted in-depth analysis of traffic patterns to identify and resolve bottlenecks within the system architecture.'
    ],
    technologies: ['Network Management', 'Database Administration', 'Security', 'Traffic Analysis'],
  },
  {
    id: 5,
    title: 'Quality Assurance & Network Tester',
    company: 'Xiaomi Technologies',
    period: 'September 2021 - September 2022',
    description: [
      'Functional Testing: Performed comprehensive functional and network testing on Xiaomi mobile devices across software release stages.',
      'Test Management: Created and executed manual test cases using TestRail and tracked bugs via JIRA.',
      'Defect Management: Identified, prioritized, and documented defects; collaborated with developers for timely resolutions.',
      'Process Improvement: Maintained detailed test documentation and contributed to process improvement initiatives.'
    ],
    technologies: ['TestRail', 'JIRA', 'Quality Assurance', 'Network Testing'],
  },
  {
    id: 6,
    title: 'Technical Support Engineer',
    company: 'Abbey Mortgage Bank PLC',
    period: 'June 2017 - February 2020',
    description: [
      'Technical Support: Provided bank-wide technical support, including workstation allocation, installation, and incident log management.',
      'E-Channels Support: Supported e-channels platforms, ensuring optimal uptime and performance.'
    ],
    technologies: ['Technical Support', 'E-Channels', 'Incident Management'],
  }
];

export const education: Education[] = [
  {
    id: 1,
    degree: 'Higher National Diploma: Computer Science',
    institution: 'Yaba College of Technology',
    period: '2020- 2022',
    description: 'Lagos, Nigeria',
  },
  {
    id: 2,
    degree: 'National Diploma: Computer Hardware Engineering',
    institution: 'Dalewares Institute of Technology',
    period: '2015 - 2017',
    description: 'Lagos, Nigeria',
  },
  {
    id: 3,
    degree: 'Database & Data Processing with AWS',
    institution: 'AWS',
    period: '2023',
    description: 'Certification',
  },
  {
    id: 4,
    degree: 'ITIL V4 Foundation',
    institution: 'People Cert',
    period: '2021',
    description: 'Certificate in IT Service Management',
  },
  {
    id: 5,
    degree: 'Sophos XG Firewall Administrator',
    institution: 'Sophos',
    period: '2018',
    description: 'Certification',
  }
];

export const skills: Skill[] = [
  { id: 1, name: 'Core Banking System Administration', level: 95, category: 'Technical' },
  { id: 2, name: 'Database Management & Administration', level: 90, category: 'Technical' },
  { id: 3, name: 'Digital Transformation', level: 85, category: 'Business' },
  { id: 4, name: 'Transaction Analysis', level: 90, category: 'Technical' },
  { id: 5, name: 'Technical Documentation', level: 85, category: 'Technical' },
  { id: 6, name: 'Disaster Recovery Planning', level: 85, category: 'Technical' },
  { id: 7, name: 'Fintech Integration', level: 80, category: 'Technical' },
  { id: 8, name: 'Software Engineering', level: 45, category: 'Technical' },
  { id: 9, name: 'System Monitoring', level: 90, category: 'Technical' },
  { id: 10, name: 'JIRA', level: 90, category: 'Tools' },
  { id: 11, name: 'Test-Rail', level: 85, category: 'Tools' }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'ISO27001 Implementation',
    description: 'Played a key role in implementing ISO27001 strategies, improving network security and information management bank wide. This project enhanced the overall security posture and compliance of the organization.',
    technologies: ['ISO27001', 'Network Security', 'Information Management', 'Compliance'],
    imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'Database Migration to Hyper-Converged Infrastructure',
    description: 'Collaborated with the infrastructure team to successfully migrate the bank\'s databases from on-premises infrastructure to a hyper-converged infrastructure, ensuring seamless replication and improved performance.',
    technologies: ['Database Migration', 'Hyper-Converged Infrastructure', 'Infrastructure', 'Data Replication'],
    imageUrl: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    title: 'Database Archiving Automation',
    description: 'Pioneered the automation of a periodic database archiving procedure, preventing excessive database growth and optimizing performance. This solution significantly improved system efficiency and reduced maintenance overhead.',
    technologies: ['Process Automation', 'Database Administration', 'Performance Optimization', 'System Maintenance'],
    imageUrl: 'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }
];
