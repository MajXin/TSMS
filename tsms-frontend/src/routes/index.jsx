import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Students from '../pages/Students'
import Teachers from '../pages/Teachers'
import Classes from '../pages/Classes'
import Tests from '../pages/Tests'
import Facilities from '../pages/Facilities'
import Reports from '../pages/Reports'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/students" element={<Students />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/tests" element={<Tests />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  )
}

export default AppRoutes 