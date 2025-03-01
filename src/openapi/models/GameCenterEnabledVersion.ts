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
import type { GameCenterEnabledVersionAttributes } from './GameCenterEnabledVersionAttributes';
import {
    GameCenterEnabledVersionAttributesFromJSON,
    GameCenterEnabledVersionAttributesFromJSONTyped,
    GameCenterEnabledVersionAttributesToJSON,
} from './GameCenterEnabledVersionAttributes';
import type { GameCenterEnabledVersionRelationships } from './GameCenterEnabledVersionRelationships';
import {
    GameCenterEnabledVersionRelationshipsFromJSON,
    GameCenterEnabledVersionRelationshipsFromJSONTyped,
    GameCenterEnabledVersionRelationshipsToJSON,
} from './GameCenterEnabledVersionRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface GameCenterEnabledVersion
 */
export interface GameCenterEnabledVersion {
    /**
     * 
     * @type {string}
     * @memberof GameCenterEnabledVersion
     */
    type: GameCenterEnabledVersionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterEnabledVersion
     */
    id: string;
    /**
     * 
     * @type {GameCenterEnabledVersionAttributes}
     * @memberof GameCenterEnabledVersion
     */
    attributes?: GameCenterEnabledVersionAttributes;
    /**
     * 
     * @type {GameCenterEnabledVersionRelationships}
     * @memberof GameCenterEnabledVersion
     */
    relationships?: GameCenterEnabledVersionRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof GameCenterEnabledVersion
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const GameCenterEnabledVersionTypeEnum = {
    GameCenterEnabledVersions: 'gameCenterEnabledVersions'
} as const;
export type GameCenterEnabledVersionTypeEnum = typeof GameCenterEnabledVersionTypeEnum[keyof typeof GameCenterEnabledVersionTypeEnum];


/**
 * Check if a given object implements the GameCenterEnabledVersion interface.
 */
export function instanceOfGameCenterEnabledVersion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterEnabledVersionFromJSON(json: any): GameCenterEnabledVersion {
    return GameCenterEnabledVersionFromJSONTyped(json, false);
}

export function GameCenterEnabledVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterEnabledVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : GameCenterEnabledVersionAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : GameCenterEnabledVersionRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function GameCenterEnabledVersionToJSON(value?: GameCenterEnabledVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GameCenterEnabledVersionAttributesToJSON(value.attributes),
        'relationships': GameCenterEnabledVersionRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

