// 右键菜单栏
chrome.contextMenus.create({
  type: 'normal',
  title: "镜像clone1",
  documentUrlPatterns: ['https://github.com/*'],
  onclick: mirrorClone(1)
})
chrome.contextMenus.create({
  type: 'normal',
  title: "镜像clone1",
  documentUrlPatterns: ['https://github.com/*'],
  onclick: mirrorClone(2)
})
chrome.contextMenus.create({
  type: 'normal',
  title: "镜像clone1",
  documentUrlPatterns: ['https://github.com/*'],
  onclick: mirrorClone(3)
})

function mirrorClone(num){
  return (info)=>{
    const cloneStr = 'git clone --depth=1 '
    const mirror_url1 = 'https://github.com.cnpmjs.org'
    const mirror_url2 = 'https://hub.fastgit.org'
    const mirror_url3 = 'https://github.wuyanzheshui.workers.dev'
    const urlList = info.pageUrl.split('/')
    const newUrl = '/' + urlList[3] + '/' + urlList[4] + '.git'
    const address1 = cloneStr + mirror_url1 + newUrl
    const address2 = cloneStr + mirror_url2 + newUrl
    const address3 = cloneStr + mirror_url3 + newUrl

    switch (num){
      case 1:
        copyText(address1)
        break
      case 2:
        copyText(address2)
        break
      case 3:
        copyText(address3)
        break
      default: 
        copyText(address1)
    }
  }
}

function copyText(text){
  const textarea = document.createElement('textarea')
  const currentFocus = document.activeElement
  const toolBoxwrap = document.getElementsByTagName('body')[0]

  toolBoxwrap.appendChild(textarea)
  textarea.value = text
  textarea.focus()
  if(textarea.setSelectionRange){
    textarea.setSelectionRange(0, textarea.value.length)
  }else{
    textarea.select()
  }
  let flag

  try {
    flag = document.execCommand('copy')
  } catch (error) {
    flag = false
  }
  toolBoxwrap.removeChild(textarea)
  currentFocus.focus()
  return flag
}