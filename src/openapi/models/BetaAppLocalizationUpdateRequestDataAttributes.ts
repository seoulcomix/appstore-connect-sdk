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
 * @interface BetaAppLocalizationUpdateRequestDataAttributes
 */
export interface BetaAppLocalizationUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof BetaAppLocalizationUpdateRequestDataAttributes
     */
    feedbackEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof BetaAppLocalizationUpdateRequestDataAttributes
     */
    marketingUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof BetaAppLocalizationUpdateRequestDataAttributes
     */
    privacyPolicyUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof BetaAppLocalizationUpdateRequestDataAttributes
     */
    tvOsPrivacyPolicy?: string;
    /**
     * 
     * @type {string}
     * @memberof BetaAppLocalizationUpdateRequestDataAttributes
     */
    description?: string;
}

/**
 * Check if a given object implements the BetaAppLocalizationUpdateRequestDataAttributes interface.
 */
export function instanceOfBetaAppLocalizationUpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BetaAppLocalizationUpdateRequestDataAttributesFromJSON(json: any): BetaAppLocalizationUpdateRequestDataAttributes {
    return BetaAppLocalizationUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function BetaAppLocalizationUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppLocalizationUpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'feedbackEmail': !exists(json, 'feedbackEmail') ? undefined : json['feedbackEmail'],
        'marketingUrl': !exists(json, 'marketingUrl') ? undefined : json['marketingUrl'],
        'privacyPolicyUrl': !exists(json, 'privacyPolicyUrl') ? undefined : json['privacyPolicyUrl'],
        'tvOsPrivacyPolicy': !exists(json, 'tvOsPrivacyPolicy') ? undefined : json['tvOsPrivacyPolicy'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function BetaAppLocalizationUpdateRequestDataAttributesToJSON(value?: BetaAppLocalizationUpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'feedbackEmail': value.feedbackEmail,
        'marketingUrl': value.marketingUrl,
        'privacyPolicyUrl': value.privacyPolicyUrl,
        'tvOsPrivacyPolicy': value.tvOsPrivacyPolicy,
        'description': value.description,
    };
}

