const students = [];

const form = document.getElementById('student-form');
const list = document.getElementById('student-list');

const renderStudents = () => {
  list.innerHTML = '';

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
  const grade = formData.get('grade').toString().trim();

  if (!name || !grade) {
    return;
  }

  students.push({ name, grade });
  renderStudents();
  form.reset();
});
