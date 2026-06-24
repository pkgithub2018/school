const students = [];

const form = document.getElementById('student-form');
const list = document.getElementById('student-list');

const renderStudents = () => {
  list.textContent = '';

  students.forEach((student) => {
    const item = document.createElement('li');
    item.textContent = `${student.name} (Grade: ${student.grade})`;
    list.appendChild(item);
  });
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get('name').toString().trim();
  const gradeValue = formData.get('grade').toString().trim();
  const grade = Number.parseInt(gradeValue, 10);

  if (!name || !Number.isInteger(grade) || grade < 1 || grade > 12) {
    return;
  }

  students.push({ name, grade });
  renderStudents();
  form.reset();
});
