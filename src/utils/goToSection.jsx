/**
 * Scrolls to a section on the homepage by id. If we're not already on
 * the homepage, navigates there first and passes the target id via
 * router state so Home can pick it up after it mounts.
 */
export const goToSection = (navigate, pathname, id) => {
  if (pathname === '/') {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    navigate('/', { state: { scrollTo: id } });
  }
};
