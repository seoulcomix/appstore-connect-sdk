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
import type { InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2 } from './InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2';
import {
    InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2FromJSON,
    InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2FromJSONTyped,
    InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2ToJSON,
} from './InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2';
import type { InAppPurchasePriceRelationshipsInAppPurchasePricePoint } from './InAppPurchasePriceRelationshipsInAppPurchasePricePoint';
import {
    InAppPurchasePriceRelationshipsInAppPurchasePricePointFromJSON,
    InAppPurchasePriceRelationshipsInAppPurchasePricePointFromJSONTyped,
    InAppPurchasePriceRelationshipsInAppPurchasePricePointToJSON,
} from './InAppPurchasePriceRelationshipsInAppPurchasePricePoint';

/**
 * 
 * @export
 * @interface InAppPurchasePriceInlineCreateRelationships
 */
export interface InAppPurchasePriceInlineCreateRelationships {
    /**
     * 
     * @type {InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2}
     * @memberof InAppPurchasePriceInlineCreateRelationships
     */
    inAppPurchaseV2?: InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2;
    /**
     * 
     * @type {InAppPurchasePriceRelationshipsInAppPurchasePricePoint}
     * @memberof InAppPurchasePriceInlineCreateRelationships
     */
    inAppPurchasePricePoint?: InAppPurchasePriceRelationshipsInAppPurchasePricePoint;
}

/**
 * Check if a given object implements the InAppPurchasePriceInlineCreateRelationships interface.
 */
export function instanceOfInAppPurchasePriceInlineCreateRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InAppPurchasePriceInlineCreateRelationshipsFromJSON(json: any): InAppPurchasePriceInlineCreateRelationships {
    return InAppPurchasePriceInlineCreateRelationshipsFromJSONTyped(json, false);
}

export function InAppPurchasePriceInlineCreateRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceInlineCreateRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inAppPurchaseV2': !exists(json, 'inAppPurchaseV2') ? undefined : InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2FromJSON(json['inAppPurchaseV2']),
        'inAppPurchasePricePoint': !exists(json, 'inAppPurchasePricePoint') ? undefined : InAppPurchasePriceRelationshipsInAppPurchasePricePointFromJSON(json['inAppPurchasePricePoint']),
    };
}

export function InAppPurchasePriceInlineCreateRelationshipsToJSON(value?: InAppPurchasePriceInlineCreateRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'inAppPurchaseV2': InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2ToJSON(value.inAppPurchaseV2),
        'inAppPurchasePricePoint': InAppPurchasePriceRelationshipsInAppPurchasePricePointToJSON(value.inAppPurchasePricePoint),
    };
}

