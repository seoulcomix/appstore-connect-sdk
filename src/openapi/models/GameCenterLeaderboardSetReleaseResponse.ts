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
import type { GameCenterLeaderboardSetRelease } from './GameCenterLeaderboardSetRelease';
import {
    GameCenterLeaderboardSetReleaseFromJSON,
    GameCenterLeaderboardSetReleaseFromJSONTyped,
    GameCenterLeaderboardSetReleaseToJSON,
} from './GameCenterLeaderboardSetRelease';
import type { GameCenterLeaderboardSetReleasesResponseIncludedInner } from './GameCenterLeaderboardSetReleasesResponseIncludedInner';
import {
    GameCenterLeaderboardSetReleasesResponseIncludedInnerFromJSON,
    GameCenterLeaderboardSetReleasesResponseIncludedInnerFromJSONTyped,
    GameCenterLeaderboardSetReleasesResponseIncludedInnerToJSON,
} from './GameCenterLeaderboardSetReleasesResponseIncludedInner';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetReleaseResponse
 */
export interface GameCenterLeaderboardSetReleaseResponse {
    /**
     * 
     * @type {GameCenterLeaderboardSetRelease}
     * @memberof GameCenterLeaderboardSetReleaseResponse
     */
    data: GameCenterLeaderboardSetRelease;
    /**
     * 
     * @type {Array<GameCenterLeaderboardSetReleasesResponseIncludedInner>}
     * @memberof GameCenterLeaderboardSetReleaseResponse
     */
    included?: Array<GameCenterLeaderboardSetReleasesResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof GameCenterLeaderboardSetReleaseResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetReleaseResponse interface.
 */
export function instanceOfGameCenterLeaderboardSetReleaseResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterLeaderboardSetReleaseResponseFromJSON(json: any): GameCenterLeaderboardSetReleaseResponse {
    return GameCenterLeaderboardSetReleaseResponseFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetReleaseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetReleaseResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterLeaderboardSetReleaseFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(GameCenterLeaderboardSetReleasesResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function GameCenterLeaderboardSetReleaseResponseToJSON(value?: GameCenterLeaderboardSetReleaseResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterLeaderboardSetReleaseToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(GameCenterLeaderboardSetReleasesResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

