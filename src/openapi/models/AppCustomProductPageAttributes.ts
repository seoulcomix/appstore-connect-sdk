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
 * @interface AppCustomProductPageAttributes
 */
export interface AppCustomProductPageAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageAttributes
     */
    url?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppCustomProductPageAttributes
     */
    visible?: boolean;
}

/**
 * Check if a given object implements the AppCustomProductPageAttributes interface.
 */
export function instanceOfAppCustomProductPageAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppCustomProductPageAttributesFromJSON(json: any): AppCustomProductPageAttributes {
    return AppCustomProductPageAttributesFromJSONTyped(json, false);
}

export function AppCustomProductPageAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'visible': !exists(json, 'visible') ? undefined : json['visible'],
    };
}

export function AppCustomProductPageAttributesToJSON(value?: AppCustomProductPageAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'url': value.url,
        'visible': value.visible,
    };
}

