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
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
} from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetMemberLocalizationsResponse
 */
export interface GameCenterLeaderboardSetMemberLocalizationsResponse {
    /**
     * 
     * @type {Array<GameCenterLeaderboardSetMemberLocalization>}
     * @memberof GameCenterLeaderboardSetMemberLocalizationsResponse
     */
    data: Array<GameCenterLeaderboardSetMemberLocalization>;
    /**
     * 
     * @type {Array<GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInner>}
     * @memberof GameCenterLeaderboardSetMemberLocalizationsResponse
     */
    included?: Array<GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof GameCenterLeaderboardSetMemberLocalizationsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterLeaderboardSetMemberLocalizationsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetMemberLocalizationsResponse interface.
 */
export function instanceOfGameCenterLeaderboardSetMemberLocalizationsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterLeaderboardSetMemberLocalizationsResponseFromJSON(json: any): GameCenterLeaderboardSetMemberLocalizationsResponse {
    return GameCenterLeaderboardSetMemberLocalizationsResponseFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetMemberLocalizationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetMemberLocalizationsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GameCenterLeaderboardSetMemberLocalizationFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function GameCenterLeaderboardSetMemberLocalizationsResponseToJSON(value?: GameCenterLeaderboardSetMemberLocalizationsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(GameCenterLeaderboardSetMemberLocalizationToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

