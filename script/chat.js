// Modern front-end chat logic (no backend)
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');
const avatarHTML = `<div class="chat-avatar"><img src="../assets/src/profileImg1.jpg" alt="3D Krishna" /></div>`;

chatForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const msg = chatInput.value.trim();
  if (!msg) return;

  // Add user message row
  const userRow = document.createElement('div');
  userRow.className = 'chat-message-row user';
  userRow.innerHTML = `
    ${avatarHTML}
    <div class="chat-message user">${msg}</div>
  `;
  chatMessages.appendChild(userRow);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  chatInput.value = '';

  // Simulate bot reply
  setTimeout(() => {
    const botRow = document.createElement('div');
    botRow.className = 'chat-message-row';
    botRow.innerHTML = `
      ${avatarHTML}
      <div class="chat-message">🤖 Hello</div>
    `;
    chatMessages.appendChild(botRow);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 700);
});
