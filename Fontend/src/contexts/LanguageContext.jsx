import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const translations = {
  vi: {
    common: {
      search: 'Tìm kiếm',
      login: 'Đăng nhập',
      home: 'Trang chủ',
      opportunities: 'Cơ hội thực tập',
      companies: 'Doanh nghiệp',
      information: 'Thông tin',
      guide: 'Hướng dẫn',
      contact: 'Liên hệ',
      all: 'Tất cả',
      language: 'Ngôn ngữ',
    },
    home: {
      badge: 'Nền tảng kết nối thực tập hàng đầu',
      titleLine1: 'Kết nối đúng',
      titleHighlight: 'cơ hội.',
      titleLine2: 'Đồng hành trọn kỳ thực tập.',
      description: 'InternConnect kết nối sinh viên, nhà trường và doanh nghiệp trên một nền tảng thống nhất, giúp bạn dễ dàng tìm kiếm, ứng tuyển và phát triển sự nghiệp.',
      searchPlaceholder: 'Tìm kiếm cơ hội thực tập...',
      stats: {
        students: 'Sinh viên đăng ký',
        partners: 'Doanh nghiệp đối tác',
        internships: 'Cơ hội thực tập',
        satisfaction: 'Hài lòng nền tảng',
      },
      languagesTitle: 'Hỗ trợ đa ngôn ngữ',
      languages: ['Tiếng Việt', 'English', '日本語', '한국어'],
    },
    opportunities: {
      breadcrumb: 'Trang chủ',
      title: 'Cơ hội thực tập',
      description: 'Khám phá những vị trí thực tập chất lượng từ các doanh nghiệp uy tín, phù hợp với kỹ năng và định hướng nghề nghiệp của bạn.',
      searchPlaceholder: 'Tìm theo vị trí, công ty hoặc kỹ năng...',
      findLabel: 'Tìm thấy',
      resultLabel: 'cơ hội phù hợp',
      location: 'Địa điểm',
      sortLatest: 'Sắp xếp: Mới nhất',
      sortOldest: 'Cũ nhất',
      sortCompany: 'Theo doanh nghiệp',
      allLocations: 'Tất cả',
    },
    nav: {
      home: 'Trang chủ',
      opportunities: 'Cơ hội thực tập',
      companies: 'Doanh nghiệp',
      information: 'Thông tin',
      guide: 'Hướng dẫn',
      contact: 'Liên hệ',
    },
    public: {
      company: {
        eyebrow: 'DÀNH CHO DOANH NGHIỆP',
        titleLine1: 'Thu hút đúng',
        titleHighlight: 'tài năng trẻ.',
        description: 'Kết nối với hàng nghìn sinh viên tiềm năng và xây dựng đội ngũ tương lai cùng InternConnect.',
        primaryCta: 'Đăng tuyển ngay',
        secondaryCta: 'Tìm hiểu thêm',
        solutionsLabel: 'GIẢI PHÁP TUYỂN DỤNG',
        solutionsTitle: 'Mọi thứ doanh nghiệp cần để tìm đúng người',
        solutionsText: 'Tối ưu hóa quy trình tuyển dụng và đồng hành cùng sinh viên trong suốt kỳ thực tập.',
        feature1Title: 'Tiếp cận tài năng trẻ',
        feature1Text: 'Tìm kiếm sinh viên theo chuyên ngành, kỹ năng và định hướng phù hợp.',
        feature2Title: 'Quản lý hồ sơ tập trung',
        feature2Text: 'Theo dõi CV, trạng thái ứng tuyển và lịch phỏng vấn trên một nền tảng.',
        feature3Title: 'Quy trình minh bạch',
        feature3Text: 'Đánh giá và cập nhật kết quả rõ ràng, kết nối xuyên suốt với nhà trường.',
        stepsTitle: 'QUY TRÌNH ĐƠN GIẢN',
        steps: ['Đăng ký doanh nghiệp', 'Đăng tin tuyển dụng', 'Kết nối và tuyển chọn'],
      },
      info: {
        eyebrow: 'CỔNG THÔNG TIN INTERNCONNECT',
        titleLine1: 'Thông tin mới nhất',
        titleHighlight: 'dành cho bạn.',
        description: 'Cập nhật tin tức, quy định, hướng dẫn và những thông tin hữu ích về thực tập.',
        searchPlaceholder: 'Tìm kiếm thông tin, tin tức, hướng dẫn...',
        categories: ['Tất cả thông tin', 'Thông báo', 'Quy định thực tập', 'Hướng dẫn sinh viên', 'FAQ'],
        latestTitle: 'Cập nhật từ InternConnect',
        latest: [
          ['Lịch đăng ký thực tập học kỳ I năm 2025', '25/06/2025'],
          ['Ngày hội kết nối thực tập InternConnect 2025', '22/06/2025'],
          ['Hướng dẫn viết báo cáo thực tập đạt chuẩn', '20/06/2025'],
        ],
        noticeTitle: 'Thông báo mới nhất',
        notices: ['Tham gia để nhận thông báo thực tập', 'Danh sách doanh nghiệp hợp tác', 'Hạn chót nộp báo cáo'],
      },
      guide: {
        eyebrow: 'HƯỚNG DẪN SỬ DỤNG',
        titleLine1: 'Bắt đầu thật',
        titleHighlight: 'đơn giản.',
        description: 'Chọn vai trò của bạn để xem các bước sử dụng InternConnect.',
        studentTitle: 'Hướng dẫn sinh viên',
        studentText: 'Hoàn thiện hồ sơ, tải CV, tìm kiếm cơ hội, ứng tuyển và theo dõi 15 giai đoạn thực tập.',
        companyTitle: 'Hướng dẫn doanh nghiệp',
        companyText: 'Đăng ký doanh nghiệp, đăng tin tuyển dụng, xử lý hồ sơ và đánh giá sinh viên.',
        schoolTitle: 'Hướng dẫn nhà trường',
        schoolText: 'Quản lý kỳ thực tập, doanh nghiệp, phân công giảng viên và báo cáo thống kê.',
        studentActions: ['Tạo và cập nhật hồ sơ', 'Tìm cơ hội phù hợp', 'Ứng tuyển và theo dõi trạng thái', 'Nộp nhật ký, báo cáo thực tập'],
        companyActions: ['Gửi yêu cầu đăng ký', 'Đăng tin tuyển dụng', 'Phỏng vấn và tuyển chọn', 'Đánh giá quá trình thực tập'],
        schoolActions: ['Thiết lập kỳ thực tập', 'Phê duyệt doanh nghiệp', 'Phân công giảng viên', 'Theo dõi kết quả'],
        startNow: 'Bắt đầu ngay',
      },
      contact: {
        eyebrow: 'LIÊN HỆ INTERNCONNECT',
        titleLine1: 'Chúng tôi luôn',
        titleHighlight: 'sẵn sàng hỗ trợ.',
        description: 'Gửi câu hỏi hoặc yêu cầu hỗ trợ, đội ngũ InternConnect sẽ phản hồi sớm nhất.',
        infoTitle: 'Thông tin liên hệ',
        infoText: 'Hãy liên hệ với chúng tôi qua các kênh dưới đây.',
        supportEmail: 'Email hỗ trợ',
        hotline: 'Hotline',
        address: 'Địa chỉ',
        formTitle: 'Gửi tin nhắn',
        name: 'Họ và tên',
        email: 'Email',
        subject: 'Chủ đề',
        message: 'Nội dung',
        send: 'Gửi yêu cầu',
      },
      feature: 'Tìm hiểu thêm',
      viewAll: 'Xem tất cả',
      details: 'Xem chi tiết',
    },
    footer: {
      brandText: 'Nền tảng kết nối thực tập giữa sinh viên, nhà trường và doanh nghiệp.',
      terms: 'Điều khoản sử dụng',
      privacy: 'Chính sách bảo mật',
      rights: 'All rights reserved.',
    },
  },
  en: {
    common: {
      search: 'Search',
      login: 'Login',
      home: 'Home',
      opportunities: 'Internship opportunities',
      companies: 'Companies',
      information: 'Information',
      guide: 'Guide',
      contact: 'Contact',
      all: 'All',
      language: 'Language',
    },
    home: {
      badge: 'Top internship connection platform',
      titleLine1: 'Find the right',
      titleHighlight: 'opportunity.',
      titleLine2: 'Support every step of your internship journey.',
      description: 'InternConnect brings students, schools, and employers together on one platform to make internship discovery, applications, and career growth easier.',
      searchPlaceholder: 'Search internship opportunities...',
      stats: {
        students: 'Students registered',
        partners: 'Partner companies',
        internships: 'Internship opportunities',
        satisfaction: 'Platform satisfaction',
      },
      languagesTitle: 'Multi-language support',
      languages: ['Tiếng Việt', 'English', '日本語', '한국어'],
    },
    opportunities: {
      breadcrumb: 'Home',
      title: 'Internship opportunities',
      description: 'Explore quality internship positions from trusted companies that match your skills and career direction.',
      searchPlaceholder: 'Search by role, company or skill...',
      findLabel: 'Found',
      resultLabel: 'matching opportunities',
      location: 'Location',
      sortLatest: 'Sort: Newest',
      sortOldest: 'Oldest',
      sortCompany: 'By company',
      allLocations: 'All',
    },
    nav: {
      home: 'Home',
      opportunities: 'Internship opportunities',
      companies: 'Companies',
      information: 'Information',
      guide: 'Guide',
      contact: 'Contact',
    },
    public: {
      company: {
        eyebrow: 'FOR COMPANIES',
        titleLine1: 'Attract the right',
        titleHighlight: 'young talent.',
        description: 'Connect with thousands of potential students and build the future team with InternConnect.',
        primaryCta: 'Recruit now',
        secondaryCta: 'Learn more',
        solutionsLabel: 'RECRUITMENT SOLUTIONS',
        solutionsTitle: 'Everything a company needs to hire the right people',
        solutionsText: 'Optimize the hiring process and support students throughout the internship journey.',
        feature1Title: 'Access young talent',
        feature1Text: 'Find students by major, skills, and career direction that fit your needs.',
        feature2Title: 'Centralized profile management',
        feature2Text: 'Track CVs, application status, and interview schedules on one platform.',
        feature3Title: 'Transparent process',
        feature3Text: 'Evaluate and update results clearly, keeping a continuous connection with the school.',
        stepsTitle: 'SIMPLE PROCESS',
        steps: ['Register your company', 'Post job openings', 'Connect and select candidates'],
      },
      info: {
        eyebrow: 'INTERNCONNECT INFORMATION HUB',
        titleLine1: 'The latest information',
        titleHighlight: 'for you.',
        description: 'Stay updated on news, regulations, guidance, and useful internship information.',
        searchPlaceholder: 'Search information, news, and guidance...',
        categories: ['All information', 'Announcements', 'Internship regulations', 'Student guide', 'FAQ'],
        latestTitle: 'Latest updates from InternConnect',
        latest: [
          ['Internship registration schedule for semester I 2025', '25/06/2025'],
          ['InternConnect internship networking event 2025', '22/06/2025'],
          ['Guide to writing a standard internship report', '20/06/2025'],
        ],
        noticeTitle: 'Latest announcements',
        notices: ['Join to receive internship notifications', 'List of partner companies', 'Report submission deadline'],
      },
      guide: {
        eyebrow: 'HOW TO USE',
        titleLine1: 'Start really',
        titleHighlight: 'simply.',
        description: 'Choose your role to see the steps for using InternConnect.',
        studentTitle: 'Student guide',
        studentText: 'Complete your profile, upload your CV, find opportunities, apply, and track the 15 stages of the internship.',
        companyTitle: 'Company guide',
        companyText: 'Register your company, post job openings, process applications, and evaluate students.',
        schoolTitle: 'School guide',
        schoolText: 'Manage internship terms, companies, assign lecturers, and generate reports.',
        studentActions: ['Create and update profile', 'Find a suitable opportunity', 'Apply and track status', 'Submit internship journal and report'],
        companyActions: ['Send registration request', 'Post job openings', 'Interview and select', 'Evaluate internship process'],
        schoolActions: ['Set internship term', 'Approve companies', 'Assign lecturers', 'Monitor outcomes'],
        startNow: 'Get started',
      },
      contact: {
        eyebrow: 'CONTACT INTERNCONNECT',
        titleLine1: 'We are always',
        titleHighlight: 'ready to help.',
        description: 'Send questions or support requests and the InternConnect team will respond as soon as possible.',
        infoTitle: 'Contact information',
        infoText: 'Reach us through the channels below.',
        supportEmail: 'Support email',
        hotline: 'Hotline',
        address: 'Address',
        formTitle: 'Send a message',
        name: 'Full name',
        email: 'Email',
        subject: 'Topic',
        message: 'Content',
        send: 'Send request',
      },
      feature: 'Learn more',
      viewAll: 'View all',
      details: 'View details',
    },
    footer: {
      brandText: 'Internship matchmaking platform connecting students, schools, and businesses.',
      terms: 'Terms of use',
      privacy: 'Privacy policy',
      rights: 'All rights reserved.',
    },
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('internconnect_language') || 'vi'
    } catch {
      return 'vi'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('internconnect_language', language)
    } catch {
      // ignore storage errors
    }
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: translations[language] || translations.vi,
  }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    return { language: 'vi', setLanguage: () => {}, t: translations.vi }
  }

  return context
}

export { translations }
