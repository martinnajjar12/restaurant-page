function contactPage() {
  const container = document.createElement('div');
  container.className = 'container mt-5';
  const heading = document.createElement('h2');
  heading.textContent = 'Contact Us';
  heading.className = 'text-center mb-5';
  const submit = document.createElement('button');
  submit.setAttribute('type', 'button');
  submit.className = 'btn btn-primary';
  submit.textContent = 'Submit';
  const form = document.createElement('form');
  for (let i = 0; i < 2; i++) {
    const wrapper = document.createElement('div');
    wrapper.className = 'mb-3';
    const label = document.createElement('label');
    label.className = 'form-label';
    if (i == 0) {
      label.setAttribute('for', 'email');
      label.textContent = 'Eamil adress';
      const emailField = document.createElement('input');
      emailField.setAttribute('type', 'email');
      emailField.setAttribute('id', 'email');
      emailField.setAttribute('placeholder', 'name@example.com');
      emailField.className = 'form-control';
      wrapper.appendChild(label);
      wrapper.appendChild(emailField);
    } else {
      label.setAttribute('for', 'message');
      label.textContent = 'Enter your message';
      const messageField = document.createElement('textarea');
      messageField.setAttribute('id', 'message');
      messageField.setAttribute('rows', '3');
      messageField.className = 'form-control';
      wrapper.appendChild(label);
      wrapper.appendChild(messageField);
    }
    form.appendChild(wrapper);
  }
  form.appendChild(submit);
  container.appendChild(heading);
  container.appendChild(form);

  return container;
}

module.exports = contactPage();
