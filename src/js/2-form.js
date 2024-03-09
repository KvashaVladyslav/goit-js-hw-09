const localStorageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', event => {
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const data = JSON.stringify({ email, message });
  localStorage.setItem(localStorageKey, data);
});

const jsn = localStorage.getItem(localStorageKey) ?? '';
try {
  const data = JSON.parse(jsn);
  form.elements.email.value = data.email;
  form.elements.message.value = data.message;
} catch {
  ('');
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const userInfo = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  if (userInfo.email === '' || userInfo.message === '') {
    alert('fill up all fields on form');
  } else {
    console.log(userInfo);
  }
  localStorage.removeItem(localStorageKey);
  form.reset();
});
