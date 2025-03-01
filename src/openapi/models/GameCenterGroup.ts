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
import type { GameCenterGroupAttributes } from './GameCenterGroupAttributes';
import {
    GameCenterGroupAttributesFromJSON,
    GameCenterGroupAttributesFromJSONTyped,
    GameCenterGroupAttributesToJSON,
} from './GameCenterGroupAttributes';
import type { GameCenterGroupRelationships } from './GameCenterGroupRelationships';
import {
    GameCenterGroupRelationshipsFromJSON,
    GameCenterGroupRelationshipsFromJSONTyped,
    GameCenterGroupRelationshipsToJSON,
} from './GameCenterGroupRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface GameCenterGroup
 */
export interface GameCenterGroup {
    /**
     * 
     * @type {string}
     * @memberof GameCenterGroup
     */
    type: GameCenterGroupTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterGroup
     */
    id: string;
    /**
     * 
     * @type {GameCenterGroupAttributes}
     * @memberof GameCenterGroup
     */
    attributes?: GameCenterGroupAttributes;
    /**
     * 
     * @type {GameCenterGroupRelationships}
     * @memberof GameCenterGroup
     */
    relationships?: GameCenterGroupRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof GameCenterGroup
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const GameCenterGroupTypeEnum = {
    GameCenterGroups: 'gameCenterGroups'
} as const;
export type GameCenterGroupTypeEnum = typeof GameCenterGroupTypeEnum[keyof typeof GameCenterGroupTypeEnum];


/**
 * Check if a given object implements the GameCenterGroup interface.
 */
export function instanceOfGameCenterGroup(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterGroupFromJSON(json: any): GameCenterGroup {
    return GameCenterGroupFromJSONTyped(json, false);
}

export function GameCenterGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : GameCenterGroupAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : GameCenterGroupRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function GameCenterGroupToJSON(value?: GameCenterGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GameCenterGroupAttributesToJSON(value.attributes),
        'relationships': GameCenterGroupRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

