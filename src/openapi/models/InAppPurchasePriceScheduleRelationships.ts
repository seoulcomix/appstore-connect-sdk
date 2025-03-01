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
import type { AppPriceScheduleRelationshipsBaseTerritory } from './AppPriceScheduleRelationshipsBaseTerritory';
import {
    AppPriceScheduleRelationshipsBaseTerritoryFromJSON,
    AppPriceScheduleRelationshipsBaseTerritoryFromJSONTyped,
    AppPriceScheduleRelationshipsBaseTerritoryToJSON,
} from './AppPriceScheduleRelationshipsBaseTerritory';
import type { InAppPurchasePriceScheduleRelationshipsManualPrices } from './InAppPurchasePriceScheduleRelationshipsManualPrices';
import {
    InAppPurchasePriceScheduleRelationshipsManualPricesFromJSON,
    InAppPurchasePriceScheduleRelationshipsManualPricesFromJSONTyped,
    InAppPurchasePriceScheduleRelationshipsManualPricesToJSON,
} from './InAppPurchasePriceScheduleRelationshipsManualPrices';

/**
 * 
 * @export
 * @interface InAppPurchasePriceScheduleRelationships
 */
export interface InAppPurchasePriceScheduleRelationships {
    /**
     * 
     * @type {AppPriceScheduleRelationshipsBaseTerritory}
     * @memberof InAppPurchasePriceScheduleRelationships
     */
    baseTerritory?: AppPriceScheduleRelationshipsBaseTerritory;
    /**
     * 
     * @type {InAppPurchasePriceScheduleRelationshipsManualPrices}
     * @memberof InAppPurchasePriceScheduleRelationships
     */
    manualPrices?: InAppPurchasePriceScheduleRelationshipsManualPrices;
    /**
     * 
     * @type {InAppPurchasePriceScheduleRelationshipsManualPrices}
     * @memberof InAppPurchasePriceScheduleRelationships
     */
    automaticPrices?: InAppPurchasePriceScheduleRelationshipsManualPrices;
}

/**
 * Check if a given object implements the InAppPurchasePriceScheduleRelationships interface.
 */
export function instanceOfInAppPurchasePriceScheduleRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InAppPurchasePriceScheduleRelationshipsFromJSON(json: any): InAppPurchasePriceScheduleRelationships {
    return InAppPurchasePriceScheduleRelationshipsFromJSONTyped(json, false);
}

export function InAppPurchasePriceScheduleRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceScheduleRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'baseTerritory': !exists(json, 'baseTerritory') ? undefined : AppPriceScheduleRelationshipsBaseTerritoryFromJSON(json['baseTerritory']),
        'manualPrices': !exists(json, 'manualPrices') ? undefined : InAppPurchasePriceScheduleRelationshipsManualPricesFromJSON(json['manualPrices']),
        'automaticPrices': !exists(json, 'automaticPrices') ? undefined : InAppPurchasePriceScheduleRelationshipsManualPricesFromJSON(json['automaticPrices']),
    };
}

export function InAppPurchasePriceScheduleRelationshipsToJSON(value?: InAppPurchasePriceScheduleRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'baseTerritory': AppPriceScheduleRelationshipsBaseTerritoryToJSON(value.baseTerritory),
        'manualPrices': InAppPurchasePriceScheduleRelationshipsManualPricesToJSON(value.manualPrices),
        'automaticPrices': InAppPurchasePriceScheduleRelationshipsManualPricesToJSON(value.automaticPrices),
    };
}

