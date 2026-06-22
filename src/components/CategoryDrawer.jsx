import { useLocation, useNavigate } from 'react-router-dom';
import { CATEGORY_SECTIONS } from '../utils/categorySections';
import { goToSection } from '../utils/goToSection';
import { CloseIcon } from './icons';
import './CategoryDrawer.css';

const CategoryDrawer = ({ open, onClose, onSelect }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelect = (id, label) => {
    if (id) {
      goToSection(navigate, location.pathname, id);
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    onSelect?.(label);
    onClose();
  };

  return (
    <>
      <div
        className={`drawer-overlay ${open ? 'is-open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className={`category-drawer ${open ? 'is-open' : ''}`}>
        <div className="category-drawer-header">
          <h3>All Categories</h3>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close menu">
            <CloseIcon size={16} />
          </button>
        </div>
        <ul className="category-drawer-list">
          <li>
            <button onClick={() => handleSelect(null, 'All Categories')}>All Categories</button>
          </li>
          {CATEGORY_SECTIONS.map((section) => (
            <li key={section.id}>
              <button onClick={() => handleSelect(section.id, section.label)}>
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default CategoryDrawer;
