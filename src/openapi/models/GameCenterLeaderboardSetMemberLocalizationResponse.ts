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
import type { GameCenterLeaderboardSetMemberLocalization } from './GameCenterLeaderboardSetMemberLocalization';
import {
    GameCenterLeaderboardSetMemberLocalizationFromJSON,
    GameCenterLeaderboardSetMemberLocalizationFromJSONTyped,
    GameCenterLeaderboardSetMemberLocalizationToJSON,
} from './GameCenterLeaderboardSetMemberLocalization';
import type { GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInner } from './GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInner';
import {
    GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInnerFromJSON,
    GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInnerFromJSONTyped,
    GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInnerToJSON,
} from './GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInner';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetMemberLocalizationResponse
 */
export interface GameCenterLeaderboardSetMemberLocalizationResponse {
    /**
     * 
     * @type {GameCenterLeaderboardSetMemberLocalization}
     * @memberof GameCenterLeaderboardSetMemberLocalizationResponse
     */
    data: GameCenterLeaderboardSetMemberLocalization;
    /**
     * 
     * @type {Array<GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInner>}
     * @memberof GameCenterLeaderboardSetMemberLocalizationResponse
     */
    included?: Array<GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof GameCenterLeaderboardSetMemberLocalizationResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetMemberLocalizationResponse interface.
 */
export function instanceOfGameCenterLeaderboardSetMemberLocalizationResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterLeaderboardSetMemberLocalizationResponseFromJSON(json: any): GameCenterLeaderboardSetMemberLocalizationResponse {
    return GameCenterLeaderboardSetMemberLocalizationResponseFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetMemberLocalizationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetMemberLocalizationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterLeaderboardSetMemberLocalizationFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function GameCenterLeaderboardSetMemberLocalizationResponseToJSON(value?: GameCenterLeaderboardSetMemberLocalizationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterLeaderboardSetMemberLocalizationToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

