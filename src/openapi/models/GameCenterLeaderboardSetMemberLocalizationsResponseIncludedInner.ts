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

import {
    GameCenterLeaderboard,
    instanceOfGameCenterLeaderboard,
    GameCenterLeaderboardFromJSON,
    GameCenterLeaderboardFromJSONTyped,
    GameCenterLeaderboardToJSON,
} from './GameCenterLeaderboard';
import {
    GameCenterLeaderboardSet,
    instanceOfGameCenterLeaderboardSet,
    GameCenterLeaderboardSetFromJSON,
    GameCenterLeaderboardSetFromJSONTyped,
    GameCenterLeaderboardSetToJSON,
} from './GameCenterLeaderboardSet';

/**
 * @type GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInner
 * 
 * @export
 */
export type GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInner = GameCenterLeaderboard | GameCenterLeaderboardSet;

export function GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInnerFromJSON(json: any): GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInner {
    return GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInnerFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...GameCenterLeaderboardFromJSONTyped(json, true), ...GameCenterLeaderboardSetFromJSONTyped(json, true) };
}

export function GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInnerToJSON(value?: GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfGameCenterLeaderboard(value)) {
        return GameCenterLeaderboardToJSON(value as GameCenterLeaderboard);
    }
    if (instanceOfGameCenterLeaderboardSet(value)) {
        return GameCenterLeaderboardSetToJSON(value as GameCenterLeaderboardSet);
    }

    return {};
}

