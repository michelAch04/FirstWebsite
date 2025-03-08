const events = [
    { category: 'Mouse Events', name: 'onclick', desc: 'Occurs when the user clicks on an element', appliesTo: 'All elements' },
    { category: 'Mouse Events', name: 'ondblclick', desc: 'Occurs when the user double-clicks on an element', appliesTo: 'All elements' },
    { category: 'Mouse Events', name: 'onmousedown', desc: 'Occurs when the mouse button is pressed down', appliesTo: 'All elements' },
    { category: 'Mouse Events', name: 'onmouseup', desc: 'Occurs when the mouse button is released', appliesTo: 'All elements' },
    { category: 'Mouse Events', name: 'onmousemove', desc: 'Occurs when the pointer is moving over an element', appliesTo: 'All elements' },
    { category: 'Mouse Events', name: 'onmouseenter', desc: 'Occurs when the pointer is moved onto an element', appliesTo: 'All elements' },
    { category: 'Mouse Events', name: 'onmouseleave', desc: 'Occurs when the pointer is moved out of an element', appliesTo: 'All elements' },
    { category: 'Mouse Events', name: 'onmouseover', desc: 'Occurs when the pointer is moved onto an element', appliesTo: 'All elements' },
    { category: 'Mouse Events', name: 'onmouseout', desc: 'Occurs when the pointer is moved out of an element', appliesTo: 'All elements' },
    { category: 'Mouse Events', name: 'onwheel', desc: 'Occurs when the mouse wheel is rolled', appliesTo: 'All elements' },
    { category: 'Mouse Events', name: 'oncontextmenu', desc: 'Occurs when the user right-clicks to open the context menu', appliesTo: 'All elements' },

    { category: 'Keyboard Events', name: 'onkeydown', desc: 'Occurs when a key is pressed', appliesTo: 'All elements' },
    { category: 'Keyboard Events', name: 'onkeypress', desc: 'Occurs when a key is pressed and held down (deprecated)', appliesTo: 'All elements' },
    { category: 'Keyboard Events', name: 'onkeyup', desc: 'Occurs when a key is released', appliesTo: 'All elements' },

    { category: 'Form Events', name: 'onfocus', desc: 'Occurs when an element gains focus', appliesTo: 'Form elements' },
    { category: 'Form Events', name: 'onblur', desc: 'Occurs when an element loses focus', appliesTo: 'Form elements' },
    { category: 'Form Events', name: 'onchange', desc: 'Occurs when the value of an element changes', appliesTo: 'input, select, textarea' },
    { category: 'Form Events', name: 'oninput', desc: 'Occurs when the value of an element is being changed', appliesTo: 'input, textarea' },
    { category: 'Form Events', name: 'oninvalid', desc: 'Occurs when an element is invalid', appliesTo: 'input, form' },
    { category: 'Form Events', name: 'onreset', desc: 'Occurs when a form is reset', appliesTo: 'form' },
    { category: 'Form Events', name: 'onselect', desc: 'Occurs when text in an input field is selected', appliesTo: 'input, textarea' },
    { category: 'Form Events', name: 'onsubmit', desc: 'Occurs when a form is submitted', appliesTo: 'form' },

    { category: 'Clipboard Events', name: 'oncopy', desc: 'Occurs when the user copies content', appliesTo: 'All elements' },
    { category: 'Clipboard Events', name: 'oncut', desc: 'Occurs when the user cuts content', appliesTo: 'All elements' },
    { category: 'Clipboard Events', name: 'onpaste', desc: 'Occurs when the user pastes content', appliesTo: 'All elements' },

    { category: 'Drag Events', name: 'ondrag', desc: 'Occurs when an element is dragged', appliesTo: 'All draggable elements' },
    { category: 'Drag Events', name: 'ondragstart', desc: 'Occurs when the user starts dragging an element', appliesTo: 'All draggable elements' },
    { category: 'Drag Events', name: 'ondragend', desc: 'Occurs when the user stops dragging an element', appliesTo: 'All draggable elements' },
    { category: 'Drag Events', name: 'ondragenter', desc: 'Occurs when a dragged element enters a drop target', appliesTo: 'All elements' },
    { category: 'Drag Events', name: 'ondragleave', desc: 'Occurs when a dragged element leaves a drop target', appliesTo: 'All elements' },
    { category: 'Drag Events', name: 'ondragover', desc: 'Occurs when a dragged element is over a drop target', appliesTo: 'All elements' },
    { category: 'Drag Events', name: 'ondrop', desc: 'Occurs when a dragged element is dropped on a drop target', appliesTo: 'All elements' },

    { category: 'Media Events', name: 'onabort', desc: 'Occurs when media loading is aborted', appliesTo: 'audio, video' },
    { category: 'Media Events', name: 'oncanplay', desc: 'Occurs when media can start playing', appliesTo: 'audio, video' },
    { category: 'Media Events', name: 'oncanplaythrough', desc: 'Occurs when media can be played to the end without stopping', appliesTo: 'audio, video' },
    { category: 'Media Events', name: 'ondurationchange', desc: 'Occurs when the duration of media changes', appliesTo: 'audio, video' },
    { category: 'Media Events', name: 'onemptied', desc: 'Occurs when media becomes empty', appliesTo: 'audio, video' },
    { category: 'Media Events', name: 'onended', desc: 'Occurs when media has finished playing', appliesTo: 'audio, video' },
    { category: 'Media Events', name: 'onerror', desc: 'Occurs when an error occurs while loading an external file', appliesTo: 'img, script, object' },
    { category: 'Media Events', name: 'onloadeddata', desc: 'Occurs when media data is loaded', appliesTo: 'audio, video' },
    { category: 'Media Events', name: 'onloadedmetadata', desc: 'Occurs when media metadata is loaded', appliesTo: 'audio, video' },
    { category: 'Media Events', name: 'onloadstart', desc: 'Occurs when media starts loading', appliesTo: 'audio, video' },
    { category: 'Media Events', name: 'onpause', desc: 'Occurs when media is paused', appliesTo: 'audio, video' },
    { category: 'Media Events', name: 'onplay', desc: 'Occurs when media starts playing', appliesTo: 'audio, video' },
    { category: 'Media Events', name: 'onplaying', desc: 'Occurs when media is playing after being paused', appliesTo: 'audio, video' },
    { category: 'Media Events', name: 'onprogress', desc: 'Occurs when the browser is downloading media', appliesTo: 'audio, video' },
    { category: 'Media Events', name: 'onratechange', desc: 'Occurs when the playback rate of media changes', appliesTo: 'audio, video' },
    { category: 'Media Events', name: 'onseeked', desc: 'Occurs when the user has finished seeking media', appliesTo: 'audio, video' },
    { category: 'Media Events', name: 'onseeking', desc: 'Occurs when the user starts seeking media', appliesTo: 'audio, video' },
    { category: 'Media Events', name: 'onstalled', desc: 'Occurs when the browser is trying to load media but can’t', appliesTo: 'audio, video' },
    { category: 'Media Events', name: 'onsuspend', desc: 'Occurs when media loading is suspended', appliesTo: 'audio, video' },
    { category: 'Media Events', name: 'ontimeupdate', desc: 'Occurs when media play time is updated', appliesTo: 'audio, video' },
    { category: 'Media Events', name: 'onvolumechange', desc: 'Occurs when media volume is changed', appliesTo: 'audio, video' },
    { category: 'Media Events', name: 'onwaiting', desc: 'Occurs when media is paused to buffer more data', appliesTo: 'audio, video' },

    { category: 'Window Events', name: 'onbeforeunload', desc: 'Occurs when the user tries to leave the page', appliesTo: 'Window' },
    { category: 'Window Events', name: 'onhashchange', desc: 'Occurs when the URL hash changes', appliesTo: 'Window' },
    { category: 'Window Events', name: 'onload', desc: 'Occurs when the page has loaded', appliesTo: 'Window' },
    { category: 'Window Events', name: 'onmessage', desc: 'Occurs when a message is received through an event source', appliesTo: 'Window' },
    { category: 'Window Events', name: 'onoffline', desc: 'Occurs when the browser goes offline', appliesTo: 'Window' },
    { category: 'Window Events', name: 'ononline', desc: 'Occurs when the browser goes online', appliesTo: 'Window' },
    { category: 'Window Events', name: 'onpopstate', desc: 'Occurs when the browser history changes', appliesTo: 'Window' },
    { category: 'Window Events', name: 'onresize', desc: 'Occurs when the browser window is resized', appliesTo: 'Window' },
    { category: 'Window Events', name: 'onscroll', desc: 'Occurs when the user scrolls the page', appliesTo: 'Window' },
    { category: 'Window Events', name: 'onstorage', desc: 'Occurs when a web storage area changes', appliesTo: 'Window' },
    { category: 'Window Events', name: 'onunload', desc: 'Occurs when the user leaves the page', appliesTo: 'Window' },

    // Focus Events
    { category: 'Focus Events', name: 'onfocusin', desc: 'Occurs when an element is about to get focus', appliesTo: 'All elements' },
    { category: 'Focus Events', name: 'onfocusout', desc: 'Occurs when an element is about to lose focus', appliesTo: 'All elements' },

    // Touch Events
    { category: 'Touch Events', name: 'ontouchstart', desc: 'Occurs when the user touches an element', appliesTo: 'Touch devices' },
    { category: 'Touch Events', name: 'ontouchmove', desc: 'Occurs when the user moves a finger across the screen', appliesTo: 'Touch devices' },
    { category: 'Touch Events', name: 'ontouchend', desc: 'Occurs when the user removes the finger from the screen', appliesTo: 'Touch devices' },
    { category: 'Touch Events', name: 'ontouchcancel', desc: 'Occurs when the touch is interrupted', appliesTo: 'Touch devices' },

    // Pointer Events
    { category: 'Pointer Events', name: 'onpointerdown', desc: 'Occurs when a pointer is pressed down', appliesTo: 'All elements' },
    { category: 'Pointer Events', name: 'onpointerup', desc: 'Occurs when a pointer is released', appliesTo: 'All elements' },
    { category: 'Pointer Events', name: 'onpointermove', desc: 'Occurs when a pointer moves over an element', appliesTo: 'All elements' },
    { category: 'Pointer Events', name: 'onpointerover', desc: 'Occurs when a pointer is moved onto an element', appliesTo: 'All elements' },
    { category: 'Pointer Events', name: 'onpointerout', desc: 'Occurs when a pointer is moved out of an element', appliesTo: 'All elements' },
    { category: 'Pointer Events', name: 'onpointerenter', desc: 'Occurs when a pointer enters an element', appliesTo: 'All elements' },
    { category: 'Pointer Events', name: 'onpointerleave', desc: 'Occurs when a pointer leaves an element', appliesTo: 'All elements' },
    { category: 'Pointer Events', name: 'ongotpointercapture', desc: 'Occurs when an element captures a pointer', appliesTo: 'All elements' },
    { category: 'Pointer Events', name: 'onlostpointercapture', desc: 'Occurs when an element loses pointer capture', appliesTo: 'All elements' },
    { category: 'Pointer Events', name: 'onpointercancel', desc: 'Occurs when the pointer device is no longer available', appliesTo: 'All elements' },

    // Wheel Events
    { category: 'Wheel Events', name: 'onwheel', desc: 'Occurs when the mouse wheel is rolled', appliesTo: 'All elements' },

    // Animation Events
    { category: 'Animation Events', name: 'onanimationstart', desc: 'Occurs when a CSS animation starts', appliesTo: 'All elements' },
    { category: 'Animation Events', name: 'onanimationiteration', desc: 'Occurs when a CSS animation is repeated', appliesTo: 'All elements' },
    { category: 'Animation Events', name: 'onanimationend', desc: 'Occurs when a CSS animation ends', appliesTo: 'All elements' },

    // Transition Events
    { category: 'Transition Events', name: 'ontransitionend', desc: 'Occurs when a CSS transition ends', appliesTo: 'All elements' },

    // Print Events
    { category: 'Print Events', name: 'onbeforeprint', desc: 'Occurs before the document is printed', appliesTo: 'Window' },
    { category: 'Print Events', name: 'onafterprint', desc: 'Occurs after the document is printed', appliesTo: 'Window' },

    // Other Events
    { category: 'Other Events', name: 'onabort', desc: 'Occurs when loading of an image is aborted', appliesTo: 'img' },
    { category: 'Other Events', name: 'oncanplay', desc: 'Occurs when the media can start playing', appliesTo: 'audio, video' },
    { category: 'Other Events', name: 'oncanplaythrough', desc: 'Occurs when the media can be played through to the end', appliesTo: 'audio, video' },
    { category: 'Other Events', name: 'oncuechange', desc: 'Occurs when the text track cue changes', appliesTo: 'track' },
    { category: 'Other Events', name: 'ondurationchange', desc: 'Occurs when the duration of the media is changed', appliesTo: 'audio, video' },
    { category: 'Other Events', name: 'onemptied', desc: 'Occurs when the media resource is emptied', appliesTo: 'audio, video' },
    { category: 'Other Events', name: 'onended', desc: 'Occurs when the media has finished playing', appliesTo: 'audio, video' },
    { category: 'Other Events', name: 'onloadeddata', desc: 'Occurs when media data is loaded', appliesTo: 'audio, video' },
    { category: 'Other Events', name: 'onloadedmetadata', desc: 'Occurs when metadata is loaded', appliesTo: 'audio, video' },
    { category: 'Other Events', name: 'onloadstart', desc: 'Occurs when the browser starts looking for media data', appliesTo: 'audio, video' },
    { category: 'Other Events', name: 'onpause', desc: 'Occurs when the media is paused', appliesTo: 'audio, video' },
    { category: 'Other Events', name: 'onplay', desc: 'Occurs when the media starts playing', appliesTo: 'audio, video' },
    { category: 'Other Events', name: 'onplaying', desc: 'Occurs when the media is playing after having been paused or buffered', appliesTo: 'audio, video' },
    { category: 'Other Events', name: 'onprogress', desc: 'Occurs when the browser is downloading the media', appliesTo: 'audio, video' },
    { category: 'Other Events', name: 'onratechange', desc: 'Occurs when the playback rate is changed', appliesTo: 'audio, video' },
    { category: 'Other Events', name: 'onseeked', desc: 'Occurs when the seeking attribute is set to false indicating that seeking has ended', appliesTo: 'audio, video' },
    { category: 'Other Events', name: 'onseeking', desc: 'Occurs when the seeking attribute is set to true indicating that seeking is active', appliesTo: 'audio, video' },
    { category: 'Other Events', name: 'onstalled', desc: 'Occurs when the browser is trying to get media data, but data is not available', appliesTo: 'audio, video' },
    { category: 'Other Events', name: 'onsuspend', desc: 'Occurs when the browser is intentionally not getting media data', appliesTo: 'audio, video' },
    { category: 'Other Events', name: 'ontimeupdate', desc: 'Occurs when the current playback position has changed', appliesTo: 'audio, video' },
    { category: 'Other Events', name: 'onvolumechange', desc: 'Occurs when the volume is changed', appliesTo: 'audio, video' },
    { category: 'Other Events', name: 'onwaiting', desc: 'Occurs when the media is paused but expected to resume (for example, when the media buffers)', appliesTo: 'audio, video' },

    // Fullscreen events
    { name: 'onfullscreenchange', desc: 'Occurs when an element enters or exits fullscreen mode', appliesTo: 'Document' },
    { name: 'onfullscreenerror', desc: 'Occurs when there is an error during a fullscreen request', appliesTo: 'Document' },

    // Clipboard events (extensions)
    { name: 'onbeforecopy', desc: 'Occurs before the content is copied', appliesTo: 'All elements' },
    { name: 'onbeforecut', desc: 'Occurs before the content is cut', appliesTo: 'All elements' },
    { name: 'onbeforepaste', desc: 'Occurs before the content is pasted', appliesTo: 'All elements' },

    // Gamepad events
    { name: 'ongamepadconnected', desc: 'Occurs when a gamepad is connected', appliesTo: 'Window' },
    { name: 'ongamepaddisconnected', desc: 'Occurs when a gamepad is disconnected', appliesTo: 'Window' },

    // Device events
    { name: 'ondevicelight', desc: 'Occurs when the device light level changes', appliesTo: 'Window' },
    { name: 'ondevicemotion', desc: 'Occurs when the device motion changes', appliesTo: 'Window' },
    { name: 'ondeviceorientation', desc: 'Occurs when the orientation of the device changes', appliesTo: 'Window' },
    { name: 'ondeviceproximity', desc: 'Occurs when the proximity of the device changes', appliesTo: 'Window' },

    // Payment events
    { name: 'onpaymentmethodchange', desc: 'Occurs when the user changes the payment method', appliesTo: 'PaymentRequest' },

    // Network events
    { name: 'onconnectionchange', desc: 'Occurs when the network connection changes', appliesTo: 'Window' },

    // Print events
    { name: 'onbeforeprint', desc: 'Occurs when the print dialog is opened', appliesTo: 'Window' },
    { name: 'onafterprint', desc: 'Occurs when the print dialog is closed', appliesTo: 'Window' },

    // Battery events
    { name: 'onbatterystatus', desc: 'Occurs when the battery status changes', appliesTo: 'BatteryManager' },
    { name: 'onchargingchange', desc: 'Occurs when the device starts/stops charging', appliesTo: 'BatteryManager' }
];

// Populate the table dynamically
const tableBody = document.getElementById("events-table");

events.forEach((event, index) => {
    const row = document.createElement("tr");
    row.style.setProperty("--index", index);

    row.innerHTML = `
        <td>${event.name}</td>
        <td>${event.desc}</td>
        <td>${event.appliesTo}</td>
        <td><a href="https://www.w3schools.com/jsref/event_${event.name}.asp" target="_blank">More info</a></td>
    `;

    tableBody.appendChild(row);
});