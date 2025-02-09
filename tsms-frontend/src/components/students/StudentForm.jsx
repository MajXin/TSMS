// StudentForm component
// Purpose: Form for adding/editing student details
// Fields: name, class, roll number, DOB, parent contact, etc.

import Input from '../common/Input'
import Button from '../common/Button'

const StudentForm = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Add Student</h2>
      <form className="space-y-4">
        <Input
          label="Full Name"
          type="text"
          name="name"
          placeholder="Enter student's full name"
        />
        <Input
          label="Class"
          type="text"
          name="class"
          placeholder="Enter class"
        />
        <Input
          label="Roll Number"
          type="text"
          name="rollNo"
          placeholder="Enter roll number"
        />
        <Input
          label="Date of Birth"
          type="date"
          name="dob"
        />
        <Input
          label="Parent's Contact"
          type="tel"
          name="parentContact"
          placeholder="Enter parent's contact number"
        />
        <div className="flex justify-end space-x-3">
          <Button variant="secondary">Cancel</Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  )
}

export default StudentForm
