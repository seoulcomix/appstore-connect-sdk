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
 * @interface BetaAppClipInvocationAttributes
 */
export interface BetaAppClipInvocationAttributes {
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocationAttributes
     */
    url?: string;
}

/**
 * Check if a given object implements the BetaAppClipInvocationAttributes interface.
 */
export function instanceOfBetaAppClipInvocationAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BetaAppClipInvocationAttributesFromJSON(json: any): BetaAppClipInvocationAttributes {
    return BetaAppClipInvocationAttributesFromJSONTyped(json, false);
}

export function BetaAppClipInvocationAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function BetaAppClipInvocationAttributesToJSON(value?: BetaAppClipInvocationAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
    };
}

