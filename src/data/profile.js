// Professional content. Source of truth: public/Santosh_Yadav_Resume.pdf.
// Edit here, then commit and push. The GitHub Action rebuilds the site.

export const profile = {
  name: 'Santosh Yadav',
  fullName: 'Santosh Ramachal Yadav',
  initials: 'SY',
  designation: 'Lead Application Support Engineer',
  focus: ['Application Support', 'Automation', 'Reporting', 'AI-Assisted Development'],
  location: 'Mumbai, India',
  email: 'santoshr8874@gmail.com',
  phone: '+91 80800 80404',
  github: 'https://github.com/santosh-4788',
  linkedin: 'https://www.linkedin.com/in/santosh-yadav-9290921ab',
  whatsapp: '918080080404', // country code + number, no '+' or spaces (used for wa.me links)
  whatsappMessage: 'Hi Santosh, I saw your portfolio and would like to connect.',
  resume: 'Santosh_Yadav_Resume.pdf',
  intro:
    'I own production support for business-critical insurance applications and build the internal platforms that remove manual work around them. My strongest ground is where the business problem meets the database: SQL Server, reporting and data quality.',
  heroSkills: ['SQL Server', 'Production Support', 'SSRS & Power BI', 'IIS & Windows Server', 'n8n & SQL Agent', 'Claude Code'],
  stats: [
    { value: 7, suffix: ' yrs', label: 'IT experience' },
    { value: 5, suffix: '+ yrs', label: 'Insurance domain' },
    { value: 6, suffix: '+', label: 'Apps in production support' },
    { value: 6, suffix: '', label: 'Internal platforms delivered' },
  ],
}

export const about = {
  paragraphs: [
    'I have 7 years in IT, and for the last 5+ I have supported mission-critical insurance applications at Robinhood Insurance Broker Ltd (OneInsure). I own production support for 6+ business-critical applications across mobile, CRM and web. When something breaks, I fix it, then use root-cause analysis so the same failure does not come back.',
    'Much of my work happens below the screen. I administer SQL Server and PostgreSQL, run backup and restore cycles, and have carried out database and server migrations end to end, from planning and verified backups through post-migration testing of data, application behaviour, scheduled jobs and reports. I also run telecalling operations for 80+ users on Ozontel and GSM gateways.',
    'I have delivered six internal web platforms end to end. I gather the requirements, define the business rules and data logic, then test, deploy and support each system in production. To build them I use AI-assisted development tools: mainly Claude Code, and ChatGPT for problem solving and prompts.',
  ],
  pillars: [
    { icon: 'shield', title: 'Production support', text: 'Incident ownership, root-cause analysis and monitoring across 6+ business-critical applications.' },
    { icon: 'db', title: 'Database & data quality', text: 'SQL Server stored procedures, views, SQL Agent jobs, query analysis, backup & restore, and PostgreSQL.' },
    { icon: 'server', title: 'Migration & infrastructure', text: 'Database and server migrations with cutover planning and post-migration validation; IIS and Windows Server.' },
    { icon: 'chart', title: 'Reporting & automation', text: 'SSRS, Power BI, n8n, SQL Agent and Task Scheduler. Manual daily runs become scheduled, monitored delivery.' },
    { icon: 'phone', title: 'Telecalling operations', text: '80+ users on Ozontel and GSM gateways, with Email, SMS and WhatsApp campaigns.' },
    { icon: 'spark', title: 'AI-assisted development', text: 'Claude Code and ChatGPT speed up building, prototyping and documentation. I own the business logic and the testing.' },
  ],
}

