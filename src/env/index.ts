import { requestToken, transferOC, registerCallback } from './js-transfer-ios'
import { aesDecrypt } from '@/utils/aes'

/** 存储的token */
let token = ''

/**
 * 初始化
 * @returns Promise
 */
const init = function (): Promise<string> {
  console.log('sys init')
  return reqToken(false)
}

/**
 * 请求token
 * @param isOverdue 是否token已过期
 * @returns Promise
 */
const reqToken = function (isOverdue = true): Promise<string> {
  console.log('requestToken..., isOverdue: ' + isOverdue)
  return new Promise((resolve) => {
    requestToken((data: string) => {
      const _token = aesDecrypt(data)
      token = _token
      console.log('requestToken result:', token)
      resolve(token)
    }, { isOverdue: isOverdue ? '1' : '0' })
  })
}

/** 获取token */
const getToken = function (): string {
  console.log('getToken:', token)
  return token
}

/** 页码改变上报 */
const pageChange = function (title: string, canBack: '0' | '1'): void {
  transferOC('pageChange', {
    title,
    canBack
  })
}

/** 注册页码改变回调 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const registerBackCallback = function (callback: (data?: any) => void): void {
  registerCallback('backClickCallback', callback)
}

export {
  init,
  getToken,
  reqToken,
  pageChange,
  registerBackCallback
}
