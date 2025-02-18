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
    App,
    instanceOfApp,
    AppFromJSON,
    AppFromJSONTyped,
    AppToJSON,
} from './App';
import {
    GameCenterAchievement,
    instanceOfGameCenterAchievement,
    GameCenterAchievementFromJSON,
    GameCenterAchievementFromJSONTyped,
    GameCenterAchievementToJSON,
} from './GameCenterAchievement';
import {
    GameCenterAchievementRelease,
    instanceOfGameCenterAchievementRelease,
    GameCenterAchievementReleaseFromJSON,
    GameCenterAchievementReleaseFromJSONTyped,
    GameCenterAchievementReleaseToJSON,
} from './GameCenterAchievementRelease';
import {
    GameCenterAppVersion,
    instanceOfGameCenterAppVersion,
    GameCenterAppVersionFromJSON,
    GameCenterAppVersionFromJSONTyped,
    GameCenterAppVersionToJSON,
} from './GameCenterAppVersion';
import {
    GameCenterGroup,
    instanceOfGameCenterGroup,
    GameCenterGroupFromJSON,
    GameCenterGroupFromJSONTyped,
    GameCenterGroupToJSON,
} from './GameCenterGroup';
import {
    GameCenterLeaderboard,
    instanceOfGameCenterLeaderboard,
    GameCenterLeaderboardFromJSON,
    GameCenterLeaderboardFromJSONTyped,
    GameCenterLeaderboardToJSON,
} from './GameCenterLeaderboard';
import {
    GameCenterLeaderboardRelease,
    instanceOfGameCenterLeaderboardRelease,
    GameCenterLeaderboardReleaseFromJSON,
    GameCenterLeaderboardReleaseFromJSONTyped,
    GameCenterLeaderboardReleaseToJSON,
} from './GameCenterLeaderboardRelease';
import {
    GameCenterLeaderboardSet,
    instanceOfGameCenterLeaderboardSet,
    GameCenterLeaderboardSetFromJSON,
    GameCenterLeaderboardSetFromJSONTyped,
    GameCenterLeaderboardSetToJSON,
} from './GameCenterLeaderboardSet';
import {
    GameCenterLeaderboardSetRelease,
    instanceOfGameCenterLeaderboardSetRelease,
    GameCenterLeaderboardSetReleaseFromJSON,
    GameCenterLeaderboardSetReleaseFromJSONTyped,
    GameCenterLeaderboardSetReleaseToJSON,
} from './GameCenterLeaderboardSetRelease';

/**
 * @type GameCenterDetailsResponseIncludedInner
 * 
 * @export
 */
export type GameCenterDetailsResponseIncludedInner = App | GameCenterAchievement | GameCenterAchievementRelease | GameCenterAppVersion | GameCenterGroup | GameCenterLeaderboard | GameCenterLeaderboardRelease | GameCenterLeaderboardSet | GameCenterLeaderboardSetRelease;

export function GameCenterDetailsResponseIncludedInnerFromJSON(json: any): GameCenterDetailsResponseIncludedInner {
    return GameCenterDetailsResponseIncludedInnerFromJSONTyped(json, false);
}

export function GameCenterDetailsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailsResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...AppFromJSONTyped(json, true), ...GameCenterAchievementFromJSONTyped(json, true), ...GameCenterAchievementReleaseFromJSONTyped(json, true), ...GameCenterAppVersionFromJSONTyped(json, true), ...GameCenterGroupFromJSONTyped(json, true), ...GameCenterLeaderboardFromJSONTyped(json, true), ...GameCenterLeaderboardReleaseFromJSONTyped(json, true), ...GameCenterLeaderboardSetFromJSONTyped(json, true), ...GameCenterLeaderboardSetReleaseFromJSONTyped(json, true) };
}

export function GameCenterDetailsResponseIncludedInnerToJSON(value?: GameCenterDetailsResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfApp(value)) {
        return AppToJSON(value as App);
    }
    if (instanceOfGameCenterAchievement(value)) {
        return GameCenterAchievementToJSON(value as GameCenterAchievement);
    }
    if (instanceOfGameCenterAchievementRelease(value)) {
        return GameCenterAchievementReleaseToJSON(value as GameCenterAchievementRelease);
    }
    if (instanceOfGameCenterAppVersion(value)) {
        return GameCenterAppVersionToJSON(value as GameCenterAppVersion);
    }
    if (instanceOfGameCenterGroup(value)) {
        return GameCenterGroupToJSON(value as GameCenterGroup);
    }
    if (instanceOfGameCenterLeaderboard(value)) {
        return GameCenterLeaderboardToJSON(value as GameCenterLeaderboard);
    }
    if (instanceOfGameCenterLeaderboardRelease(value)) {
        return GameCenterLeaderboardReleaseToJSON(value as GameCenterLeaderboardRelease);
    }
    if (instanceOfGameCenterLeaderboardSet(value)) {
        return GameCenterLeaderboardSetToJSON(value as GameCenterLeaderboardSet);
    }
    if (instanceOfGameCenterLeaderboardSetRelease(value)) {
        return GameCenterLeaderboardSetReleaseToJSON(value as GameCenterLeaderboardSetRelease);
    }

    return {};
}

