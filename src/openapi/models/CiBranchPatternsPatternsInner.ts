/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CiBranchPatternsPatternsInner
 */
export interface CiBranchPatternsPatternsInner {
    /**
     * 
     * @type {string}
     * @memberof CiBranchPatternsPatternsInner
     */
    pattern?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CiBranchPatternsPatternsInner
     */
    isPrefix?: boolean;
}

/**
 * Check if a given object implements the CiBranchPatternsPatternsInner interface.
 */
export function instanceOfCiBranchPatternsPatternsInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiBranchPatternsPatternsInnerFromJSON(json: any): CiBranchPatternsPatternsInner {
    return CiBranchPatternsPatternsInnerFromJSONTyped(json, false);
}

export function CiBranchPatternsPatternsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBranchPatternsPatternsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pattern': !exists(json, 'pattern') ? undefined : json['pattern'],
        'isPrefix': !exists(json, 'isPrefix') ? undefined : json['isPrefix'],
    };
}

export function CiBranchPatternsPatternsInnerToJSON(value?: CiBranchPatternsPatternsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pattern': value.pattern,
        'isPrefix': value.isPrefix,
    };
}

