(()=>{var __webpack_modules__={75:()=>{eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nwindow.addEventListener('DOMContentLoaded', function () {\n  addEventListeners();\n  function addEventListeners() {\n    var $toggleElements = document.getElementsByClassName('collapsible-section-button');\n    var _iterator = _createForOfIteratorHelper($toggleElements),\n      _step;\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var $element = _step.value;\n        $element.addEventListener('click', toggleCollapsibleSection);\n        $element.addEventListener('keydown', function (event) {\n          if (event.target.tagName.toLowerCase() !== 'button' && event.key === 'Enter') {\n            toggleCollapsibleSection(event);\n          }\n        });\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  }\n  function toggleCollapsibleSection(e) {\n    var sectionId = e.target.getAttribute('data-collapsible-section-id');\n    var $sectionToToggle = document.getElementById(sectionId);\n    var sectionIdAuxiliary = sectionId + '-aux';\n    var $sectionToToggleAuxiliary = document.getElementById(sectionIdAuxiliary);\n    $('#' + sectionId).slideToggle('fast');\n    $('#' + sectionIdAuxiliary).slideToggle('fast');\n    if ($sectionToToggle.classList.contains('collapsible-section__hidden')) {\n      $sectionToToggle.classList.remove('collapsible-section__hidden');\n      e.target.innerText = $sectionToToggle.getAttribute('data-close-translation');\n      if ($sectionToToggleAuxiliary) {\n        $sectionToToggleAuxiliary.classList.remove('collapsible-section__hidden');\n      }\n    } else {\n      $sectionToToggle.classList.add('collapsible-section__hidden');\n      e.target.innerText = $sectionToToggle.getAttribute('data-open-translation');\n      if ($sectionToToggleAuxiliary) {\n        $sectionToToggleAuxiliary.classList.add('collapsible-section__hidden');\n      }\n    }\n  }\n\n  // This code snippet will prevent changing the innerHTML of the vilt list without re-adding listeners\n  $container = window.document.getElementById('vilt-sessions-container');\n  if ($container) {\n    observer = new MutationObserver(function () {\n      addEventListeners();\n    });\n    observer.observe($container, {\n      characterData: false,\n      childList: true,\n      attributes: false\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzUuanMiLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCIkdG9nZ2xlRWxlbWVudHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiJGVsZW1lbnQiLCJ2YWx1ZSIsInRvZ2dsZUNvbGxhcHNpYmxlU2VjdGlvbiIsImV2ZW50IiwidGFyZ2V0IiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwia2V5IiwiZXJyIiwiZSIsImYiLCJzZWN0aW9uSWQiLCJnZXRBdHRyaWJ1dGUiLCIkc2VjdGlvblRvVG9nZ2xlIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWN0aW9uSWRBdXhpbGlhcnkiLCIkc2VjdGlvblRvVG9nZ2xlQXV4aWxpYXJ5IiwiJCIsInNsaWRlVG9nZ2xlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJpbm5lclRleHQiLCJhZGQiLCIkY29udGFpbmVyIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImNoYXJhY3RlckRhdGEiLCJjaGlsZExpc3QiLCJhdHRyaWJ1dGVzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3Vyc2UtcGxhdGZvcm0vLi93ZWItcmVzb3VyY2VzL2pzL2NvbGxhcHNpYmxlLXNlY3Rpb24uanM/YmI5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgJHRvZ2dsZUVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29sbGFwc2libGUtc2VjdGlvbi1idXR0b24nKTtcbiAgICBmb3IgKGNvbnN0ICRlbGVtZW50IG9mICR0b2dnbGVFbGVtZW50cykge1xuICAgICAgJGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVDb2xsYXBzaWJsZVNlY3Rpb24pO1xuXG4gICAgICAkZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnYnV0dG9uJyAmJiBldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICB0b2dnbGVDb2xsYXBzaWJsZVNlY3Rpb24oZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVDb2xsYXBzaWJsZVNlY3Rpb24oZSkge1xuICAgIGNvbnN0IHNlY3Rpb25JZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xsYXBzaWJsZS1zZWN0aW9uLWlkJyk7XG4gICAgY29uc3QgJHNlY3Rpb25Ub1RvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb25JZCk7XG4gICAgY29uc3Qgc2VjdGlvbklkQXV4aWxpYXJ5ID0gc2VjdGlvbklkICsgJy1hdXgnO1xuICAgIGNvbnN0ICRzZWN0aW9uVG9Ub2dnbGVBdXhpbGlhcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWN0aW9uSWRBdXhpbGlhcnkpO1xuXG4gICAgJCgnIycgKyBzZWN0aW9uSWQpLnNsaWRlVG9nZ2xlKCdmYXN0Jyk7XG4gICAgJCgnIycgKyBzZWN0aW9uSWRBdXhpbGlhcnkpLnNsaWRlVG9nZ2xlKCdmYXN0Jyk7XG5cbiAgICBpZiAoJHNlY3Rpb25Ub1RvZ2dsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbGxhcHNpYmxlLXNlY3Rpb25fX2hpZGRlbicpKSB7XG4gICAgICAkc2VjdGlvblRvVG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNpYmxlLXNlY3Rpb25fX2hpZGRlbicpO1xuICAgICAgZS50YXJnZXQuaW5uZXJUZXh0ID0gJHNlY3Rpb25Ub1RvZ2dsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2xvc2UtdHJhbnNsYXRpb24nKTtcbiAgICAgIGlmICgkc2VjdGlvblRvVG9nZ2xlQXV4aWxpYXJ5KSB7XG4gICAgICAgICRzZWN0aW9uVG9Ub2dnbGVBdXhpbGlhcnkuY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2libGUtc2VjdGlvbl9faGlkZGVuJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICRzZWN0aW9uVG9Ub2dnbGUuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2libGUtc2VjdGlvbl9faGlkZGVuJyk7XG4gICAgICBlLnRhcmdldC5pbm5lclRleHQgPSAkc2VjdGlvblRvVG9nZ2xlLmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXRyYW5zbGF0aW9uJyk7XG4gICAgICBpZiAoJHNlY3Rpb25Ub1RvZ2dsZUF1eGlsaWFyeSkge1xuICAgICAgICAkc2VjdGlvblRvVG9nZ2xlQXV4aWxpYXJ5LmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNpYmxlLXNlY3Rpb25fX2hpZGRlbicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoaXMgY29kZSBzbmlwcGV0IHdpbGwgcHJldmVudCBjaGFuZ2luZyB0aGUgaW5uZXJIVE1MIG9mIHRoZSB2aWx0IGxpc3Qgd2l0aG91dCByZS1hZGRpbmcgbGlzdGVuZXJzXG4gICRjb250YWluZXIgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpbHQtc2Vzc2lvbnMtY29udGFpbmVyJyk7XG5cbiAgaWYgKCRjb250YWluZXIpIHtcbiAgICBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfSk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSgkY29udGFpbmVyLCB7IGNoYXJhY3RlckRhdGE6IGZhbHNlLCBjaGlsZExpc3Q6IHRydWUsIGF0dHJpYnV0ZXM6IGZhbHNlIH0pO1xuICB9XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7O0FBQUFBLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUN0REMsaUJBQWlCLENBQUMsQ0FBQztFQUNuQixTQUFTQSxpQkFBaUJBLENBQUEsRUFBRztJQUMzQixJQUFNQyxlQUFlLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsNEJBQTRCLENBQUM7SUFBQyxJQUFBQyxTQUFBLEdBQUFDLDBCQUFBLENBQy9ESixlQUFlO01BQUFLLEtBQUE7SUFBQTtNQUF0QyxLQUFBRixTQUFBLENBQUFHLENBQUEsTUFBQUQsS0FBQSxHQUFBRixTQUFBLENBQUFJLENBQUEsSUFBQUMsSUFBQSxHQUF3QztRQUFBLElBQTdCQyxRQUFRLEdBQUFKLEtBQUEsQ0FBQUssS0FBQTtRQUNqQkQsUUFBUSxDQUFDWCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVhLHdCQUF3QixDQUFDO1FBRTVERixRQUFRLENBQUNYLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFDYyxLQUFLLEVBQUs7VUFDOUMsSUFBSUEsS0FBSyxDQUFDQyxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDLENBQUMsS0FBSyxRQUFRLElBQUlILEtBQUssQ0FBQ0ksR0FBRyxLQUFLLE9BQU8sRUFBRTtZQUM1RUwsd0JBQXdCLENBQUNDLEtBQUssQ0FBQztVQUNqQztRQUNGLENBQUMsQ0FBQztNQUNKO0lBQUMsU0FBQUssR0FBQTtNQUFBZCxTQUFBLENBQUFlLENBQUEsQ0FBQUQsR0FBQTtJQUFBO01BQUFkLFNBQUEsQ0FBQWdCLENBQUE7SUFBQTtFQUNIO0VBRUEsU0FBU1Isd0JBQXdCQSxDQUFDTyxDQUFDLEVBQUU7SUFDbkMsSUFBTUUsU0FBUyxHQUFHRixDQUFDLENBQUNMLE1BQU0sQ0FBQ1EsWUFBWSxDQUFDLDZCQUE2QixDQUFDO0lBQ3RFLElBQU1DLGdCQUFnQixHQUFHckIsUUFBUSxDQUFDc0IsY0FBYyxDQUFDSCxTQUFTLENBQUM7SUFDM0QsSUFBTUksa0JBQWtCLEdBQUdKLFNBQVMsR0FBRyxNQUFNO0lBQzdDLElBQU1LLHlCQUF5QixHQUFHeEIsUUFBUSxDQUFDc0IsY0FBYyxDQUFDQyxrQkFBa0IsQ0FBQztJQUU3RUUsQ0FBQyxDQUFDLEdBQUcsR0FBR04sU0FBUyxDQUFDLENBQUNPLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDdENELENBQUMsQ0FBQyxHQUFHLEdBQUdGLGtCQUFrQixDQUFDLENBQUNHLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFFL0MsSUFBSUwsZ0JBQWdCLENBQUNNLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLDZCQUE2QixDQUFDLEVBQUU7TUFDdEVQLGdCQUFnQixDQUFDTSxTQUFTLENBQUNFLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQztNQUNoRVosQ0FBQyxDQUFDTCxNQUFNLENBQUNrQixTQUFTLEdBQUdULGdCQUFnQixDQUFDRCxZQUFZLENBQUMsd0JBQXdCLENBQUM7TUFDNUUsSUFBSUkseUJBQXlCLEVBQUU7UUFDN0JBLHlCQUF5QixDQUFDRyxTQUFTLENBQUNFLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQztNQUMzRTtJQUNGLENBQUMsTUFBTTtNQUNMUixnQkFBZ0IsQ0FBQ00sU0FBUyxDQUFDSSxHQUFHLENBQUMsNkJBQTZCLENBQUM7TUFDN0RkLENBQUMsQ0FBQ0wsTUFBTSxDQUFDa0IsU0FBUyxHQUFHVCxnQkFBZ0IsQ0FBQ0QsWUFBWSxDQUFDLHVCQUF1QixDQUFDO01BQzNFLElBQUlJLHlCQUF5QixFQUFFO1FBQzdCQSx5QkFBeUIsQ0FBQ0csU0FBUyxDQUFDSSxHQUFHLENBQUMsNkJBQTZCLENBQUM7TUFDeEU7SUFDRjtFQUNGOztFQUVBO0VBQ0FDLFVBQVUsR0FBR3BDLE1BQU0sQ0FBQ0ksUUFBUSxDQUFDc0IsY0FBYyxDQUFDLHlCQUF5QixDQUFDO0VBRXRFLElBQUlVLFVBQVUsRUFBRTtJQUNkQyxRQUFRLEdBQUcsSUFBSUMsZ0JBQWdCLENBQUMsWUFBWTtNQUMxQ3BDLGlCQUFpQixDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDO0lBQ0ZtQyxRQUFRLENBQUNFLE9BQU8sQ0FBQ0gsVUFBVSxFQUFFO01BQUVJLGFBQWEsRUFBRSxLQUFLO01BQUVDLFNBQVMsRUFBRSxJQUFJO01BQUVDLFVBQVUsRUFBRTtJQUFNLENBQUMsQ0FBQztFQUM1RjtBQUNGLENBQUMsQ0FBQyIsImlnbm9yZUxpc3QiOltdfQ==\n//# sourceURL=webpack-internal:///75\n")}},__webpack_exports__={};__webpack_modules__[75]()})();