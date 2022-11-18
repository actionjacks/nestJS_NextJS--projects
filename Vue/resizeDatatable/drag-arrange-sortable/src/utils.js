import { IE11OrLess } from './Brower.js'

const captureMode = {
	capture: false,
	passive: false
}

const R_SPACE = /\s+/g

export const CSSTRANSITIONS = ['-webkit-transition', '-moz-transition', '-ms-transition', '-o-transition', 'transition']
export const CSSTRANSFORMS = ['-webkit-transform', '-moz-transform', '-ms-transform', '-o-transform', 'transform']
export const SUPPORTPASSIVE = supportPassive()

/**
 * set transition style
 * @param {HTMLElement} el 
 * @param {String | Function} transition 
 */
export function setTransition(el, transition) {
  if (transition) {
    if (transition === 'none') CSSTRANSITIONS.forEach(ts => css(el, ts, 'none'))
    else CSSTRANSITIONS.forEach(ts => css(el, ts, `${ts.split('transition')[0]}transform ${transition}`))
  }
  else CSSTRANSITIONS.forEach(ts => css(el, ts, ''))
}

/**
 * set transform style
 * @param {HTMLElement} el 
 * @param {String} transform 
 */
export function setTransform(el, transform) {
  if (transform) CSSTRANSFORMS.forEach(tf => css(el, tf, `${tf.split('transform')[0]}${transform}`))
  else CSSTRANSFORMS.forEach(tf => css(el, tf, ''))
}

/**
 * detect passive event support
 */
export function supportPassive() {
  // https://github.com/Modernizr/Modernizr/issues/1894
  let supportPassive = false
  document.addEventListener('checkIfSupportPassive', null, {
    get passive() {
      supportPassive = true
      return true
    }
  })
  return supportPassive
}

/**
* add specified event listener
* @param {HTMLElement} el 
* @param {String} event 
* @param {Function} fn 
* @param {Boolean} sp
*/
export function on(el, event, fn) {
  if (window.addEventListener) {
    el.addEventListener(event, fn, (SUPPORTPASSIVE || !IE11OrLess) ? captureMode : false)
  } else if (window.attachEvent) {
    el.attachEvent('on' + event, fn)
  }
}

/**
* remove specified event listener
* @param {HTMLElement} el 
* @param {String} event 
* @param {Function} fn 
* @param {Boolean} sp
*/
export function off(el, event, fn) {
  if (window.removeEventListener) {
    el.removeEventListener(event, fn, (SUPPORTPASSIVE || !IE11OrLess) ? captureMode : false)
  } else if (window.detachEvent) {
    el.detachEvent('on' + event, fn)
  }
}

/**
 * get element's offetTop
 * @param {HTMLElement} el 
 */
export function getOffset(el) {
  let result = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  }
  result.height = el.offsetHeight
  result.width = el.offsetWidth
  result.top = el.offsetTop
  result.left = el.offsetLeft

  let parent = el.offsetParent

  while (parent !== null) {
    result.top += parent.offsetTop
    result.left += parent.offsetLeft
    parent = parent.offsetParent
  }

  return result
}


/**
 * get scroll element
 * @param {HTMLElement} el 
 * @param {Boolean} includeSelf whether to include the passed element
 * @returns {HTMLElement} scroll element
 */
export function getParentAutoScrollElement(el, includeSelf) {
	// skip to window
	if (!el || !el.getBoundingClientRect) return getWindowScrollingElement()

	let elem = el
	let gotSelf = false
	do {
		// we don't need to get elem css if it isn't even overflowing in the first place (performance)
		if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
			let elemCSS = css(elem)
			if (
				elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') ||
				elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')
			) {
				if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement()

				if (gotSelf || includeSelf) return elem
				gotSelf = true
			}
		}
	} while (elem = elem.parentNode)

	return getWindowScrollingElement()
}

export function getWindowScrollingElement() {
  let scrollingElement = document.scrollingElement

  if (scrollingElement) {
    return scrollingElement.contains(document.body) ? document : scrollingElement
  } else {
    return document
  }
}

/**
 * get specified element's index in group
 * @param {HTMLElement} group 
 * @param {HTMLElement} el 
 * @returns {Number} index
 */
