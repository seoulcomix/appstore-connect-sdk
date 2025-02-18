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
import type { BetaRecruitmentCriterionOptionAttributesDeviceFamilyOsVersionsInner } from './BetaRecruitmentCriterionOptionAttributesDeviceFamilyOsVersionsInner';
import {
    BetaRecruitmentCriterionOptionAttributesDeviceFamilyOsVersionsInnerFromJSON,
    BetaRecruitmentCriterionOptionAttributesDeviceFamilyOsVersionsInnerFromJSONTyped,
    BetaRecruitmentCriterionOptionAttributesDeviceFamilyOsVersionsInnerToJSON,
} from './BetaRecruitmentCriterionOptionAttributesDeviceFamilyOsVersionsInner';

/**
 * 
 * @export
 * @interface BetaRecruitmentCriterionOptionAttributes
 */
export interface BetaRecruitmentCriterionOptionAttributes {
    /**
     * 
     * @type {Array<BetaRecruitmentCriterionOptionAttributesDeviceFamilyOsVersionsInner>}
     * @memberof BetaRecruitmentCriterionOptionAttributes
     */
    deviceFamilyOsVersions?: Array<BetaRecruitmentCriterionOptionAttributesDeviceFamilyOsVersionsInner>;
}

/**
 * Check if a given object implements the BetaRecruitmentCriterionOptionAttributes interface.
 */
export function instanceOfBetaRecruitmentCriterionOptionAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BetaRecruitmentCriterionOptionAttributesFromJSON(json: any): BetaRecruitmentCriterionOptionAttributes {
    return BetaRecruitmentCriterionOptionAttributesFromJSONTyped(json, false);
}

export function BetaRecruitmentCriterionOptionAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaRecruitmentCriterionOptionAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deviceFamilyOsVersions': !exists(json, 'deviceFamilyOsVersions') ? undefined : ((json['deviceFamilyOsVersions'] as Array<any>).map(BetaRecruitmentCriterionOptionAttributesDeviceFamilyOsVersionsInnerFromJSON)),
    };
}

export function BetaRecruitmentCriterionOptionAttributesToJSON(value?: BetaRecruitmentCriterionOptionAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deviceFamilyOsVersions': value.deviceFamilyOsVersions === undefined ? undefined : ((value.deviceFamilyOsVersions as Array<any>).map(BetaRecruitmentCriterionOptionAttributesDeviceFamilyOsVersionsInnerToJSON)),
    };
}

