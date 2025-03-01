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
import type { GameCenterLeaderboardRelease } from './GameCenterLeaderboardRelease';
import {
    GameCenterLeaderboardReleaseFromJSON,
    GameCenterLeaderboardReleaseFromJSONTyped,
    GameCenterLeaderboardReleaseToJSON,
} from './GameCenterLeaderboardRelease';
import type { GameCenterLeaderboardReleasesResponseIncludedInner } from './GameCenterLeaderboardReleasesResponseIncludedInner';
import {
    GameCenterLeaderboardReleasesResponseIncludedInnerFromJSON,
    GameCenterLeaderboardReleasesResponseIncludedInnerFromJSONTyped,
    GameCenterLeaderboardReleasesResponseIncludedInnerToJSON,
} from './GameCenterLeaderboardReleasesResponseIncludedInner';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardReleaseResponse
 */
export interface GameCenterLeaderboardReleaseResponse {
    /**
     * 
     * @type {GameCenterLeaderboardRelease}
     * @memberof GameCenterLeaderboardReleaseResponse
     */
    data: GameCenterLeaderboardRelease;
    /**
     * 
     * @type {Array<GameCenterLeaderboardReleasesResponseIncludedInner>}
     * @memberof GameCenterLeaderboardReleaseResponse
     */
    included?: Array<GameCenterLeaderboardReleasesResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof GameCenterLeaderboardReleaseResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the GameCenterLeaderboardReleaseResponse interface.
 */
export function instanceOfGameCenterLeaderboardReleaseResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterLeaderboardReleaseResponseFromJSON(json: any): GameCenterLeaderboardReleaseResponse {
    return GameCenterLeaderboardReleaseResponseFromJSONTyped(json, false);
}

export function GameCenterLeaderboardReleaseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardReleaseResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterLeaderboardReleaseFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(GameCenterLeaderboardReleasesResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function GameCenterLeaderboardReleaseResponseToJSON(value?: GameCenterLeaderboardReleaseResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterLeaderboardReleaseToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(GameCenterLeaderboardReleasesResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

