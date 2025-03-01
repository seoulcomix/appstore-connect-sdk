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
    AppPreviewSet,
    instanceOfAppPreviewSet,
    AppPreviewSetFromJSON,
    AppPreviewSetFromJSONTyped,
    AppPreviewSetToJSON,
} from './AppPreviewSet';
import {
    AppScreenshotSet,
    instanceOfAppScreenshotSet,
    AppScreenshotSetFromJSON,
    AppScreenshotSetFromJSONTyped,
    AppScreenshotSetToJSON,
} from './AppScreenshotSet';
import {
    AppStoreVersion,
    instanceOfAppStoreVersion,
    AppStoreVersionFromJSON,
    AppStoreVersionFromJSONTyped,
    AppStoreVersionToJSON,
} from './AppStoreVersion';

/**
 * @type AppStoreVersionLocalizationsResponseIncludedInner
 * 
 * @export
 */
export type AppStoreVersionLocalizationsResponseIncludedInner = AppPreviewSet | AppScreenshotSet | AppStoreVersion;

export function AppStoreVersionLocalizationsResponseIncludedInnerFromJSON(json: any): AppStoreVersionLocalizationsResponseIncludedInner {
    return AppStoreVersionLocalizationsResponseIncludedInnerFromJSONTyped(json, false);
}

export function AppStoreVersionLocalizationsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionLocalizationsResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...AppPreviewSetFromJSONTyped(json, true), ...AppScreenshotSetFromJSONTyped(json, true), ...AppStoreVersionFromJSONTyped(json, true) };
}

export function AppStoreVersionLocalizationsResponseIncludedInnerToJSON(value?: AppStoreVersionLocalizationsResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfAppPreviewSet(value)) {
        return AppPreviewSetToJSON(value as AppPreviewSet);
    }
    if (instanceOfAppScreenshotSet(value)) {
        return AppScreenshotSetToJSON(value as AppScreenshotSet);
    }
    if (instanceOfAppStoreVersion(value)) {
        return AppStoreVersionToJSON(value as AppStoreVersion);
    }

    return {};
}

