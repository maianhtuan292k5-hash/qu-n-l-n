import { Globe2, Mail, MessageCircle, Send } from 'lucide-react'
import { Link } from 'react-router'
import { useLanguage } from '../../contexts/LanguageContext'

function Footer() {
  const { t } = useLanguage()

  return <footer className="public-footer"><div className="public-footer-main"><Link to="/" className="public-footer-brand"><span className="public-footer-mark">◆</span><span><b>INTERNCONNECT</b><small>{t.footer.brandText}</small></span></Link><div className="public-footer-social"><a href="https://facebook.com" aria-label="Facebook"><Globe2 size={13} /></a><a href="https://linkedin.com" aria-label="LinkedIn"><MessageCircle size={13} /></a><a href="https://youtube.com" aria-label="Youtube"><Send size={13} /></a><a href="mailto:support@internconnect.vn" aria-label="Email"><Mail size={13} /></a></div><div className="public-footer-meta"><div><Link to="/information">{t.footer.terms}</Link><i /> <Link to="/information">{t.footer.privacy}</Link></div><small>© 2025 InternConnect. {t.footer.rights}</small></div></div></footer>
}

export default Footer