// Experience: titles, companies and dates follow the resume.
// Current title shown as instructed: Lead Application Support Engineer.
export const experience = [
  {
    role: 'Lead Application Support Engineer',
    company: 'Robinhood Insurance Broker Ltd (OneInsure)',
    location: 'Mumbai',
    period: 'Apr 2021 – Present',
    current: true,
    points: [
      ['Production support', 'Own production support for 6+ business-critical insurance applications (mobile, CRM and web), resolving incidents and using root-cause analysis to remove recurring failures rather than re-apply workarounds.'],
      ['Migrations', 'Ran database and server migrations end to end: planned and verified backups, migrated databases and applications to new servers, then carried out post-migration testing and validation (data integrity, application behaviour, scheduled jobs and reports) before sign-off.'],
      ['Database administration', 'Administer SQL Server and PostgreSQL: stored procedures, views, CRUD, user provisioning, and daily differential / 5-day full backup cycles with restores.'],
      ['Internal platforms', 'Delivered six internal web platforms using AI coding tools. Gathered requirements from the business, defined the rules and data logic, directed the AI through build and iteration, then tested, deployed and supported each system.'],
      ['Reporting load', 'Reduced the load internal reporting places on production databases by specifying caching, de-duplication of concurrent requests and strict concurrency limits, after unthrottled report queries had degraded a live procedure. All reporting tools now run on read-only access by design.'],
      ['Automation & reporting', 'Automated recurring reporting and operational tasks with n8n, SQL Agent jobs, Windows Task Scheduler and Python/PowerShell, and built SSRS reports and Power BI dashboards, replacing manual daily runs with scheduled, monitored delivery.'],
      ['Telecalling operations', 'Manage telecalling operations for 80+ users on Ozontel and GSM gateways, including Email/SMS/WhatsApp campaigns and capture of call logs, recordings and talk-time.'],
      ['Deployment & compliance', 'Deploy on IIS and run daily production health checks; author monthly ISNP compliance reports and maintain SOPs for configuration, troubleshooting and recurring fixes.'],
    ],
    tags: ['SQL Server', 'PostgreSQL', 'IIS', 'SSRS', 'Power BI', 'n8n', 'Ozontel', 'Claude Code'],
  },
  {
    role: 'QA / L2 Support Engineer',
    company: 'Chuzone Technology Pvt. Ltd.',
    location: 'Mumbai',
    period: 'May 2019 – Apr 2021',
    points: [
      ['L2 support', 'Provided L2 support for customer and driver queries, diagnosing and closing issues within SLA.'],
      ['Defect resolution', 'Resolved company panel defects, escalating to engineering with clear reproduction steps.'],
    ],
    tags: ['L2 Support', 'QA', 'SLA'],
  },
]

export const skills = [
  { icon: 'shield', title: 'Application Support & Operations', items: ['Incident management', 'Root-cause analysis', 'Production monitoring', 'SOP & SLA', 'Ozontel', 'GSM gateway', 'Email / SMS / WhatsApp campaigns'] },
  { icon: 'db', title: 'Database & Data', items: ['SQL Server', 'Stored procedures', 'Views', 'CRUD', 'SQL Agent jobs', 'Query analysis', 'Backup & restore', 'PostgreSQL'] },
  { icon: 'chart', title: 'Reporting & Automation', items: ['SSRS', 'Power BI', 'Excel automation', 'SharePoint via Microsoft Graph', 'n8n', 'SQL Agent jobs', 'Windows Task Scheduler'] },
  { icon: 'server', title: 'Migration & Infrastructure', items: ['Database & server migration', 'Cutover planning', 'Post-migration testing', 'Windows Server', 'IIS / iisnode (app pools)', 'Docker', 'Nginx', 'PM2', 'Basic networking'] },
  { icon: 'spark', title: 'AI-Assisted Development', items: ['Claude Code', 'ChatGPT', 'LLM-based development', 'Prompt-driven build & iteration', 'React', 'TypeScript', 'Node.js', 'Express', 'REST APIs', 'Socket.IO', 'Prisma'] },
  { icon: 'code', title: 'Languages & Tools', items: ['SQL (T-SQL)', 'Python', 'PowerShell', 'Command-line scripting', 'C', 'HTML', 'PHP', 'Git', 'Postman', 'MS Office'] },
]

export const education = [
  { degree: 'B.Sc. Information Technology', school: 'Niranjana Majithia College of Commerce, Mumbai', year: '2020', score: 'GPA 6.86' },
  { degree: 'HSC', school: 'Nirmala Memorial Foundation College', year: '2015', score: '46.77%' },
  { degree: 'SSC', school: 'Shree Raghubir Madhyamik Vidyalaya', year: '2012', score: '63.45%' },
]
