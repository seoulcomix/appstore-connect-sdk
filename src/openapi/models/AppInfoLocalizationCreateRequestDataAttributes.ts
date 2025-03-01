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
 * @interface AppInfoLocalizationCreateRequestDataAttributes
 */
export interface AppInfoLocalizationCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationCreateRequestDataAttributes
     */
    locale: string;
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationCreateRequestDataAttributes
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationCreateRequestDataAttributes
     */
    subtitle?: string;
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationCreateRequestDataAttributes
     */
    privacyPolicyUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationCreateRequestDataAttributes
     */
    privacyChoicesUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationCreateRequestDataAttributes
     */
    privacyPolicyText?: string;
}

/**
 * Check if a given object implements the AppInfoLocalizationCreateRequestDataAttributes interface.
 */
export function instanceOfAppInfoLocalizationCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "locale" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function AppInfoLocalizationCreateRequestDataAttributesFromJSON(json: any): AppInfoLocalizationCreateRequestDataAttributes {
    return AppInfoLocalizationCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppInfoLocalizationCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoLocalizationCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'locale': json['locale'],
        'name': json['name'],
        'subtitle': !exists(json, 'subtitle') ? undefined : json['subtitle'],
        'privacyPolicyUrl': !exists(json, 'privacyPolicyUrl') ? undefined : json['privacyPolicyUrl'],
        'privacyChoicesUrl': !exists(json, 'privacyChoicesUrl') ? undefined : json['privacyChoicesUrl'],
        'privacyPolicyText': !exists(json, 'privacyPolicyText') ? undefined : json['privacyPolicyText'],
    };
}

export function AppInfoLocalizationCreateRequestDataAttributesToJSON(value?: AppInfoLocalizationCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'locale': value.locale,
        'name': value.name,
        'subtitle': value.subtitle,
        'privacyPolicyUrl': value.privacyPolicyUrl,
        'privacyChoicesUrl': value.privacyChoicesUrl,
        'privacyPolicyText': value.privacyPolicyText,
    };
}

