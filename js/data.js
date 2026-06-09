const Projects = {
  capstone: [
    {
      id: "chickify",
      category: "Capstone Project",
      icon: "🐔",
      title: "Chickify",
      badge: "APK + Web",
      thumbnail: "assets/images/chickify/thumb.png",
      hero:[
        {
            label: 'Mobile App',
            image: 'assets/images/chickify/hero1.png'}
      ],
      shortDesc:
        "Connects farmers directly to market and guides them with correct poultry farming practices. Built for both Farmers and Buyers.",
      stack: [
        "TypeScript",
        "React Native",
        "React",
        "Supabase",
        "Vercel",
        "Figma",
      ],
      type: "apk-web",
      hasVideo: true,
      liveUrl: "https://chickify.vercel.app/",
      problem:
        "Small-scale poultry farmers in the Philippines struggle to access fair markets and often lack guidance on best farming practices, leading to financial losses and unsustainable production cycles. Buyers, on the other hand, have difficulty finding verified, local sources for quality poultry products.",
      solution:
        "All decisions throughout the project were made after interviewing a focus group, which were given several options of potential prototypes and designs. We developed Chickify — a dual-user mobile platform for Farmers and Buyers, paired with a marketing web landing page. The app provides a marketplace, farming guides, and direct communication channels, reducing the gap between producers and consumers.",
      userFlows: [
        {
          label: "🧑‍🌾 Farmer",
          steps: [
            { label: "Download & Open App", note: "Start" },
            { label: "Sign Up / Login", note: "Farmer account" },
            { label: "Setup Farm Profile", note: "Details & location" },
            { label: "List Products", note: "Add poultry listings" },
            { label: "Receive Orders", note: "Buyer requests" },
            { label: "Confirm & Fulfill", note: "Process order" },
            { label: "Read Farming Guides", note: "Best practices" },
          ],
        },
        {
          label: "🛒 Buyer",
          steps: [
            { label: "Download & Open App", note: "Start" },
            { label: "Sign Up / Login", note: "Buyer account" },
            { label: "Browse Marketplace", note: "Search farmers" },
            { label: "View Listings", note: "Product details" },
            { label: "Place Order", note: "Select quantity" },
            { label: "Contact Farmer", note: "Chat / confirm" },
            { label: "Receive Product", note: "Order complete" },
          ],
        },
        {
          label: "🌐 Web Visitor",
          steps: [
            { label: "Visit Landing Page", note: "chickify.vercel.app" },
            { label: "Read About Platform", note: "Hero & features" },
            { label: "Download App CTA", note: "Get started" },
          ],
        },
      ],
      users: [
        {
          label: "🧑‍🌾 Farmer",
          screenLabels: [
            "Splash",
            "Sign Up",
            "Farm Profile",
            "Dashboard",
            "List Product",
            "Orders",
            "Farming Guide",
            "Chat",
          ],
        },
        {
          label: "🛒 Buyer",
          screenLabels: [
            "Splash",
            "Sign Up",
            "Browse",
            "Product Detail",
            "Place Order",
            "Order History",
            "Chat",
          ],
        },
      ],
      webScreenLabels: [
        { label: 'Home', img: 'assets/images/chickify/hero1.png' }
      ],
    },
  ],

  intern: [
    {
      id: "Inventory",
      category: "Internship — DTI Region VII",
      icon: "📊",
      title: "DTI Inventory Dashboard",
      badge: "Web · Internal",
      thumbnail: "assets/images/inventory/thumb.png",
      shortDesc:
        "An interactive internal inventory data dashboard built for DTI Region VII with visual analytics and reporting.",
      stack: ["Power BI", "HTML", "CSS", "JavaScript", "Data Analytics"],
      type: "web-internal",
      hasVideo: false,
      problem:
        "The DTI Region VII office relied on manual spreadsheet tracking for inventory and operational data, making it time-consuming to generate reports and difficult to spot trends or make data-driven decisions quickly.",
      solution:
        "Developed an interactive Power BI dashboard with connected web interface for internal use. The dashboard consolidates inventory records, visualizes KPIs with charts and graphs, and allows staff to filter and drill down into specific data sets — reducing report generation time significantly.",
      screenLabels: [
        { label: 'Login', img: '' },
        { label: 'Overview Dashboard', img: '' },
        { label: 'Inventory Table', img: '' },
        { label: 'Analytics Charts', img: '' },
        { label: 'Filter Panel', img: '' },
        { label: 'Export Report', img: '' },
      ],
      userFlows: [
        {
          label: "👩‍💼 Staff",
          steps: [
            { label: "Login", note: "Internal access" },
            { label: "Dashboard Overview", note: "Summary KPIs" },
            { label: "Select Category", note: "Filter inventory" },
            { label: "View Analytics", note: "Charts & graphs" },
            { label: "Export Report", note: "Download PDF" },
          ],
        },
      ],
    },
    {
      id: "Leave Management System",
      category: "Internship — DTI Region VII",
      icon: "🏛️",
      title: "DTI Leave Management System",
      badge: "Web · Internal",
      shortDesc:
        "A web-based leave management system for DTI Region VII staff to submit, track, and manage their leave requests.",
      stack: ["Vue.js", "CSS", "JavaScript", "Python", "PostgreSQL"],
      type: "web-internal",
      hasVideo: false,
      problem:
        "DTI Region VII had no centralized system for managing staff leave requests, leading to confusion, lost paperwork, and inefficient tracking of leave balances and approvals.",
      solution:
        "Built a centralized internal portal allowing staff to track, and manage their leave requests. Includes search functionality, status tracking, and role-based access — all accessible only within the DTI internal network.",
      screenLabels: [
        { label: 'Portal Login', img: '' },
        { label: 'Home Dashboard', img: '' },
        { label: 'Document Tracker', img: '' },
        { label: 'Submit Entry', img: '' },
        { label: 'Search & Filter', img: '' },
        { label: 'Admin View', img: '' },
      ],
      userFlows: [
        {
          label: "👩‍💼 Staff",
          steps: [
            { label: "Internal Login", note: "Auth" },
            { label: "View Dashboard", note: "Overview" },
            { label: "Submit Document", note: "Upload & tag" },
            { label: "Track Status", note: "Monitor progress" },
            { label: "Search Records", note: "Find entries" },
          ],
        },
        {
          label: "🔑 Admin",
          steps: [
            { label: "Admin Login", note: "Elevated access" },
            { label: "Manage Users", note: "Roles & permissions" },
            { label: "Review Submissions", note: "Approve / reject" },
            { label: "Generate Reports", note: "Export data" },
          ],
        },
      ],
    },
  ],

  personal: [
    {
      id: "avogacha",
      category: "Personal Project",
      icon: "🥑",
      title: "Avogacha Machine",
      badge: "Web · Live",
      thumbnail: "assets/images/avogacha/thumb.png",
      shortDesc:
        "A fun interactive gacha capsule machine web app themed around avocados — spin to reveal randomized surprises.",
      stack: ["React", "JavaScript", "CSS", "Vercel"],
      type: "web",
      hasVideo: false,
      liveUrl: "https://avogacha-machine.vercel.app/",
      problem:
        "Gacha mechanics are inherently fun and addictive, but most implementations are locked inside mobile games or paywalled platforms. There was no simple, lighthearted web-based gacha experience anyone could just open and play with instantly — no downloads, no accounts.",
      solution:
        "Built Avogacha Machine — a playful browser-based gacha capsule machine where users spin to reveal randomized results, themed around avocados. Designed with satisfying animations, a clean UI, and instant accessibility via Vercel. A fun exercise in interaction design and frontend animation.",
      screenLabels: [
        { label: 'Home / Machine', img: '' },
        { label: 'Spin Animation', img: '' },
        { label: 'Result Reveal', img: '' },
        { label: 'About Page', img: '' },
      ],
      userFlows: [
        {
          label: "🥑 Player",
          steps: [
            { label: "Visit Site", note: "avogacha-machine.vercel.app" },
            { label: "View Machine", note: "Gacha UI" },
            { label: "Press Spin", note: "Trigger animation" },
            { label: "Capsule Drops", note: "Animated reveal" },
            { label: "See Result", note: "Random prize" },
            { label: "Spin Again", note: "Replay" },
          ],
        },
      ],
    },
    {
      id: "helper-app",
      category: "Personal Project",
      icon: "🛠️",
      title: "Helper App",
      badge: "APK",
      shortDesc:
        "An all-in-one student productivity tool — notes, tasks, quizzes, and a built-in Pomodoro timer.",
      stack: ["TypeScript", "React Native", "Supabase"],
      type: "apk",
      hasVideo: true,
      problem:
        "Students juggle multiple tools for notes, tasks, study timers, and quizzes — switching between apps breaks focus and reduces productivity. There was no single mobile app that brought all these study tools together in one cohesive experience.",
      solution:
        "Built Helper — a React Native mobile app that consolidates note-taking, task management, quiz creation, and a Pomodoro focus timer into one student-friendly interface. All data is synced via Supabase for persistence across sessions.",
      screenLabels: [
        "Splash",
        "Home",
        "Notes",
        "New Note",
        "Tasks",
        "Add Task",
        "Quiz",
        "Take Quiz",
        "Pomodoro",
        "Settings",
      ],
      userFlows: [
        {
          label: "📚 Student",
          steps: [
            { label: "Open App", note: "Launch" },
            { label: "Login / Register", note: "Auth via Supabase" },
            { label: "Choose Feature", note: "Notes / Tasks / Quiz / Timer" },
            { label: "Create Content", note: "Add notes or tasks" },
            { label: "Study Mode", note: "Pomodoro timer" },
            { label: "Take Quiz", note: "Self-test" },
            { label: "Review Progress", note: "Task completion" },
          ],
        },
      ],
    },
  ],

  all() {
    return [...this.capstone, ...this.intern, ...this.personal];
  },

  findById(id) {
    return this.all().find((p) => p.id === id);
  },
};
