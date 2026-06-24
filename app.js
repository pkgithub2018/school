const students = [];

const form = document.getElementById('student-form');
const list = document.getElementById('student-list');
const feedback = document.getElementById('form-feedback');

const appendStudent = (student) => {
  const item = document.createElement('li');
  item.textContent = `${student.name} (Grade: ${student.grade})`;
  list.appendChild(item);
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = (formData.get('name') ?? '').trim();
  const gradeValue = (formData.get('grade') ?? '').trim();
  const grade = Number.parseInt(gradeValue, 10);

  if (!name || !gradeValue || Number.isNaN(grade) || grade < 1 || grade > 12) {
    feedback.textContent = 'Please enter a name and a grade from 1 to 12.';
    return;
  }

  feedback.textContent = '';
  students.push({ name, grade });
  appendStudent({ name, grade });
  form.reset();
});
