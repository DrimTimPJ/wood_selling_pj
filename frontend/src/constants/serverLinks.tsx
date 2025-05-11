const API_BASE = 'http://localhost:1488'

const routes = {
  auth: {
    login: `${API_BASE}/auth/login`,
  },
  questions: {
    base: `${API_BASE}/questions`,
  },
  wood: {
    base: `${API_BASE}/woods`,
  },
  ourWork: {
    base: `${API_BASE}/our-work`,
  },
}

export default routes
