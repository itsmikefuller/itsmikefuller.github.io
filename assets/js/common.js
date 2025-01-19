function loadCommonSections() {
  fetch('../common/head.html')
    .then(response => response.text())
    .then(data => {
      document.head.innerHTML += data;
    });
  
  // Load the common header
  fetch('../common/header.html')
    .then(response => response.text())
    .then(data => document.getElementById("header-placeholder").innerHTML = data);

  // Load the common footer
  fetch('../common/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById("footer-placeholder").innerHTML = data);

  // Load the common head content (this step should happen earlier)
  
}