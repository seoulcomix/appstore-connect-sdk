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
import type { GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData } from './GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData';
import {
    GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataFromJSON,
    GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataFromJSONTyped,
    GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataToJSON,
} from './GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetRelationshipsLocalizations
 */
export interface GameCenterLeaderboardSetRelationshipsLocalizations {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof GameCenterLeaderboardSetRelationshipsLocalizations
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterLeaderboardSetRelationshipsLocalizations
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData>}
     * @memberof GameCenterLeaderboardSetRelationshipsLocalizations
     */
    data?: Array<GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData>;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetRelationshipsLocalizations interface.
 */
export function instanceOfGameCenterLeaderboardSetRelationshipsLocalizations(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterLeaderboardSetRelationshipsLocalizationsFromJSON(json: any): GameCenterLeaderboardSetRelationshipsLocalizations {
    return GameCenterLeaderboardSetRelationshipsLocalizationsFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetRelationshipsLocalizationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetRelationshipsLocalizations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataFromJSON)),
    };
}

export function GameCenterLeaderboardSetRelationshipsLocalizationsToJSON(value?: GameCenterLeaderboardSetRelationshipsLocalizations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataToJSON)),
    };
}

