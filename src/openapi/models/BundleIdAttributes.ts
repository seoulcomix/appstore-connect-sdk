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
import type { BundleIdPlatform } from './BundleIdPlatform';
import {
    BundleIdPlatformFromJSON,
    BundleIdPlatformFromJSONTyped,
    BundleIdPlatformToJSON,
} from './BundleIdPlatform';

/**
 * 
 * @export
 * @interface BundleIdAttributes
 */
export interface BundleIdAttributes {
    /**
     * 
     * @type {string}
     * @memberof BundleIdAttributes
     */
    name?: string;
    /**
     * 
     * @type {BundleIdPlatform}
     * @memberof BundleIdAttributes
     */
    platform?: BundleIdPlatform;
    /**
     * 
     * @type {string}
     * @memberof BundleIdAttributes
     */
    identifier?: string;
    /**
     * 
     * @type {string}
     * @memberof BundleIdAttributes
     */
    seedId?: string;
}

/**
 * Check if a given object implements the BundleIdAttributes interface.
 */
export function instanceOfBundleIdAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BundleIdAttributesFromJSON(json: any): BundleIdAttributes {
    return BundleIdAttributesFromJSONTyped(json, false);
}

export function BundleIdAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'platform': !exists(json, 'platform') ? undefined : BundleIdPlatformFromJSON(json['platform']),
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'seedId': !exists(json, 'seedId') ? undefined : json['seedId'],
    };
}

export function BundleIdAttributesToJSON(value?: BundleIdAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'platform': BundleIdPlatformToJSON(value.platform),
        'identifier': value.identifier,
        'seedId': value.seedId,
    };
}

