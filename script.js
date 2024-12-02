document.getElementById('reveal-btn').addEventListener('click', function() {
  const hiddenMessage = document.getElementById('hidden-message');
  hiddenMessage.style.display = 'block';
  this.style.display = 'none';
});