export function getIndex(group, el) {
  if (!el || !el.parentNode) return -1

  const children = [...Array.from(group.children)]
  return children.indexOf(el)
}

/**
 * Returns the "bounding client rect" of given element
 * @param {HTMLElement} el  The element whose boundingClientRect is wanted
 */
export function getRect(el) {
  if (!el.getBoundingClientRect && el !== window) return

  const rect = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 0,
    width: 0,
  }

  let elRect

  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect()
    rect.top = elRect.top
    rect.left = elRect.left
    rect.bottom = elRect.bottom
    rect.right = elRect.right
    rect.height = elRect.height
    rect.width = elRect.width
  } else {
    rect.top = 0
    rect.left = 0
    rect.bottom = window.innerHeight
    rect.right = window.innerWidth
    rect.height = window.innerHeight
    rect.width = window.innerWidth
  }

  return rect
}

/**
 * get target Element in group
 * @param {HTMLElement} group 
 * @param {HTMLElement} el 
 * @param {Boolean} onlyEl only get element
 */
export function getElement(group, el, onlyEl) {
  const children = [...Array.from(group.children)]

  // 如果能直接在子元素中找到，返回对应的index
  const index = children.indexOf(el)
  if (index > -1)
    return onlyEl ? children[index] : {
      index,
      el: children[index],
      rect: getRect(children[index]),
      offset: getOffset(children[index])
    }

  // children 中无法直接找到对应的dom时，需要向下寻找
  for (let i = 0; i < children.length; i++) {
    if (isChildOf(el, children[i])) {
      return onlyEl ? children[i] : {
        index: i,
        el: children[i],
        rect: getRect(children[i]),
        offset: getOffset(children[i])
      }
    }
  }
  return onlyEl ? null : { index: -1, el: null, rect: {}, offset: {} }
}

/**
 * Check if child element is contained in parent element
 * @param {HTMLElement} child 
 * @param {HTMLElement} parent 
 * @returns {Boolean} true | false
 */
export function isChildOf(child, parent) {
  let parentNode
  if (child && parent) {
    parentNode = child.parentNode
    while (parentNode) {
      if (parent === parentNode) return true
      parentNode = parentNode.parentNode
    }
  }
  return false
}

/**
 * add or remove element's class
 * @param {HTMLElement} el element
 * @param {String} name class name
 * @param {Boolean} state true: add, false: remove
 */
export function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name)
    } else {
      const className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ')
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ')
    }
  }
}

/**
 * Check if a DOM element matches a given selector
 * @param {HTMLElement} el 
 * @param {String} selector 
 * @returns 
 */
export function matches(el, selector) {
  if (!selector) return

  selector[0] === '>' && (selector = selector.substring(1))

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector)
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector)
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector)
      }
    } catch(error) {
      return false
    }
  }

  return false
}

export function css(el, prop, val) {
  let style = el && el.style
  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '')
      } else if (el.currentStyle) {
        val = el.currentStyle
      }
      return prop === void 0 ? val : val[prop]
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop
      }
      style[prop] = val + (typeof val === 'string' ? '' : 'px')
    }
  }
}

export function debounce(fn, delay) {
  return function (...args) {
    clearTimeout(fn.id)
    fn.id = setTimeout(() => {
      fn.call(this, ...args)
    }, delay)
  }
}

let _throttleTimeout
export function throttle(callback, ms) {
	return function () {
		if (!_throttleTimeout) {
			let args = arguments, _this = this

			if (args.length === 1) {
				callback.call(_this, args[0])
			} else {
				callback.apply(_this, args)
			}

			_throttleTimeout = setTimeout(function () {
				_throttleTimeout = void 0
			}, ms)
		}
	};
}

export function _nextTick(fn) {
  return setTimeout(fn, 0)
}

export default {
  on,
  off,
  css,
  getRect,
  matches,
  throttle,
  debounce,
  getIndex,
  _nextTick,
  isChildOf,
  getElement,
  toggleClass,
  setTransform,
  setTransition,
  supportPassive,
  getWindowScrollingElement,
  getParentAutoScrollElement,
}
