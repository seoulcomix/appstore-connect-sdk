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
import type { GameCenterMatchmakingTeamAttributes } from './GameCenterMatchmakingTeamAttributes';
import {
    GameCenterMatchmakingTeamAttributesFromJSON,
    GameCenterMatchmakingTeamAttributesFromJSONTyped,
    GameCenterMatchmakingTeamAttributesToJSON,
} from './GameCenterMatchmakingTeamAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingTeam
 */
export interface GameCenterMatchmakingTeam {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingTeam
     */
    type: GameCenterMatchmakingTeamTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingTeam
     */
    id: string;
    /**
     * 
     * @type {GameCenterMatchmakingTeamAttributes}
     * @memberof GameCenterMatchmakingTeam
     */
    attributes?: GameCenterMatchmakingTeamAttributes;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof GameCenterMatchmakingTeam
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const GameCenterMatchmakingTeamTypeEnum = {
    GameCenterMatchmakingTeams: 'gameCenterMatchmakingTeams'
} as const;
export type GameCenterMatchmakingTeamTypeEnum = typeof GameCenterMatchmakingTeamTypeEnum[keyof typeof GameCenterMatchmakingTeamTypeEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingTeam interface.
 */
export function instanceOfGameCenterMatchmakingTeam(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterMatchmakingTeamFromJSON(json: any): GameCenterMatchmakingTeam {
    return GameCenterMatchmakingTeamFromJSONTyped(json, false);
}

export function GameCenterMatchmakingTeamFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingTeam {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : GameCenterMatchmakingTeamAttributesFromJSON(json['attributes']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function GameCenterMatchmakingTeamToJSON(value?: GameCenterMatchmakingTeam | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GameCenterMatchmakingTeamAttributesToJSON(value.attributes),
        'links': ResourceLinksToJSON(value.links),
    };
}

