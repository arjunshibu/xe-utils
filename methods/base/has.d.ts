import { XEUtilsMethods } from '../xe-utils'

/**
 * 检查键、路径是否是该对象的属性
 * @param obj 对象
 * @param property 键、路径
 */
export declare function has(obj: any, property: string | Array<string>): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 检查键、路径是否是该对象的属性
     * @param obj 对象
     * @param property 键、路径
     */
    has(obj: any, property: string | Array<string>): boolean;
  }
}

export default has