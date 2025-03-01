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
 * @interface AppInfoLocalizationUpdateRequestDataAttributes
 */
export interface AppInfoLocalizationUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationUpdateRequestDataAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationUpdateRequestDataAttributes
     */
    subtitle?: string;
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationUpdateRequestDataAttributes
     */
    privacyPolicyUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationUpdateRequestDataAttributes
     */
    privacyChoicesUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationUpdateRequestDataAttributes
     */
    privacyPolicyText?: string;
}

/**
 * Check if a given object implements the AppInfoLocalizationUpdateRequestDataAttributes interface.
 */
export function instanceOfAppInfoLocalizationUpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppInfoLocalizationUpdateRequestDataAttributesFromJSON(json: any): AppInfoLocalizationUpdateRequestDataAttributes {
    return AppInfoLocalizationUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppInfoLocalizationUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoLocalizationUpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'subtitle': !exists(json, 'subtitle') ? undefined : json['subtitle'],
        'privacyPolicyUrl': !exists(json, 'privacyPolicyUrl') ? undefined : json['privacyPolicyUrl'],
        'privacyChoicesUrl': !exists(json, 'privacyChoicesUrl') ? undefined : json['privacyChoicesUrl'],
        'privacyPolicyText': !exists(json, 'privacyPolicyText') ? undefined : json['privacyPolicyText'],
    };
}

export function AppInfoLocalizationUpdateRequestDataAttributesToJSON(value?: AppInfoLocalizationUpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'subtitle': value.subtitle,
        'privacyPolicyUrl': value.privacyPolicyUrl,
        'privacyChoicesUrl': value.privacyChoicesUrl,
        'privacyPolicyText': value.privacyPolicyText,
    };
}

