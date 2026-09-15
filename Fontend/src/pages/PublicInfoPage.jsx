import { ArrowRight, Building2, CheckCircle2, ChevronRight, FileText, HelpCircle, Megaphone, Search, ShieldCheck, UsersRound } from 'lucide-react'
import { Link } from 'react-router'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useLanguage } from '../contexts/LanguageContext'

function PublicInfoPage({ type }) {
  if (type === 'companies') return <CompaniesPage />
  if (type === 'guide') return <GuidePage />
  if (type === 'contact') return <ContactPage />
  return <InformationPage />
}

function CompaniesPage() {
  const { t } = useLanguage()
  const features = [
    { icon: <UsersRound />, title: t.public.company.feature1Title, text: t.public.company.feature1Text },
    { icon: <FileText />, title: t.public.company.feature2Title, text: t.public.company.feature2Text },
    { icon: <ShieldCheck />, title: t.public.company.feature3Title, text: t.public.company.feature3Text },
  ]

  return <>
    <Header activeItem={t.nav.companies} />
    <main className="public-page">
      <section className="public-company-hero">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_.75fr] lg:px-10">
          <div>
            <p className="public-eyebrow">{t.public.company.eyebrow}</p>
            <h1>{t.public.company.titleLine1}<br /><span>{t.public.company.titleHighlight}</span></h1>
            <p>{t.public.company.description}</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/login" className="public-primary-button">{t.public.company.primaryCta} <ArrowRight size={15} /></Link>
              <a href="#benefits" className="public-outline-button">{t.public.company.secondaryCta}</a>
            </div>
          </div>
          <div className="public-company-visual">
            <Building2 size={92} />
            <div><b>800+</b><span>{t.home.stats.partners}</span></div>
          </div>
        </div>
      </section>

      <section id="benefits" className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="public-centered-heading">
          <small>{t.public.company.solutionsLabel}</small>
          <h2>{t.public.company.solutionsTitle}</h2>
          <p>{t.public.company.solutionsText}</p>
        </div>
        <div className="public-feature-grid">
          {features.map((feature) => (
            <Feature key={feature.title} icon={feature.icon} title={feature.title} text={feature.text} />
          ))}
        </div>
      </section>

      <section className="public-company-steps">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
          <div className="public-centered-heading">
            <small>{t.public.company.stepsTitle}</small>
            <h2>{t.public.company.stepsTitle}</h2>
          </div>
          <div className="public-step-grid">
            {t.public.company.steps.map((item, index) => (
              <div key={item}><span>0{index + 1}</span><h3>{item}</h3></div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
}

function InformationPage() {
  const { t } = useLanguage()

  return <>
    <Header activeItem={t.nav.information} />
    <main className="public-page">
      <section className="public-info-hero">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
          <p className="public-eyebrow">{t.public.info.eyebrow}</p>
          <h1>{t.public.info.titleLine1}<br /><span>{t.public.info.titleHighlight}</span></h1>
          <p>{t.public.info.description}</p>
          <div className="public-info-search">
            <Search size={17} />
            <input placeholder={t.public.info.searchPlaceholder} />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-7 px-5 py-10 sm:px-8 lg:grid-cols-[220px_1fr] lg:px-10">
        <aside className="public-info-sidebar">
          <b>{t.common.information}</b>
          {t.public.info.categories.map((label, index) => (
            <Link className={index === 0 ? 'active' : ''} to="/information" key={label}><FileText size={15} />{label}</Link>
          ))}
        </aside>

        <div>
          <div className="home-section-heading">
            <div>
              <small>{t.public.info.latestTitle.toUpperCase()}</small>
              <h2>{t.public.info.latestTitle}</h2>
            </div>
            <a href="/information">{t.public.info.viewAll || 'View all'} <ArrowRight size={15} /></a>
          </div>
          <div className="public-news-grid">
            {t.public.info.latest.map(([title, date], index) => (
              <article className="public-news-card" key={title}>
                <div className={`public-news-image news-${index}`}><FileText size={35} /></div>
                <span>{date}</span>
                <h3>{title}</h3>
                <p>{t.public.info.description}</p>
                <a href="/information">{t.public.info.details || 'View details'} <ChevronRight size={13} /></a>
              </article>
            ))}
          </div>

          <div className="public-info-bottom">
            <div>
              <h3><Megaphone size={17} /> {t.public.info.noticeTitle}</h3>
              {t.public.info.notices.map((item) => <p key={item}><CheckCircle2 size={13} /> {item}</p>)}
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
}

function GuidePage() {
  const { t } = useLanguage()
  const cards = [
    { icon: <UsersRound />, title: t.public.guide.studentTitle, text: t.public.guide.studentText, list: t.public.guide.studentActions },
    { icon: <Building2 />, title: t.public.guide.companyTitle, text: t.public.guide.companyText, list: t.public.guide.companyActions },
    { icon: <ShieldCheck />, title: t.public.guide.schoolTitle, text: t.public.guide.schoolText, list: t.public.guide.schoolActions },
  ]

  return <>
    <Header activeItem={t.nav.guide} />
    <main className="public-page">
      <section className="public-info-hero">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
          <p className="public-eyebrow">{t.public.guide.eyebrow}</p>
          <h1>{t.public.guide.titleLine1}<br /><span>{t.public.guide.titleHighlight}</span></h1>
          <p>{t.public.guide.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="public-guide-grid">
          {cards.map(({ icon, title, text, list }) => (
            <article key={title}>
              <div className="public-guide-icon">{icon}</div>
              <h2>{title}</h2>
              <p>{text}</p>
              <ol>{list.map((item) => <li key={item}>{item}</li>)}</ol>
              <Link to="/login">{t.public.guide.startNow} <ArrowRight size={14} /></Link>
            </article>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </>
}

function ContactPage() {
  const { t } = useLanguage()

  return <>
    <Header activeItem={t.nav.contact} />
    <main className="public-page">
      <section className="public-info-hero">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
          <p className="public-eyebrow">{t.public.contact.eyebrow}</p>
          <h1>{t.public.contact.titleLine1}<br /><span>{t.public.contact.titleHighlight}</span></h1>
          <p>{t.public.contact.description}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-12 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
        <div className="public-contact-info">
          <h2>{t.public.contact.infoTitle}</h2>
          <p>{t.public.contact.infoText}</p>
          <div><b>{t.public.contact.supportEmail}</b><span>support@internconnect.vn</span></div>
          <div><b>{t.public.contact.hotline}</b><span>1900 1234</span></div>
          <div><b>{t.public.contact.address}</b><span>Khoa Công nghệ thông tin, Hà Nội</span></div>
        </div>

        <form className="public-contact-form" onSubmit={(event) => event.preventDefault()}>
          <h2>{t.public.contact.formTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <label>{t.public.contact.name}<input required placeholder={t.public.contact.name} /></label>
            <label>{t.public.contact.email}<input required type="email" placeholder="you@example.com" /></label>
          </div>
          <label>{t.public.contact.subject}<input required placeholder={t.public.contact.subject} /></label>
          <label>{t.public.contact.message}<textarea required placeholder={t.public.contact.message} /></label>
          <button type="submit">{t.public.contact.send} <ArrowRight size={15} /></button>
        </form>
      </section>
    </main>
    <Footer />
  </>
}

function Feature({ icon, title, text }) {
  const { t } = useLanguage()
  return <article className="public-feature-card"><div>{icon}</div><h3>{title}</h3><p>{text}</p><a href="/guide">{t.public.feature} <ArrowRight size={14} /></a></article>
}

export default PublicInfoPage
