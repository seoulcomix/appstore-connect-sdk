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
import type { DeviceFamilyOsVersionFilter } from './DeviceFamilyOsVersionFilter';
import {
    DeviceFamilyOsVersionFilterFromJSON,
    DeviceFamilyOsVersionFilterFromJSONTyped,
    DeviceFamilyOsVersionFilterToJSON,
} from './DeviceFamilyOsVersionFilter';

/**
 * 
 * @export
 * @interface BetaRecruitmentCriterionUpdateRequestDataAttributes
 */
export interface BetaRecruitmentCriterionUpdateRequestDataAttributes {
    /**
     * 
     * @type {Array<DeviceFamilyOsVersionFilter>}
     * @memberof BetaRecruitmentCriterionUpdateRequestDataAttributes
     */
    deviceFamilyOsVersionFilters?: Array<DeviceFamilyOsVersionFilter>;
}

/**
 * Check if a given object implements the BetaRecruitmentCriterionUpdateRequestDataAttributes interface.
 */
export function instanceOfBetaRecruitmentCriterionUpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BetaRecruitmentCriterionUpdateRequestDataAttributesFromJSON(json: any): BetaRecruitmentCriterionUpdateRequestDataAttributes {
    return BetaRecruitmentCriterionUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function BetaRecruitmentCriterionUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaRecruitmentCriterionUpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deviceFamilyOsVersionFilters': !exists(json, 'deviceFamilyOsVersionFilters') ? undefined : ((json['deviceFamilyOsVersionFilters'] as Array<any>).map(DeviceFamilyOsVersionFilterFromJSON)),
    };
}

export function BetaRecruitmentCriterionUpdateRequestDataAttributesToJSON(value?: BetaRecruitmentCriterionUpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deviceFamilyOsVersionFilters': value.deviceFamilyOsVersionFilters === undefined ? undefined : ((value.deviceFamilyOsVersionFilters as Array<any>).map(DeviceFamilyOsVersionFilterToJSON)),
    };
}

