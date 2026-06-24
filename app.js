const students = [];
const MIN_GRADE = 1;
const MAX_GRADE = 12;

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
  const grade = parseInt(gradeValue, 10);

  if (
    !name ||
    !gradeValue ||
    Number.isNaN(grade) ||
    grade < MIN_GRADE ||
    grade > MAX_GRADE
  ) {
    feedback.textContent = `Please enter a name and a grade from ${MIN_GRADE} to ${MAX_GRADE}.`;
    return;
  }

  feedback.textContent = '';
  students.push({ name, grade });
  appendStudent({ name, grade });
  form.reset();
});
