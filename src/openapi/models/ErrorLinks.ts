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
import type { ErrorLinksAssociated } from './ErrorLinksAssociated';
import {
    ErrorLinksAssociatedFromJSON,
    ErrorLinksAssociatedFromJSONTyped,
    ErrorLinksAssociatedToJSON,
} from './ErrorLinksAssociated';

/**
 * 
 * @export
 * @interface ErrorLinks
 */
export interface ErrorLinks {
    /**
     * 
     * @type {string}
     * @memberof ErrorLinks
     */
    about?: string;
    /**
     * 
     * @type {ErrorLinksAssociated}
     * @memberof ErrorLinks
     */
    associated?: ErrorLinksAssociated;
}

/**
 * Check if a given object implements the ErrorLinks interface.
 */
export function instanceOfErrorLinks(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ErrorLinksFromJSON(json: any): ErrorLinks {
    return ErrorLinksFromJSONTyped(json, false);
}

export function ErrorLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorLinks {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'about': !exists(json, 'about') ? undefined : json['about'],
        'associated': !exists(json, 'associated') ? undefined : ErrorLinksAssociatedFromJSON(json['associated']),
    };
}

export function ErrorLinksToJSON(value?: ErrorLinks | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'about': value.about,
        'associated': ErrorLinksAssociatedToJSON(value.associated),
    };
}

