function fetchClasses() {
    return fetch('')
    .then(resp=> resp.json())
    .then(data => renderClasses(data))
}

function renderClasses(classes) {
    const class_list = document.querySelector('#class-list');
    classes.forEach(cs => {
      const li = document.createElement('li');
      li.innerHTML = cs.name;
      class_list.appendChild(li);
    });
  }

document.addEventListener('DOMContentLoaded', function() {
    fetchClasses();
  });