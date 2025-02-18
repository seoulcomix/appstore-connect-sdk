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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData } from './GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData';
import {
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSON,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSONTyped,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSON,
} from './GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData';

/**
 * 
 * @export
 * @interface GameCenterAchievementGroupAchievementLinkageResponse
 */
export interface GameCenterAchievementGroupAchievementLinkageResponse {
    /**
     * 
     * @type {GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData}
     * @memberof GameCenterAchievementGroupAchievementLinkageResponse
     */
    data: GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof GameCenterAchievementGroupAchievementLinkageResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the GameCenterAchievementGroupAchievementLinkageResponse interface.
 */
export function instanceOfGameCenterAchievementGroupAchievementLinkageResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterAchievementGroupAchievementLinkageResponseFromJSON(json: any): GameCenterAchievementGroupAchievementLinkageResponse {
    return GameCenterAchievementGroupAchievementLinkageResponseFromJSONTyped(json, false);
}

export function GameCenterAchievementGroupAchievementLinkageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementGroupAchievementLinkageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function GameCenterAchievementGroupAchievementLinkageResponseToJSON(value?: GameCenterAchievementGroupAchievementLinkageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

