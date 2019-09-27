import { XEUtilsMethods } from '../xe-utils'

/**
 * 数组迭代器
 * @param obj 对象
 * @param iteratee 回调 
 * @param context 上下文
 */
export declare function arrayEach(obj: any, iteratee: Function, context?: any): void;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 数组迭代器
     * @param obj 对象
     * @param iteratee 回调 
     * @param context 上下文
     */
    arrayEach(obj: any, iteratee: Function, context?: any): void;
  }
}

export default arrayEach