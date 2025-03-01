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
 * @interface ErrorLinksAssociatedOneOfMeta
 */
export interface ErrorLinksAssociatedOneOfMeta {
    /**
     * 
     * @type {string}
     * @memberof ErrorLinksAssociatedOneOfMeta
     */
    source?: string;
}

/**
 * Check if a given object implements the ErrorLinksAssociatedOneOfMeta interface.
 */
export function instanceOfErrorLinksAssociatedOneOfMeta(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ErrorLinksAssociatedOneOfMetaFromJSON(json: any): ErrorLinksAssociatedOneOfMeta {
    return ErrorLinksAssociatedOneOfMetaFromJSONTyped(json, false);
}

export function ErrorLinksAssociatedOneOfMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorLinksAssociatedOneOfMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'source': !exists(json, 'source') ? undefined : json['source'],
    };
}

export function ErrorLinksAssociatedOneOfMetaToJSON(value?: ErrorLinksAssociatedOneOfMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'source': value.source,
    };
}

