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
import type { InAppPurchaseAppStoreReviewScreenshotRelationships } from './InAppPurchaseAppStoreReviewScreenshotRelationships';
import {
    InAppPurchaseAppStoreReviewScreenshotRelationshipsFromJSON,
    InAppPurchaseAppStoreReviewScreenshotRelationshipsFromJSONTyped,
    InAppPurchaseAppStoreReviewScreenshotRelationshipsToJSON,
} from './InAppPurchaseAppStoreReviewScreenshotRelationships';
import type { InAppPurchaseLocalizationAttributes } from './InAppPurchaseLocalizationAttributes';
import {
    InAppPurchaseLocalizationAttributesFromJSON,
    InAppPurchaseLocalizationAttributesFromJSONTyped,
    InAppPurchaseLocalizationAttributesToJSON,
} from './InAppPurchaseLocalizationAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface InAppPurchaseLocalization
 */
export interface InAppPurchaseLocalization {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseLocalization
     */
    type: InAppPurchaseLocalizationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseLocalization
     */
    id: string;
    /**
     * 
     * @type {InAppPurchaseLocalizationAttributes}
     * @memberof InAppPurchaseLocalization
     */
    attributes?: InAppPurchaseLocalizationAttributes;
    /**
     * 
     * @type {InAppPurchaseAppStoreReviewScreenshotRelationships}
     * @memberof InAppPurchaseLocalization
     */
    relationships?: InAppPurchaseAppStoreReviewScreenshotRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof InAppPurchaseLocalization
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const InAppPurchaseLocalizationTypeEnum = {
    InAppPurchaseLocalizations: 'inAppPurchaseLocalizations'
} as const;
export type InAppPurchaseLocalizationTypeEnum = typeof InAppPurchaseLocalizationTypeEnum[keyof typeof InAppPurchaseLocalizationTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseLocalization interface.
 */
export function instanceOfInAppPurchaseLocalization(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function InAppPurchaseLocalizationFromJSON(json: any): InAppPurchaseLocalization {
    return InAppPurchaseLocalizationFromJSONTyped(json, false);
}

export function InAppPurchaseLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseLocalization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : InAppPurchaseLocalizationAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : InAppPurchaseAppStoreReviewScreenshotRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function InAppPurchaseLocalizationToJSON(value?: InAppPurchaseLocalization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': InAppPurchaseLocalizationAttributesToJSON(value.attributes),
        'relationships': InAppPurchaseAppStoreReviewScreenshotRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

