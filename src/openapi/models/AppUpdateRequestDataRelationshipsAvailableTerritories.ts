/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AppPricePointV2RelationshipsTerritoryData } from './AppPricePointV2RelationshipsTerritoryData';
import {
    AppPricePointV2RelationshipsTerritoryDataFromJSON,
    AppPricePointV2RelationshipsTerritoryDataFromJSONTyped,
    AppPricePointV2RelationshipsTerritoryDataToJSON,
} from './AppPricePointV2RelationshipsTerritoryData';

/**
 * 
 * @export
 * @interface AppUpdateRequestDataRelationshipsAvailableTerritories
 */
export interface AppUpdateRequestDataRelationshipsAvailableTerritories {
    /**
     * 
     * @type {Array<AppPricePointV2RelationshipsTerritoryData>}
     * @memberof AppUpdateRequestDataRelationshipsAvailableTerritories
     */
    data?: Array<AppPricePointV2RelationshipsTerritoryData>;
}

/**
 * Check if a given object implements the AppUpdateRequestDataRelationshipsAvailableTerritories interface.
 */
export function instanceOfAppUpdateRequestDataRelationshipsAvailableTerritories(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppUpdateRequestDataRelationshipsAvailableTerritoriesFromJSON(json: any): AppUpdateRequestDataRelationshipsAvailableTerritories {
    return AppUpdateRequestDataRelationshipsAvailableTerritoriesFromJSONTyped(json, false);
}

export function AppUpdateRequestDataRelationshipsAvailableTerritoriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppUpdateRequestDataRelationshipsAvailableTerritories {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AppPricePointV2RelationshipsTerritoryDataFromJSON)),
    };
}

export function AppUpdateRequestDataRelationshipsAvailableTerritoriesToJSON(value?: AppUpdateRequestDataRelationshipsAvailableTerritories | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AppPricePointV2RelationshipsTerritoryDataToJSON)),
    };
}

