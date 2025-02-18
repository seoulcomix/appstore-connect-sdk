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
import type { GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData } from './GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData';
import {
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageDataFromJSON,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageDataFromJSONTyped,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageDataToJSON,
} from './GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImage
 */
export interface GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImage {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImage
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData}
     * @memberof GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImage
     */
    data?: GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData;
}

/**
 * Check if a given object implements the GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImage interface.
 */
export function instanceOfGameCenterAchievementLocalizationRelationshipsGameCenterAchievementImage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageFromJSON(json: any): GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImage {
    return GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageFromJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageDataFromJSON(json['data']),
    };
}

export function GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageToJSON(value?: GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'data': GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageDataToJSON(value.data),
    };
}

