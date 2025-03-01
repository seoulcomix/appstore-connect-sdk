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
    BetaGroup,
    instanceOfBetaGroup,
    BetaGroupFromJSON,
    BetaGroupFromJSONTyped,
    BetaGroupToJSON,
} from './BetaGroup';
import {
    Build,
    instanceOfBuild,
    BuildFromJSON,
    BuildFromJSONTyped,
    BuildToJSON,
} from './Build';

/**
 * @type BetaTestersResponseIncludedInner
 * 
 * @export
 */
export type BetaTestersResponseIncludedInner = App | BetaGroup | Build;

export function BetaTestersResponseIncludedInnerFromJSON(json: any): BetaTestersResponseIncludedInner {
    return BetaTestersResponseIncludedInnerFromJSONTyped(json, false);
}

export function BetaTestersResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTestersResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...AppFromJSONTyped(json, true), ...BetaGroupFromJSONTyped(json, true), ...BuildFromJSONTyped(json, true) };
}

export function BetaTestersResponseIncludedInnerToJSON(value?: BetaTestersResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfApp(value)) {
        return AppToJSON(value as App);
    }
    if (instanceOfBetaGroup(value)) {
        return BetaGroupToJSON(value as BetaGroup);
    }
    if (instanceOfBuild(value)) {
        return BuildToJSON(value as Build);
    }

    return {};
}

