// Students page component
// Purpose: Main student management page
// Contains: StudentList, with options to add/edit students

import StudentList from '../components/students/StudentList'

const Students = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Student Management</h1>
      <StudentList />
    </div>
  )
}

export default Students
