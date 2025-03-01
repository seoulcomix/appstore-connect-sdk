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
import type { AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion } from './AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion';
import {
    AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionFromJSON,
    AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionFromJSONTyped,
    AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionToJSON,
} from './AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion';

/**
 * 
 * @export
 * @interface AlternativeDistributionPackageCreateRequestDataRelationships
 */
export interface AlternativeDistributionPackageCreateRequestDataRelationships {
    /**
     * 
     * @type {AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion}
     * @memberof AlternativeDistributionPackageCreateRequestDataRelationships
     */
    appStoreVersion: AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion;
}

/**
 * Check if a given object implements the AlternativeDistributionPackageCreateRequestDataRelationships interface.
 */
export function instanceOfAlternativeDistributionPackageCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "appStoreVersion" in value;

    return isInstance;
}

export function AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSON(json: any): AlternativeDistributionPackageCreateRequestDataRelationships {
    return AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appStoreVersion': AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionFromJSON(json['appStoreVersion']),
    };
}

export function AlternativeDistributionPackageCreateRequestDataRelationshipsToJSON(value?: AlternativeDistributionPackageCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appStoreVersion': AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionToJSON(value.appStoreVersion),
    };
}

