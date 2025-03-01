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
import type { GameCenterAchievementImageAttributes } from './GameCenterAchievementImageAttributes';
import {
    GameCenterAchievementImageAttributesFromJSON,
    GameCenterAchievementImageAttributesFromJSONTyped,
    GameCenterAchievementImageAttributesToJSON,
} from './GameCenterAchievementImageAttributes';
import type { GameCenterAchievementImageRelationships } from './GameCenterAchievementImageRelationships';
import {
    GameCenterAchievementImageRelationshipsFromJSON,
    GameCenterAchievementImageRelationshipsFromJSONTyped,
    GameCenterAchievementImageRelationshipsToJSON,
} from './GameCenterAchievementImageRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface GameCenterAchievementImage
 */
export interface GameCenterAchievementImage {
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementImage
     */
    type: GameCenterAchievementImageTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementImage
     */
    id: string;
    /**
     * 
     * @type {GameCenterAchievementImageAttributes}
     * @memberof GameCenterAchievementImage
     */
    attributes?: GameCenterAchievementImageAttributes;
    /**
     * 
     * @type {GameCenterAchievementImageRelationships}
     * @memberof GameCenterAchievementImage
     */
    relationships?: GameCenterAchievementImageRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof GameCenterAchievementImage
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const GameCenterAchievementImageTypeEnum = {
    GameCenterAchievementImages: 'gameCenterAchievementImages'
} as const;
export type GameCenterAchievementImageTypeEnum = typeof GameCenterAchievementImageTypeEnum[keyof typeof GameCenterAchievementImageTypeEnum];


/**
 * Check if a given object implements the GameCenterAchievementImage interface.
 */
export function instanceOfGameCenterAchievementImage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterAchievementImageFromJSON(json: any): GameCenterAchievementImage {
    return GameCenterAchievementImageFromJSONTyped(json, false);
}

export function GameCenterAchievementImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementImage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : GameCenterAchievementImageAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : GameCenterAchievementImageRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function GameCenterAchievementImageToJSON(value?: GameCenterAchievementImage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GameCenterAchievementImageAttributesToJSON(value.attributes),
        'relationships': GameCenterAchievementImageRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

