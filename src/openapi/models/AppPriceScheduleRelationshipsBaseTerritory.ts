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
import type { AppPricePointV3RelationshipsTerritoryData } from './AppPricePointV3RelationshipsTerritoryData';
import {
    AppPricePointV3RelationshipsTerritoryDataFromJSON,
    AppPricePointV3RelationshipsTerritoryDataFromJSONTyped,
    AppPricePointV3RelationshipsTerritoryDataToJSON,
} from './AppPricePointV3RelationshipsTerritoryData';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface AppPriceScheduleRelationshipsBaseTerritory
 */
export interface AppPriceScheduleRelationshipsBaseTerritory {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppPriceScheduleRelationshipsBaseTerritory
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {AppPricePointV3RelationshipsTerritoryData}
     * @memberof AppPriceScheduleRelationshipsBaseTerritory
     */
    data?: AppPricePointV3RelationshipsTerritoryData;
}

/**
 * Check if a given object implements the AppPriceScheduleRelationshipsBaseTerritory interface.
 */
export function instanceOfAppPriceScheduleRelationshipsBaseTerritory(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppPriceScheduleRelationshipsBaseTerritoryFromJSON(json: any): AppPriceScheduleRelationshipsBaseTerritory {
    return AppPriceScheduleRelationshipsBaseTerritoryFromJSONTyped(json, false);
}

export function AppPriceScheduleRelationshipsBaseTerritoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceScheduleRelationshipsBaseTerritory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppPricePointV3RelationshipsTerritoryDataFromJSON(json['data']),
    };
}

export function AppPriceScheduleRelationshipsBaseTerritoryToJSON(value?: AppPriceScheduleRelationshipsBaseTerritory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'data': AppPricePointV3RelationshipsTerritoryDataToJSON(value.data),
    };
}

