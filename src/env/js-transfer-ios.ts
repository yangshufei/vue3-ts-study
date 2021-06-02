/* eslint-disable */
/************ 本项目中本SDK接口仅供env/index.ts调用，项目中使用请 *****************/
/**
 * h5调用iPad APP接口SDK
 */
console.log(navigator.userAgent)
export interface JsTranferIOSType {
  /** 是否是iPad APP环境 */
  isIPad: () => boolean
  /** 原生返回token的回调 */
  getTokenCallback: null | ((data: any) => void)
  /** 原生点击返回按钮回调 */
  backClickCallback: null | ((data: any) => void)
}
const JsTranferIOS: JsTranferIOSType = {
  /**
   * 判断是否是iPad设备
   */
  isIPad: function () {
    // return navigator.userAgent.toLowerCase().indexOf('ipad') > -1 && window.webkit
    return window.webkit
  },
  getTokenCallback: null,
  backClickCallback: null
}
window.JsTranferIOS = JsTranferIOS

/**
 * 获取原生token
 */
const requestToken = function (callback: any, params: { isOverdue: '0' | '1' }) {
  if (!JsTranferIOS.isIPad()) {
    console.info('当前非iPad环境，返回空token')
    const nullStr = ''
    return (typeof callback === 'function') ? callback(nullStr) : nullStr
  }
  JsTranferIOS.getTokenCallback = (data) => {
    console.log('getTokenCallback', data)
    if (typeof callback === 'function') {
      callback(data)
      JsTranferIOS.getTokenCallback = null
    }
  }
  window.webkit.messageHandlers.getToken.postMessage(params || null)
}

/**
 * 通用调用原生方法
 */
const transferOC = function (functionName: string, param: any) {
  if (!JsTranferIOS.isIPad()) {
    console.info('当前非iPad环境')
    return
  }
  window.webkit.messageHandlers[functionName].postMessage(param || null)
}

/**
 * TODO: 注册回调
 */
const registerCallback = function(callbackName: keyof JsTranferIOSType, callback: (data?: any) => void) {
  if (callbackName && typeof callback === 'function') {
    JsTranferIOS.backClickCallback = callback
  }
}

export {
  requestToken,
  transferOC,
  registerCallback
}
