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
 * @interface BetaAppClipInvocationCreateRequestDataAttributes
 */
export interface BetaAppClipInvocationCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocationCreateRequestDataAttributes
     */
    url: string;
}

/**
 * Check if a given object implements the BetaAppClipInvocationCreateRequestDataAttributes interface.
 */
export function instanceOfBetaAppClipInvocationCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "url" in value;

    return isInstance;
}

export function BetaAppClipInvocationCreateRequestDataAttributesFromJSON(json: any): BetaAppClipInvocationCreateRequestDataAttributes {
    return BetaAppClipInvocationCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function BetaAppClipInvocationCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': json['url'],
    };
}

export function BetaAppClipInvocationCreateRequestDataAttributesToJSON(value?: BetaAppClipInvocationCreateRequestDataAttributes | null): any {
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

