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
    AppClipDefaultExperience,
    instanceOfAppClipDefaultExperience,
    AppClipDefaultExperienceFromJSON,
    AppClipDefaultExperienceFromJSONTyped,
    AppClipDefaultExperienceToJSON,
} from './AppClipDefaultExperience';
import {
    AppClipHeaderImage,
    instanceOfAppClipHeaderImage,
    AppClipHeaderImageFromJSON,
    AppClipHeaderImageFromJSONTyped,
    AppClipHeaderImageToJSON,
} from './AppClipHeaderImage';

/**
 * @type AppClipDefaultExperienceLocalizationsResponseIncludedInner
 * 
 * @export
 */
export type AppClipDefaultExperienceLocalizationsResponseIncludedInner = AppClipDefaultExperience | AppClipHeaderImage;

export function AppClipDefaultExperienceLocalizationsResponseIncludedInnerFromJSON(json: any): AppClipDefaultExperienceLocalizationsResponseIncludedInner {
    return AppClipDefaultExperienceLocalizationsResponseIncludedInnerFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceLocalizationsResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...AppClipDefaultExperienceFromJSONTyped(json, true), ...AppClipHeaderImageFromJSONTyped(json, true) };
}

export function AppClipDefaultExperienceLocalizationsResponseIncludedInnerToJSON(value?: AppClipDefaultExperienceLocalizationsResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfAppClipDefaultExperience(value)) {
        return AppClipDefaultExperienceToJSON(value as AppClipDefaultExperience);
    }
    if (instanceOfAppClipHeaderImage(value)) {
        return AppClipHeaderImageToJSON(value as AppClipHeaderImage);
    }

    return {};
}

