var currentPage = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
var aTag = document.querySelector(`a[href='${currentPage}']`) || document.querySelector(`a[href='index.html']`)
aTag.classList.add('active')