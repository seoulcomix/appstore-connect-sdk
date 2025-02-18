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
import type { AppStoreVersionPhasedReleaseCreateRequestDataAttributes } from './AppStoreVersionPhasedReleaseCreateRequestDataAttributes';
import {
    AppStoreVersionPhasedReleaseCreateRequestDataAttributesFromJSON,
    AppStoreVersionPhasedReleaseCreateRequestDataAttributesFromJSONTyped,
    AppStoreVersionPhasedReleaseCreateRequestDataAttributesToJSON,
} from './AppStoreVersionPhasedReleaseCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppStoreVersionPhasedReleaseCreateRequestData
 */
export interface AppStoreVersionPhasedReleaseCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionPhasedReleaseCreateRequestData
     */
    type: AppStoreVersionPhasedReleaseCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppStoreVersionPhasedReleaseCreateRequestDataAttributes}
     * @memberof AppStoreVersionPhasedReleaseCreateRequestData
     */
    attributes?: AppStoreVersionPhasedReleaseCreateRequestDataAttributes;
    /**
     * 
     * @type {AlternativeDistributionPackageCreateRequestDataRelationships}
     * @memberof AppStoreVersionPhasedReleaseCreateRequestData
     */
    relationships: AlternativeDistributionPackageCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppStoreVersionPhasedReleaseCreateRequestDataTypeEnum = {
    AppStoreVersionPhasedReleases: 'appStoreVersionPhasedReleases'
} as const;
export type AppStoreVersionPhasedReleaseCreateRequestDataTypeEnum = typeof AppStoreVersionPhasedReleaseCreateRequestDataTypeEnum[keyof typeof AppStoreVersionPhasedReleaseCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppStoreVersionPhasedReleaseCreateRequestData interface.
 */
export function instanceOfAppStoreVersionPhasedReleaseCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function AppStoreVersionPhasedReleaseCreateRequestDataFromJSON(json: any): AppStoreVersionPhasedReleaseCreateRequestData {
    return AppStoreVersionPhasedReleaseCreateRequestDataFromJSONTyped(json, false);
}

export function AppStoreVersionPhasedReleaseCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionPhasedReleaseCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': !exists(json, 'attributes') ? undefined : AppStoreVersionPhasedReleaseCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppStoreVersionPhasedReleaseCreateRequestDataToJSON(value?: AppStoreVersionPhasedReleaseCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppStoreVersionPhasedReleaseCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': AlternativeDistributionPackageCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

