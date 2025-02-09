import { Link } from 'react-router-dom'
import {
  HomeIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  BuildingLibraryIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Students', href: '/students', icon: UserGroupIcon },
  { name: 'Teachers', href: '/teachers', icon: AcademicCapIcon },
  { name: 'Classes', href: '/classes', icon: ClipboardDocumentListIcon },
  { name: 'Facilities', href: '/facilities', icon: BuildingLibraryIcon },
  { name: 'Reports', href: '/reports', icon: ChartBarIcon },
]

const Sidebar = () => {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-gray-800">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white text-xl font-bold">TSMS</span>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              <item.icon className="mr-4 h-6 w-6" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar 