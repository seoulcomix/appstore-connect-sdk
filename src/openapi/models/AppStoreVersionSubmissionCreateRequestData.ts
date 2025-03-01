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
 * @interface AppStoreVersionSubmissionCreateRequestData
 */
export interface AppStoreVersionSubmissionCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionSubmissionCreateRequestData
     */
    type: AppStoreVersionSubmissionCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AlternativeDistributionPackageCreateRequestDataRelationships}
     * @memberof AppStoreVersionSubmissionCreateRequestData
     */
    relationships: AlternativeDistributionPackageCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppStoreVersionSubmissionCreateRequestDataTypeEnum = {
    AppStoreVersionSubmissions: 'appStoreVersionSubmissions'
} as const;
export type AppStoreVersionSubmissionCreateRequestDataTypeEnum = typeof AppStoreVersionSubmissionCreateRequestDataTypeEnum[keyof typeof AppStoreVersionSubmissionCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppStoreVersionSubmissionCreateRequestData interface.
 */
export function instanceOfAppStoreVersionSubmissionCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function AppStoreVersionSubmissionCreateRequestDataFromJSON(json: any): AppStoreVersionSubmissionCreateRequestData {
    return AppStoreVersionSubmissionCreateRequestDataFromJSONTyped(json, false);
}

export function AppStoreVersionSubmissionCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionSubmissionCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'relationships': AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppStoreVersionSubmissionCreateRequestDataToJSON(value?: AppStoreVersionSubmissionCreateRequestData | null): any {
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

