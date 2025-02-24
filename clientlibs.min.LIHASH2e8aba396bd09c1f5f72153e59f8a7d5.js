window.addEventListener('load', function() {
  document.querySelectorAll('#firstpanel, #secondrightpanel, #secondleftpanel, #thirdrightpanel, #thirdleftpanel').forEach((el) => {
    el.classList.add('hidepanel');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        modify(entry.target);
      }
    });
  }, {
    root: null, // Scope observer to viewport
    rootMargin: '1px', // Some margin helps to avoid rapidly flashing elements
    threshold: 0.5,
  });

  function modify(el) {
    if (el.id === 'firstpanel' || el.id === 'secondleftpanel' || el.id === 'thirdrightpanel') {
      if (!el.classList.contains('slideuppanel')) {
        el.classList.remove('hidepanel');
        el.classList.add('slideuppanel');
      }
    }
    if (el.id === 'secondrightpanel' || el.id === 'thirdleftpanel') {
      if (!el.classList.contains('slidedownpanel')) {
        el.classList.remove('hidepanel');
        el.classList.add('slidedownpanel');
      }
    }
  }

  function revert(el) {
    if (el.id === 'firstpanel' || el.id === 'secondleftpanel' || el.id === 'thirdrightpanel') {
      if (el.classList.contains('slideuppanel')) {
        el.classList.remove('slideuppanel');
      }
    }
    if (el.id === 'secondrightpanel' || el.id === 'thirdleftpanel') {
      if (el.classList.contains('slidedownpanel')) {
        el.classList.remove('slidedownpanel');
      }
    }
  }


  observer.observe(document.querySelector('#firstpanel'));
  setTimeout(observer.observe(document.querySelector('#secondrightpanel')), 100);
  setTimeout(observer.observe(document.querySelector('#secondleftpanel')), 100);
  setTimeout(observer.observe(document.querySelector('#thirdrightpanel')), 250);
  setTimeout(observer.observe(document.querySelector('#thirdleftpanel')), 250);


});
