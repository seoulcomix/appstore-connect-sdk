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
/**
 * 
 * @export
 * @interface InAppPurchasePriceScheduleRelationshipsManualPricesDataInner
 */
export interface InAppPurchasePriceScheduleRelationshipsManualPricesDataInner {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchasePriceScheduleRelationshipsManualPricesDataInner
     */
    type: InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchasePriceScheduleRelationshipsManualPricesDataInner
     */
    id: string;
}


/**
 * @export
 */
export const InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerTypeEnum = {
    InAppPurchasePrices: 'inAppPurchasePrices'
} as const;
export type InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerTypeEnum = typeof InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerTypeEnum[keyof typeof InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerTypeEnum];


/**
 * Check if a given object implements the InAppPurchasePriceScheduleRelationshipsManualPricesDataInner interface.
 */
export function instanceOfInAppPurchasePriceScheduleRelationshipsManualPricesDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerFromJSON(json: any): InAppPurchasePriceScheduleRelationshipsManualPricesDataInner {
    return InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerFromJSONTyped(json, false);
}

export function InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceScheduleRelationshipsManualPricesDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerToJSON(value?: InAppPurchasePriceScheduleRelationshipsManualPricesDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

