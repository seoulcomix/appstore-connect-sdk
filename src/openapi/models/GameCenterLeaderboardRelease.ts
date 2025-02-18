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
import type { GameCenterAchievementReleaseAttributes } from './GameCenterAchievementReleaseAttributes';
import {
    GameCenterAchievementReleaseAttributesFromJSON,
    GameCenterAchievementReleaseAttributesFromJSONTyped,
    GameCenterAchievementReleaseAttributesToJSON,
} from './GameCenterAchievementReleaseAttributes';
import type { GameCenterLeaderboardReleaseRelationships } from './GameCenterLeaderboardReleaseRelationships';
import {
    GameCenterLeaderboardReleaseRelationshipsFromJSON,
    GameCenterLeaderboardReleaseRelationshipsFromJSONTyped,
    GameCenterLeaderboardReleaseRelationshipsToJSON,
} from './GameCenterLeaderboardReleaseRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardRelease
 */
export interface GameCenterLeaderboardRelease {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardRelease
     */
    type: GameCenterLeaderboardReleaseTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardRelease
     */
    id: string;
    /**
     * 
     * @type {GameCenterAchievementReleaseAttributes}
     * @memberof GameCenterLeaderboardRelease
     */
    attributes?: GameCenterAchievementReleaseAttributes;
    /**
     * 
     * @type {GameCenterLeaderboardReleaseRelationships}
     * @memberof GameCenterLeaderboardRelease
     */
    relationships?: GameCenterLeaderboardReleaseRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof GameCenterLeaderboardRelease
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const GameCenterLeaderboardReleaseTypeEnum = {
    GameCenterLeaderboardReleases: 'gameCenterLeaderboardReleases'
} as const;
export type GameCenterLeaderboardReleaseTypeEnum = typeof GameCenterLeaderboardReleaseTypeEnum[keyof typeof GameCenterLeaderboardReleaseTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardRelease interface.
 */
export function instanceOfGameCenterLeaderboardRelease(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterLeaderboardReleaseFromJSON(json: any): GameCenterLeaderboardRelease {
    return GameCenterLeaderboardReleaseFromJSONTyped(json, false);
}

export function GameCenterLeaderboardReleaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardRelease {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : GameCenterAchievementReleaseAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : GameCenterLeaderboardReleaseRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function GameCenterLeaderboardReleaseToJSON(value?: GameCenterLeaderboardRelease | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GameCenterAchievementReleaseAttributesToJSON(value.attributes),
        'relationships': GameCenterLeaderboardReleaseRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

