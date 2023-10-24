function btnClassStyle(node, cla) {
  let classes =
    'v-btn v-btn--elevated v-theme--light v-btn--density-default v-btn--size-small v-btn--variant-elevated mr-1'.split(
      ' '
    )
  classes.forEach((cl) => {
    node.classList.add(cl)
  })
  node.classList.add(cla)
}
let hintElement = null
let messagElement = null
let ob = null
let nodeElement = null

export function clearHint() {
  if (hintElement) {
    hintElement.remove()
  }
  clearMessage()
}
export function clearMessage() {
  if (messagElement) {
    messagElement.remove()
  }
}
function clearObserver() {
  if (ob) {
    ob.disconnect()
  }
  ob = null
}
function removeNodeClass() {
  if (nodeElement) {
    nodeElement.classList.remove('node-hint')
  }
  nodeElement = null
}
export function showHint(
  node,
  hintMessage,
  pos,
  start,
  end,
  nextCallback,
  privCallback,
  closeCallback
) {
  clearObserver()
  removeNodeClass()
  clearMessage()
  let hintDom = document.createElement('div')
  let messageBox = document.createElement('div')
  let tringle = document.createElement('span')
  hintDom.style.backgroundColor = '#00000045'
  hintDom.style.position = 'fixed'
  hintDom.style.top = 0
  hintDom.style.right = 0
  hintDom.style.left = 0
  hintDom.style.bottom = 0
  hintDom.style.zIndex = 1008

  let nodePosition = node.getBoundingClientRect()
  let backgroundBox = document.createElement('div')

  let actionPanel = document.createElement('div')
  actionPanel.style.display = 'flex'
  actionPanel.classList.add('mt-3')
  let nextBtn = document.createElement('button')
  btnClassStyle(nextBtn, 'bg-primary')
  nextBtn.innerText = 'Next'
  if (typeof nextCallback == 'function') {
    nextBtn.addEventListener('click', nextCallback)
  }
  let privBtn = document.createElement('button')
  privBtn.innerText = 'Privous'
  btnClassStyle(privBtn, 'bg-pink-accent-2')
  if (typeof privCallback == 'function') {
    privBtn.addEventListener('click', privCallback)
  }
  let closeBtn = document.createElement('button')
  closeBtn.innerText = 'Close'
  btnClassStyle(closeBtn, 'bg-amber-accent-2')
  if (typeof closeCallback == 'function') {
    closeBtn.addEventListener('click', closeCallback)
  }
  actionPanel.appendChild(closeBtn)
  if (!start) {
    actionPanel.appendChild(privBtn)
  }
  if (!end) {
    actionPanel.appendChild(nextBtn)
  }

  backgroundBox.style.position = 'fixed'
  backgroundBox.style.top = nodePosition.top + 'px'
  //   backgroundBox.style.right = nodePosition.right + 'px'
  backgroundBox.style.left = nodePosition.left + 'px'
  backgroundBox.style.width = nodePosition.width + 'px'
  backgroundBox.style.height = nodePosition.height + 'px'
  //   backgroundBox.style.bottom = nodePosition.bottom + 'px'd
  backgroundBox.style.zIndex = 1009
  backgroundBox.style.backgroundColor = '#FFF'

  messageBox.style.backgroundColor = '#FFF'
  messageBox.style.zIndex = 1009
  if (pos == 'l') {
    messageBox.style.position = 'fixed'
    tringle.style.position = 'fixed'
    messageBox.style.top = nodePosition.top + 'px'
    tringle.style.top = nodePosition.top + 'px'
    //   messageBox.style.right = nodePosition.right + 'px'
    messageBox.style.left = nodePosition.left - 310 + 'px'
    tringle.style.left = nodePosition.left - 10 + 'px'
    tringle.classList.add('triangle-right')
    messageBox.style.width = 300 + 'px'
    messageBox.style.padding = '10px'
    messageBox.style.borderRadius = '5px 0px 5px 5px'
  } else if (pos == 'in') {
    messageBox.style.backgroundColor = 'rgb(255 255 255 / 93%)'
    messageBox.style.boxShadow = '1px 2px 8px #251717d1'
    messageBox.style.zIndex = 1011
    messageBox.style.position = 'fixed'
    messageBox.style.top = nodePosition.top + 10 + 'px'
    messageBox.style.left = nodePosition.left + nodePosition.width / 2 + 'px'
    messageBox.style.transform = 'translateX(-50%)'
    messageBox.style.width = 300 + 'px'
    messageBox.style.padding = '10px'
    messageBox.style.borderRadius = '5px'
  } else {
    messageBox.style.position = 'fixed'

    tringle.style.position = 'fixed'
    tringle.style.top = nodePosition.top + nodePosition.height + 'px'
    tringle.classList.add('triangle-up')
    tringle.style.left = nodePosition.left + 'px'
    messageBox.style.top = nodePosition.top + nodePosition.height + 10 + 'px'

    messageBox.style.borderRadius = '0px 5px 5px 5px'
    messageBox.style.padding = '10px'
    //   messageBox.style.right = nodePosition.right + 'px'
    messageBox.style.left = nodePosition.left + 'px'
    // messageBox.style.width = 100 + 'px'
  }

  let messageP = document.createElement('p')
  messageP.innerText = hintMessage
  messageBox.style.display = 'flex'
  messageBox.style.flexDirection = 'column'
  messageBox.appendChild(messageP)
  messageBox.appendChild(actionPanel)
  node.classList.add('node-hint')
  var observer = new MutationObserver(function (mutationList, observe) {
    if (!node.classList.contains('node-hint')) {
      node.classList.add('node-hint')
    }
    console.log('changed', mutationList, observe)
  })
  observer.observe(node, {
    attributes: true,
    childList: true,
    subtree: true
  })
  hintDom.appendChild(backgroundBox)
  //   hintDom.appendChild(messageBox)
  if (pos !== 'in') {
    hintDom.appendChild(tringle)
  }
  const body = document.querySelector('body')
  body.appendChild(hintDom)
  body.appendChild(messageBox)
  messagElement = messageBox
  hintElement = hintDom
  ob = observer
  nodeElement = node
}
