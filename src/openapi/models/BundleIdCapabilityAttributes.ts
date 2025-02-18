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
import type { CapabilitySetting } from './CapabilitySetting';
import {
    CapabilitySettingFromJSON,
    CapabilitySettingFromJSONTyped,
    CapabilitySettingToJSON,
} from './CapabilitySetting';
import type { CapabilityType } from './CapabilityType';
import {
    CapabilityTypeFromJSON,
    CapabilityTypeFromJSONTyped,
    CapabilityTypeToJSON,
} from './CapabilityType';

/**
 * 
 * @export
 * @interface BundleIdCapabilityAttributes
 */
export interface BundleIdCapabilityAttributes {
    /**
     * 
     * @type {CapabilityType}
     * @memberof BundleIdCapabilityAttributes
     */
    capabilityType?: CapabilityType;
    /**
     * 
     * @type {Array<CapabilitySetting>}
     * @memberof BundleIdCapabilityAttributes
     */
    settings?: Array<CapabilitySetting>;
}

/**
 * Check if a given object implements the BundleIdCapabilityAttributes interface.
 */
export function instanceOfBundleIdCapabilityAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BundleIdCapabilityAttributesFromJSON(json: any): BundleIdCapabilityAttributes {
    return BundleIdCapabilityAttributesFromJSONTyped(json, false);
}

export function BundleIdCapabilityAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdCapabilityAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'capabilityType': !exists(json, 'capabilityType') ? undefined : CapabilityTypeFromJSON(json['capabilityType']),
        'settings': !exists(json, 'settings') ? undefined : ((json['settings'] as Array<any>).map(CapabilitySettingFromJSON)),
    };
}

export function BundleIdCapabilityAttributesToJSON(value?: BundleIdCapabilityAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'capabilityType': CapabilityTypeToJSON(value.capabilityType),
        'settings': value.settings === undefined ? undefined : ((value.settings as Array<any>).map(CapabilitySettingToJSON)),
    };
}

