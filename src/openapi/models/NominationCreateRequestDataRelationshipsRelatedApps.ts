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
import type { AlternativeDistributionKeyCreateRequestDataRelationshipsAppData } from './AlternativeDistributionKeyCreateRequestDataRelationshipsAppData';
import {
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataFromJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataFromJSONTyped,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataToJSON,
} from './AlternativeDistributionKeyCreateRequestDataRelationshipsAppData';

/**
 * 
 * @export
 * @interface NominationCreateRequestDataRelationshipsRelatedApps
 */
export interface NominationCreateRequestDataRelationshipsRelatedApps {
    /**
     * 
     * @type {Array<AlternativeDistributionKeyCreateRequestDataRelationshipsAppData>}
     * @memberof NominationCreateRequestDataRelationshipsRelatedApps
     */
    data: Array<AlternativeDistributionKeyCreateRequestDataRelationshipsAppData>;
}

/**
 * Check if a given object implements the NominationCreateRequestDataRelationshipsRelatedApps interface.
 */
export function instanceOfNominationCreateRequestDataRelationshipsRelatedApps(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function NominationCreateRequestDataRelationshipsRelatedAppsFromJSON(json: any): NominationCreateRequestDataRelationshipsRelatedApps {
    return NominationCreateRequestDataRelationshipsRelatedAppsFromJSONTyped(json, false);
}

export function NominationCreateRequestDataRelationshipsRelatedAppsFromJSONTyped(json: any, ignoreDiscriminator: boolean): NominationCreateRequestDataRelationshipsRelatedApps {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataFromJSON)),
    };
}

export function NominationCreateRequestDataRelationshipsRelatedAppsToJSON(value?: NominationCreateRequestDataRelationshipsRelatedApps | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataToJSON)),
    };
}

