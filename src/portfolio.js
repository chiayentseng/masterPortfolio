/* 修改此檔案以更新個人作品集內容 */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

// SEO Related settings
const seo = {
  title: "曾家彥｜作品集",
  description: "日威科技副總，MES 系統整合專家，專注於智慧製造與工廠數位轉型。",
  og: {
    title: "曾家彥作品集",
    type: "website",
    url: "",
  },
};

// Home Page
const greeting = {
  title: "曾家彥",
  logo_name: "曾家彥",
  nickname: "",
  subTitle:
    "日威科技副總｜MES 系統整合專家，協助製造業導入數位化流程、即時監控與資料驅動決策。",
  resumeLink: "",
  portfolio_repository: "",
  githubProfile: "",
};

const socialMediaLinks = [];

const skills = {
  data: [
    {
      title: "MES 系統整合",
      fileName: "FullStackImg",
      skills: [
        "⚡ 主導 MES/ERP/設備資料整合與跨廠區導入",
        "⚡ 建立生產履歷、追溯與即時監控機制",
        "⚡ 制定標準流程與資訊架構，提升產能透明度",
      ],
      softwareSkills: [],
    },
    {
      title: "智慧製造與數據治理",
      fileName: "DataScienceImg",
      skills: [
        "⚡ 建立製造數據模型與主檔規範，確保資料一致性",
        "⚡ 導入可視化報表與 KPI 指標，支援管理決策",
        "⚡ 推動 OT/IT 串接與資料即時化",
      ],
      softwareSkills: [],
    },
    {
      title: "專案管理與跨部門協作",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ 以需求訪談與流程盤點帶動專案落地",
        "⚡ 協調研發、製造、品保與 IT 團隊整合資源",
        "⚡ 建立專案節點與風險控管機制",
      ],
      softwareSkills: [],
    },
  ],
};

const openSource = {
  githubUserName: "",
  githubConvertedToken: "",
};

const bigProjects = {
  title: "重點專案",
  subtitle: "代表性導入案例與整合成果。",
  projects: [],
};

const achievementSection = {
  title: "成就亮點",
  subtitle: "在智慧製造與 MES 整合上的成果與里程碑。",
  achivementsCards: [],
};

const blogSection = {
  title: "文章分享",
  subtitle: "分享 MES、智慧製造與專案管理觀點。",
  blogs: [],
};

const contactInfo = {
  title: "聯絡方式",
  subtitle: "歡迎來信或來電洽談合作。",
  number: "",
  email_address: "",
};

const talkSection = {
  title: "演講與分享",
  subtitle: "研討會與內訓分享主題。",
  talks: [],
};

const podcastSection = {
  title: "播客",
  subtitle: "製造數位化與管理經驗分享。",
  podcast: [],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "經歷",
  subtitle: "職務與專案",
  description:
    "專注於 MES 系統整合與智慧製造轉型，協助企業打造可視化、可追溯的生產管理流程。",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "工作經歷",
      work: true,
      experiences: [
        {
          title: "副總經理",
          company: "日威科技",
          company_url: "",
          logo_path: "animated_logo.svg",
          duration: "現職",
          location: "台灣",
          description:
            "主導 MES 系統整合與導入，串接 ERP、設備與產線資料，建立即時監控、追溯與報表機制，提升產能與品質透明度。",
          color: "#0E6BA8",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "專案",
  description:
    "聚焦製造執行系統（MES）、資料整合與智慧工廠導入案例，強調流程優化與可視化管理。",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "文章與分享",
  description: "技術與管理經驗分享。",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "聯絡我",
    profile_image_path: "animated_logo.svg",
    description: "歡迎洽談 MES 系統整合、智慧製造與數位轉型專案。",
    resumeLink: "",
  },
  blogSection: {
    title: "文章",
    subtitle: "分享 MES 與製造數位化觀點。",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "所在地",
    subtitle: "台灣",
    locality: "",
    country: "台灣",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "電話",
    subtitle: "（需求洽談時提供）",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  talkSection,
  podcastSection,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
