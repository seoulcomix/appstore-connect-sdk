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
import type { ErrorLinksAssociatedOneOfMeta } from './ErrorLinksAssociatedOneOfMeta';
import {
    ErrorLinksAssociatedOneOfMetaFromJSON,
    ErrorLinksAssociatedOneOfMetaFromJSONTyped,
    ErrorLinksAssociatedOneOfMetaToJSON,
} from './ErrorLinksAssociatedOneOfMeta';

/**
 * 
 * @export
 * @interface ErrorLinksAssociatedOneOf
 */
export interface ErrorLinksAssociatedOneOf {
    /**
     * 
     * @type {string}
     * @memberof ErrorLinksAssociatedOneOf
     */
    href?: string;
    /**
     * 
     * @type {ErrorLinksAssociatedOneOfMeta}
     * @memberof ErrorLinksAssociatedOneOf
     */
    meta?: ErrorLinksAssociatedOneOfMeta;
}

/**
 * Check if a given object implements the ErrorLinksAssociatedOneOf interface.
 */
export function instanceOfErrorLinksAssociatedOneOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ErrorLinksAssociatedOneOfFromJSON(json: any): ErrorLinksAssociatedOneOf {
    return ErrorLinksAssociatedOneOfFromJSONTyped(json, false);
}

export function ErrorLinksAssociatedOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorLinksAssociatedOneOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'href': !exists(json, 'href') ? undefined : json['href'],
        'meta': !exists(json, 'meta') ? undefined : ErrorLinksAssociatedOneOfMetaFromJSON(json['meta']),
    };
}

export function ErrorLinksAssociatedOneOfToJSON(value?: ErrorLinksAssociatedOneOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'href': value.href,
        'meta': ErrorLinksAssociatedOneOfMetaToJSON(value.meta),
    };
}

