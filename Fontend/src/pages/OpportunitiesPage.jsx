import { ArrowLeft, Search } from 'lucide-react'
import { useMemo, useState, useEffect } from 'react'
import { Link } from 'react-router'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import internships from '../data/internships.json'

const SAVED_KEY = 'internconnect_saved_opportunities'
const VIETNAM_PROVINCES = [
  'TP. Hà Nội',
  'TP. Hồ Chí Minh',
  'TP. Đà Nẵng',
  'TP. Hải Phòng',
  'TP. Cần Thơ',
  'TP. Đồng Nai',
  'TP. Huế',
  ...[
    'An Giang',
    'Bắc Ninh',
    'Cà Mau',
    'Cao Bằng',
    'Đắk Lắk',
    'Điện Biên',
    'Đồng Tháp',
    'Gia Lai',
    'Hà Tĩnh',
    'Hưng Yên',
    'Khánh Hòa',
    'Lai Châu',
    'Lâm Đồng',
    'Lạng Sơn',
    'Lào Cai',
    'Nghệ An',
    'Ninh Bình',
    'Phú Thọ',
    'Quảng Ngãi',
    'Quảng Ninh',
    'Quảng Trị',
    'Sơn La',
    'Tây Ninh',
    'Thanh Hóa',
    'Thái Nguyên',
    'Tuyên Quang',
    'Vĩnh Long',
  ].sort((a, b) => a.localeCompare(b, 'vi'))
]

function readSaved() {
  try {
    return JSON.parse(localStorage.getItem(SAVED_KEY)) || []
  } catch {
    return []
  }
}

function OpportunitiesPage() {
  const { t, language } = useLanguage()
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState(t.opportunities.allLocations)
  const [sort, setSort] = useState('latest')
  const [saved, setSaved] = useState(readSaved)

  useEffect(() => {
    setLocation(t.opportunities.allLocations)
  }, [language, t.opportunities.allLocations])

  const locationOptions = [t.opportunities.allLocations, ...VIETNAM_PROVINCES]

  const items = useMemo(() => {
    const filtered = internships.filter((item) => {
      const matchesQuery = `${item.company} ${item.position} ${item.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase())
      const matchesLocation = location === t.opportunities.allLocations || item.location === location
      return matchesQuery && matchesLocation
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'company') return a.company.localeCompare(b.company)
      if (sort === 'oldest') return a.id - b.id
      return b.id - a.id
    })
  }, [query, location, sort, t.opportunities.allLocations])

  function toggleSaved(id) {
    const next = saved.includes(id) ? saved.filter((item) => item !== id) : [...saved, id]
    setSaved(next)
    localStorage.setItem(SAVED_KEY, JSON.stringify(next))
  }

  return <>
    <Header activeItem={t.nav.opportunities} />
    <main className="public-page">
      <section className="public-list-hero">
        <div className="mx-auto max-w-6xl">
          <div className="public-opportunities-hero-content">
            <div>
              <Link to="/" className="inline-flex items-center gap-1 text-sm font-bold text-[#0757c9]"><ArrowLeft size={15} /> {t.common.home}</Link>
              <h1 className="mt-5 text-4xl font-extrabold text-[#123a8b]">{t.opportunities.title}</h1>
              <form className="public-search-box" onSubmit={(event) => event.preventDefault()}>
                <Search size={17} />
                <input placeholder={t.opportunities.searchPlaceholder} value={query} onChange={(e) => setQuery(e.target.value)} />
                <button type="submit">{t.common.search}</button>
              </form>
              <p className="mt-2 max-w-xl text-sm leading-6 text-[#6684a8]">{t.opportunities.description}</p>
            </div>
            <img
              className="public-opportunities-person"
              src="/opportunities-person.png?v=2"
              alt="Sinh viên khám phá cơ hội thực tập"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="public-eyebrow">KHÁM PHÁ CƠ HỘI</p>
            <h2 className="text-2xl font-extrabold text-[#123a8b]">{t.opportunities.findLabel} {items.length} {t.opportunities.resultLabel}</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <label className="flex items-center gap-2 rounded-md border border-[#d8e3f0] bg-white px-3 py-2 text-xs font-semibold text-[#526b8d]">
              <span>{t.opportunities.location}</span>
              <select value={location} onChange={(event) => setLocation(event.target.value)} className="bg-transparent outline-none">
                {locationOptions.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </label>
            <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-md border border-[#d8e3f0] bg-white px-3 py-2 text-xs font-semibold text-[#526b8d]">
              <option value="latest">{t.opportunities.sortLatest}</option>
              <option value="oldest">{t.opportunities.sortOldest}</option>
              <option value="company">{t.opportunities.sortCompany}</option>
            </select>
          </div>
        </div>

        {items.length ? <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{items.map((item) => <JobCard key={item.id} internship={item} isSaved={saved.includes(item.id)} onSave={toggleSaved} />)}</div> : <div className="rounded-xl border border-dashed border-[#d8e3f0] bg-white p-8 text-center text-sm text-[#597196]">Không có cơ hội nào phù hợp với bộ lọc hiện tại.</div>}
      </section>
    </main>
    <Footer />
  </>
}

function JobCard({ internship, isSaved, onSave }) {
  return <article className="public-job-card">
    <div className="public-job-head">
      <div className="public-job-logo">{internship.logo}</div>
      <button type="button" className={`public-job-save ${isSaved ? 'saved' : ''}`} onClick={() => onSave(internship.id)} aria-label={isSaved ? 'Bỏ lưu cơ hội' : 'Lưu cơ hội'}>
        {isSaved ? '♥' : '♡'}
      </button>
    </div>
    <h3>{internship.position}</h3>
    <p className="public-job-company">{internship.company}</p>
    <p className="public-job-meta">{internship.location}</p>
    <div className="public-job-tags">{internship.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    <Link to="/" className="public-job-link">Xem chi tiết</Link>
  </article>
}

export default OpportunitiesPage
