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
    InAppPurchasePriceInlineCreate,
    instanceOfInAppPurchasePriceInlineCreate,
    InAppPurchasePriceInlineCreateFromJSON,
    InAppPurchasePriceInlineCreateFromJSONTyped,
    InAppPurchasePriceInlineCreateToJSON,
} from './InAppPurchasePriceInlineCreate';
import {
    TerritoryInlineCreate,
    instanceOfTerritoryInlineCreate,
    TerritoryInlineCreateFromJSON,
    TerritoryInlineCreateFromJSONTyped,
    TerritoryInlineCreateToJSON,
} from './TerritoryInlineCreate';

/**
 * @type InAppPurchasePriceScheduleCreateRequestIncludedInner
 * 
 * @export
 */
export type InAppPurchasePriceScheduleCreateRequestIncludedInner = InAppPurchasePriceInlineCreate | TerritoryInlineCreate;

export function InAppPurchasePriceScheduleCreateRequestIncludedInnerFromJSON(json: any): InAppPurchasePriceScheduleCreateRequestIncludedInner {
    return InAppPurchasePriceScheduleCreateRequestIncludedInnerFromJSONTyped(json, false);
}

export function InAppPurchasePriceScheduleCreateRequestIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceScheduleCreateRequestIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...InAppPurchasePriceInlineCreateFromJSONTyped(json, true), ...TerritoryInlineCreateFromJSONTyped(json, true) };
}

export function InAppPurchasePriceScheduleCreateRequestIncludedInnerToJSON(value?: InAppPurchasePriceScheduleCreateRequestIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfInAppPurchasePriceInlineCreate(value)) {
        return InAppPurchasePriceInlineCreateToJSON(value as InAppPurchasePriceInlineCreate);
    }
    if (instanceOfTerritoryInlineCreate(value)) {
        return TerritoryInlineCreateToJSON(value as TerritoryInlineCreate);
    }

    return {};
}

