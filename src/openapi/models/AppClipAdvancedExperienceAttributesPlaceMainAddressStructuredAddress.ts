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
 * @interface AppClipAdvancedExperienceAttributesPlaceMainAddressStructuredAddress
 */
export interface AppClipAdvancedExperienceAttributesPlaceMainAddressStructuredAddress {
    /**
     * 
     * @type {Array<string>}
     * @memberof AppClipAdvancedExperienceAttributesPlaceMainAddressStructuredAddress
     */
    streetAddress?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceAttributesPlaceMainAddressStructuredAddress
     */
    floor?: string;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceAttributesPlaceMainAddressStructuredAddress
     */
    neighborhood?: string;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceAttributesPlaceMainAddressStructuredAddress
     */
    locality?: string;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceAttributesPlaceMainAddressStructuredAddress
     */
    stateProvince?: string;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceAttributesPlaceMainAddressStructuredAddress
     */
    postalCode?: string;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceAttributesPlaceMainAddressStructuredAddress
     */
    countryCode?: string;
}

/**
 * Check if a given object implements the AppClipAdvancedExperienceAttributesPlaceMainAddressStructuredAddress interface.
 */
export function instanceOfAppClipAdvancedExperienceAttributesPlaceMainAddressStructuredAddress(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppClipAdvancedExperienceAttributesPlaceMainAddressStructuredAddressFromJSON(json: any): AppClipAdvancedExperienceAttributesPlaceMainAddressStructuredAddress {
    return AppClipAdvancedExperienceAttributesPlaceMainAddressStructuredAddressFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceAttributesPlaceMainAddressStructuredAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceAttributesPlaceMainAddressStructuredAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'streetAddress': !exists(json, 'streetAddress') ? undefined : json['streetAddress'],
        'floor': !exists(json, 'floor') ? undefined : json['floor'],
        'neighborhood': !exists(json, 'neighborhood') ? undefined : json['neighborhood'],
        'locality': !exists(json, 'locality') ? undefined : json['locality'],
        'stateProvince': !exists(json, 'stateProvince') ? undefined : json['stateProvince'],
        'postalCode': !exists(json, 'postalCode') ? undefined : json['postalCode'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
    };
}

export function AppClipAdvancedExperienceAttributesPlaceMainAddressStructuredAddressToJSON(value?: AppClipAdvancedExperienceAttributesPlaceMainAddressStructuredAddress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'streetAddress': value.streetAddress,
        'floor': value.floor,
        'neighborhood': value.neighborhood,
        'locality': value.locality,
        'stateProvince': value.stateProvince,
        'postalCode': value.postalCode,
        'countryCode': value.countryCode,
    };
}

