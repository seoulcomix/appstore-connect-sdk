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
 * @interface CapabilityOption
 */
export interface CapabilityOption {
    /**
     * 
     * @type {string}
     * @memberof CapabilityOption
     */
    key?: CapabilityOptionKeyEnum;
    /**
     * 
     * @type {string}
     * @memberof CapabilityOption
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CapabilityOption
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CapabilityOption
     */
    enabledByDefault?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CapabilityOption
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CapabilityOption
     */
    supportsWildcard?: boolean;
}


/**
 * @export
 */
export const CapabilityOptionKeyEnum = {
    Xcode5: 'XCODE_5',
    Xcode6: 'XCODE_6',
    CompleteProtection: 'COMPLETE_PROTECTION',
    ProtectedUnlessOpen: 'PROTECTED_UNLESS_OPEN',
    ProtectedUntilFirstUserAuth: 'PROTECTED_UNTIL_FIRST_USER_AUTH',
    PrimaryAppConsent: 'PRIMARY_APP_CONSENT'
} as const;
export type CapabilityOptionKeyEnum = typeof CapabilityOptionKeyEnum[keyof typeof CapabilityOptionKeyEnum];


/**
 * Check if a given object implements the CapabilityOption interface.
 */
export function instanceOfCapabilityOption(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CapabilityOptionFromJSON(json: any): CapabilityOption {
    return CapabilityOptionFromJSONTyped(json, false);
}

export function CapabilityOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CapabilityOption {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': !exists(json, 'key') ? undefined : json['key'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'enabledByDefault': !exists(json, 'enabledByDefault') ? undefined : json['enabledByDefault'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'supportsWildcard': !exists(json, 'supportsWildcard') ? undefined : json['supportsWildcard'],
    };
}

export function CapabilityOptionToJSON(value?: CapabilityOption | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'name': value.name,
        'description': value.description,
        'enabledByDefault': value.enabledByDefault,
        'enabled': value.enabled,
        'supportsWildcard': value.supportsWildcard,
    };
}

