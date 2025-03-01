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
    AppCustomProductPageVersion,
    instanceOfAppCustomProductPageVersion,
    AppCustomProductPageVersionFromJSON,
    AppCustomProductPageVersionFromJSONTyped,
    AppCustomProductPageVersionToJSON,
} from './AppCustomProductPageVersion';

/**
 * @type AppCustomProductPagesResponseIncludedInner
 * 
 * @export
 */
export type AppCustomProductPagesResponseIncludedInner = App | AppCustomProductPageVersion;

export function AppCustomProductPagesResponseIncludedInnerFromJSON(json: any): AppCustomProductPagesResponseIncludedInner {
    return AppCustomProductPagesResponseIncludedInnerFromJSONTyped(json, false);
}

export function AppCustomProductPagesResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPagesResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...AppFromJSONTyped(json, true), ...AppCustomProductPageVersionFromJSONTyped(json, true) };
}

export function AppCustomProductPagesResponseIncludedInnerToJSON(value?: AppCustomProductPagesResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfApp(value)) {
        return AppToJSON(value as App);
    }
    if (instanceOfAppCustomProductPageVersion(value)) {
        return AppCustomProductPageVersionToJSON(value as AppCustomProductPageVersion);
    }

    return {};
}

