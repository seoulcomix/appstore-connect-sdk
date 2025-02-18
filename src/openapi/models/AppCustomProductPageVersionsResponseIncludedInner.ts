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
    AppCustomProductPage,
    instanceOfAppCustomProductPage,
    AppCustomProductPageFromJSON,
    AppCustomProductPageFromJSONTyped,
    AppCustomProductPageToJSON,
} from './AppCustomProductPage';
import {
    AppCustomProductPageLocalization,
    instanceOfAppCustomProductPageLocalization,
    AppCustomProductPageLocalizationFromJSON,
    AppCustomProductPageLocalizationFromJSONTyped,
    AppCustomProductPageLocalizationToJSON,
} from './AppCustomProductPageLocalization';

/**
 * @type AppCustomProductPageVersionsResponseIncludedInner
 * 
 * @export
 */
export type AppCustomProductPageVersionsResponseIncludedInner = AppCustomProductPage | AppCustomProductPageLocalization;

export function AppCustomProductPageVersionsResponseIncludedInnerFromJSON(json: any): AppCustomProductPageVersionsResponseIncludedInner {
    return AppCustomProductPageVersionsResponseIncludedInnerFromJSONTyped(json, false);
}

export function AppCustomProductPageVersionsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageVersionsResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...AppCustomProductPageFromJSONTyped(json, true), ...AppCustomProductPageLocalizationFromJSONTyped(json, true) };
}

export function AppCustomProductPageVersionsResponseIncludedInnerToJSON(value?: AppCustomProductPageVersionsResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfAppCustomProductPage(value)) {
        return AppCustomProductPageToJSON(value as AppCustomProductPage);
    }
    if (instanceOfAppCustomProductPageLocalization(value)) {
        return AppCustomProductPageLocalizationToJSON(value as AppCustomProductPageLocalization);
    }

    return {};
}

