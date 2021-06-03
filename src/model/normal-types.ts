/**
 * 通用类型
 */

/** 弹窗类型枚举量 */
export enum DIALOG_TYPE {
  VIEW,
  ADD,
  EDIT
}

/** 弹窗组件内部使用的弹窗信息 */
export interface DIALOG_INFO_TYPE {
  visible: boolean,
  title?: string,
  type?: DIALOG_TYPE
}

/** 相应数据的基础接口 */
export interface RESPONSE_DATA_TYPE<T> {
  code: number,
  data: T,
  msg?: string
}

/** 表头数据 */
export interface TABLE_HEADER<T> extends Record<string, any> {
  label: string
  prop: keyof T
}

/** 页码类型 */
export interface PAGINATION_TYPE {
  pageNum: number,
  pageSize: number
}

/** 请求分页数据 */
export interface RESPONCE_PAGINATION_TYPE<T> {
  pageNum: number,
  pageSize: number,
  totalSize: number,
  data: T
}
