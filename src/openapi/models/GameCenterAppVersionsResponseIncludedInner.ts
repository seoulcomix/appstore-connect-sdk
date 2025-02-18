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
    AppStoreVersion,
    instanceOfAppStoreVersion,
    AppStoreVersionFromJSON,
    AppStoreVersionFromJSONTyped,
    AppStoreVersionToJSON,
} from './AppStoreVersion';
import {
    GameCenterAppVersion,
    instanceOfGameCenterAppVersion,
    GameCenterAppVersionFromJSON,
    GameCenterAppVersionFromJSONTyped,
    GameCenterAppVersionToJSON,
} from './GameCenterAppVersion';

/**
 * @type GameCenterAppVersionsResponseIncludedInner
 * 
 * @export
 */
export type GameCenterAppVersionsResponseIncludedInner = AppStoreVersion | GameCenterAppVersion;

export function GameCenterAppVersionsResponseIncludedInnerFromJSON(json: any): GameCenterAppVersionsResponseIncludedInner {
    return GameCenterAppVersionsResponseIncludedInnerFromJSONTyped(json, false);
}

export function GameCenterAppVersionsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAppVersionsResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...AppStoreVersionFromJSONTyped(json, true), ...GameCenterAppVersionFromJSONTyped(json, true) };
}

export function GameCenterAppVersionsResponseIncludedInnerToJSON(value?: GameCenterAppVersionsResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfAppStoreVersion(value)) {
        return AppStoreVersionToJSON(value as AppStoreVersion);
    }
    if (instanceOfGameCenterAppVersion(value)) {
        return GameCenterAppVersionToJSON(value as GameCenterAppVersion);
    }

    return {};
}

