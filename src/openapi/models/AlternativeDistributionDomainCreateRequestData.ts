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
import type { AlternativeDistributionDomainCreateRequestDataAttributes } from './AlternativeDistributionDomainCreateRequestDataAttributes';
import {
    AlternativeDistributionDomainCreateRequestDataAttributesFromJSON,
    AlternativeDistributionDomainCreateRequestDataAttributesFromJSONTyped,
    AlternativeDistributionDomainCreateRequestDataAttributesToJSON,
} from './AlternativeDistributionDomainCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AlternativeDistributionDomainCreateRequestData
 */
export interface AlternativeDistributionDomainCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AlternativeDistributionDomainCreateRequestData
     */
    type: AlternativeDistributionDomainCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AlternativeDistributionDomainCreateRequestDataAttributes}
     * @memberof AlternativeDistributionDomainCreateRequestData
     */
    attributes: AlternativeDistributionDomainCreateRequestDataAttributes;
}


/**
 * @export
 */
export const AlternativeDistributionDomainCreateRequestDataTypeEnum = {
    AlternativeDistributionDomains: 'alternativeDistributionDomains'
} as const;
export type AlternativeDistributionDomainCreateRequestDataTypeEnum = typeof AlternativeDistributionDomainCreateRequestDataTypeEnum[keyof typeof AlternativeDistributionDomainCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AlternativeDistributionDomainCreateRequestData interface.
 */
export function instanceOfAlternativeDistributionDomainCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function AlternativeDistributionDomainCreateRequestDataFromJSON(json: any): AlternativeDistributionDomainCreateRequestData {
    return AlternativeDistributionDomainCreateRequestDataFromJSONTyped(json, false);
}

export function AlternativeDistributionDomainCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionDomainCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AlternativeDistributionDomainCreateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function AlternativeDistributionDomainCreateRequestDataToJSON(value?: AlternativeDistributionDomainCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AlternativeDistributionDomainCreateRequestDataAttributesToJSON(value.attributes),
    };
}

