// create the namespace
var objectplanet;
if (!objectplanet) objectplanet = {};

// Example embed code:
// <div style="font:9px arial; color:gray; text-align:center" class="OPP-linkBack"><a style="text-decoration:none;" href="https://www.easypolls.net">online polls</a></div>
// <script type='text/javascript' src='http://localhost:3000/em.js' data-id='5f888ab3926cfc1571de93ca' data-width="200px" data-height="300px"></script>

/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));



(function() {
  const CONTAINER_ATTR_NAME_PREFIX = 'epc-';

  const setRespondedContainer = (containerId, pollId, revoteDate) => {
    if (revoteDate === null) {
        // revote date is not specified from server, do not keep track (poll is set to "always" allow a revote)
        return;
    }
    // store in localStorage to keep track of all polls responded to in this container
    let containerItemArrStr = localStorage.getItem(CONTAINER_ATTR_NAME_PREFIX + containerId);
    let containerItemArr = containerItemArrStr ? JSON.parse(containerItemArrStr) : [];
    containerItemArr.push({ pollId: pollId, expires: revoteDate });

    // remove the first (oldest item). More than 50 would result in URL length issues. 1 or two items would be normal, more is uncommon. More than 50 is extremely unlikely.
    if (50 < containerItemArr.length) {
      containerItemArr.shift();
    }

    // remove expired items
    for (var i = 0; i < containerItemArr.length; i++) {
      if (containerItemArr[i].expires < Date.now()) {
        containerItemArr.splice(i,1);
        i--; // removed an item, need to do the same position again.
      }
    }
    // if (Object.keys(containerItemArr).length)
    localStorage.setItem(CONTAINER_ATTR_NAME_PREFIX + containerId, JSON.stringify(containerItemArr));
  };

  const getIdsFromContainerUrlPart = (containerId) => {
    if (!containerId || containerId === '') {
      return '';
    }

    let containerItemArrStr = localStorage.getItem(CONTAINER_ATTR_NAME_PREFIX + containerId);
    if (!containerItemArrStr) {
      return '';
    }

    let containerItemArr = JSON.parse(containerItemArrStr);
    let str = '';
    for (var i = 0; containerItemArr && i < containerItemArr.length; i++) {
      str += (i===0 ? '' : '-') + containerItemArr[i].pollId;
    }
    return str === '' ? '' : '&ids=' + str;
  };

  // const hasRespondedToPollInContainer = (containerId, pollId) => {
  //   let containerItemArr = localStorage.getItem(CONTAINER_ATTR_NAME_PREFIX + containerId);
  //   return containerItemArr ? containerItemArr.find(item => item.pollId === pollId && Date.now() < item.expires) : false;
  // };

  const getParamOPP = (URL, name) => {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    let regexS = "[\\?&]" + name + "=([^&#]*)";
    let regex = new RegExp(regexS);
    let results = regex.exec(URL);
    return results == null ? '' : results[1];
  };
  const originPort = window.location.port && window.location.port !== '' ? ':' + window.location.port : '';
  const getOriginUrl = () => window.location.protocol + '//' + window.location.hostname + originPort;
  const OPPlinks = ['http://www.objectplanet.com/opinio/', 'http://www.easypolls.net/', 'https://www.easypolls.net'];

  const isBackLinkValid = (url) => {
    for (var i in OPPlinks) {
      if (url === OPPlinks[i]) {
        return true;
      }
    }
    return false;
  };

  // get the current script element. This script (currently running) should be the last one. If not, move up the script-tags
  let scripts = document.getElementsByTagName('script');
  let pid = null;
  let emScript = null;
  for (var i = scripts.length-1; 0 <= i; i--) {
      emScript = scripts[i];
      pid = emScript.getAttribute('data-id');
      if (pid && pid !== '') {
          break; // found the correct script tag
      }
  }

  let type = emScript.getAttribute('data-embed-type'); // poll or container
  type = !!type ? type : 'poll';

  // back-link present? Everything above the current script tag is available.
  // The back-link is before the script tag.
  let prevEl = emScript.previousElementSibling;
  let backLinkEl = null;

  // wordpress workaround
  if (prevEl === null && emScript.parentNode.nodeName === 'P') {
	  prevEl = emScript.parentNode.previousElementSibling;
  }

  // check if URL linkback is present
  if (prevEl.classList.contains('OPP-linkBack')) {
    backLinkEl = prevEl;
    if (backLinkEl.hasChildNodes() && backLinkEl.firstChild.nodeName === 'A') {
      let href = backLinkEl.firstChild.getAttribute('href');
      if (!isBackLinkValid(href)) {
        return; // back-link not any of the valid URLs, exit
      }
      // has valid back-link
    } else {
      return; // no a-tag, exit
    }
  } else {
    // back-link container not present, exit
    return;
  }
  let backLinkParent = backLinkEl.parentNode;

  // create iframe with poll page. iFrame-link will look something like:
  // Poll embedding: http://127.0.0.1:3000/5c9deb203079f5ac4c823f27?embed=true
  // Container embedding: http://127.0.0.1:3000/5c9deb203079f5ac4c823f27?embed=true&container=true
  let width = emScript.getAttribute('data-width');
  width = !!width ? width : '400px';
  const iframeSrc = emScript.getAttribute('src').slice(0, -6); // use this script's address, minus script name

  // listen to message from the frame, to set size and some style attributes.
  let messageHandler = (e) => {
    let data = e.data;
    // if (data.type === 'ep-resp') {
    //   console.log(`Got cooke in parent: ${data.cookieName} e.origin: ${e.origin}, iframeSrc: ${iframeSrc}`);
    // }

    // Check origin and id of poll/container (could be more than one poll on a page)
    if ( typeof data === 'object' && e.origin === iframeSrc && data.id === emScript.getAttribute('data-id')) {
      // console.log(data);
      if (data.type === 'init') {
        console.log(`Got init`);
        ifrm.style.boxShadow = data['box-shadow'];
        ifrm.style.borderRadius = data['border-radius'];
      }
      if (data.type === 'init' || data.type === 'resize') {
        // resize the iframe
        ifrm.style.width = data.width;
        // console.log("event type: " + data.type);
        ifrm.style.height = data.height;
		ifrm.allowtransparency = data.allowtransparency;
      }
      if (data.type === 'ep-resp') {
        // receiving message with data format:
        //   { type: 'ep-resp', cookieName: String, id: ID, pollId: ID, containerId: ID, revoteDate: Number } // revoteDate millis since 1970
        // console.log(`Got cookie in parent: ${data.cookieName}`);
        if (type === 'container') {
          setRespondedContainer(pid, data.pollId, data.revoteDate);
        } else {
          if (data.revoteDate !== null) {
		        Cookies.set(data.cookieName, 'true', { expires: new Date(data.revoteDate) });
          }
        }
      }
      // Send reply to source of message
      //e.source.postMessage('Message received', e.origin);
    }
  }; // messageHandler
  window.addEventListener('message', messageHandler, false);
  // remove poll if link-back is removed (and poll should have ads).

  let cVal = Cookies.get('vote-' + pid);
  var hasResponded = 'u'; // may be unknown, only applies if type is poll
  // if this is a container, all ids responded to are passed in the URL and checked against on the server side.
  if (type === 'poll') {
    hasResponded = cVal ? 'y' : 'n';
  }

  var ifrm = document.createElement('iframe');
  // ifrm.style.width = width;
  ifrm.style.height = emScript.getAttribute('data-height');
  ifrm.setAttribute('src',iframeSrc + '/' + pid + '?embed=true&type=' + type + '&re=' + hasResponded + getIdsFromContainerUrlPart(type === 'poll' ? '' : pid) + '&width=' + width + '&origin=' + encodeURIComponent(getOriginUrl()) + '&path=' + encodeURIComponent(window.location.pathname));
  ifrm.style = `display: inline-block; max-width: 100%; `;
  ifrm.style.border = '0px';
  ifrm.style.overflowY = 'hidden';
  if (ifrm.scrolling === '') {
    ifrm.setAttribute('scrolling', 'no');
  }
  ifrm.id = 'OPP-f-' + emScript.getAttribute('data-id');
  let mainDiv = document.createElement('div');
  mainDiv.classList.add('OPP-main-div');
  mainDiv.style = 'border: 0px; margin: 0px; padding: 0px; width: 100%; display: block; text-align: center';
  mainDiv.style.backgroundColor = '';
  mainDiv.appendChild(ifrm);

  // insert the poll before the backlink. If it isn't found, the poll will not show
  backLinkParent.insertBefore(mainDiv, backLinkEl);

})();


// objectplanet.doPollOPP = function() {
//   $opj('.OPP-EM').each(function() {
//     var emId = $opj(this).text();
//     var isContainer = $opj(this).hasClass('OPP-C');
//     if (isContainer) {
//       // containers MUST have link included. Will be removed by poll if it is ad-free.
//       var anchorUrl = $opj(this).parent().next().attr('href');
//       if (!(anchorUrl == OPPlinks[0] || anchorUrl == OPPlinks[1] || anchorUrl == OPPlinks[2] || anchorUrl == OPPlinks[3])) {
//         $opj(this).show().text('You can not remove the poll link');
//         return;
//       }
//     }
//   });
// };