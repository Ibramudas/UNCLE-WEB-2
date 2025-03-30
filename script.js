// Add event listener to call-to-action button
document.querySelector('call-to-action-button').addEventListener('click', function() {
    alert('Get started button clicked!');
  });
  
  // Add event listener to social media links
  document.querySelectorAll('footer social-media-links a').forEach(function(link) {
    link.addEventListener('click', function() {
      window.open(link.href, '_blank');
    });
  });