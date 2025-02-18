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
import type { AlternativeDistributionPackageCreateRequestDataRelationships } from './AlternativeDistributionPackageCreateRequestDataRelationships';
import {
    AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSON,
    AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSONTyped,
    AlternativeDistributionPackageCreateRequestDataRelationshipsToJSON,
} from './AlternativeDistributionPackageCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface AlternativeDistributionPackageCreateRequestData
 */
export interface AlternativeDistributionPackageCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AlternativeDistributionPackageCreateRequestData
     */
    type: AlternativeDistributionPackageCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AlternativeDistributionPackageCreateRequestDataRelationships}
     * @memberof AlternativeDistributionPackageCreateRequestData
     */
    relationships: AlternativeDistributionPackageCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AlternativeDistributionPackageCreateRequestDataTypeEnum = {
    AlternativeDistributionPackages: 'alternativeDistributionPackages'
} as const;
export type AlternativeDistributionPackageCreateRequestDataTypeEnum = typeof AlternativeDistributionPackageCreateRequestDataTypeEnum[keyof typeof AlternativeDistributionPackageCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AlternativeDistributionPackageCreateRequestData interface.
 */
export function instanceOfAlternativeDistributionPackageCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function AlternativeDistributionPackageCreateRequestDataFromJSON(json: any): AlternativeDistributionPackageCreateRequestData {
    return AlternativeDistributionPackageCreateRequestDataFromJSONTyped(json, false);
}

export function AlternativeDistributionPackageCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'relationships': AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AlternativeDistributionPackageCreateRequestDataToJSON(value?: AlternativeDistributionPackageCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'relationships': AlternativeDistributionPackageCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

