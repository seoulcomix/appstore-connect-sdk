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
import type { AppPricePointV3Attributes } from './AppPricePointV3Attributes';
import {
    AppPricePointV3AttributesFromJSON,
    AppPricePointV3AttributesFromJSONTyped,
    AppPricePointV3AttributesToJSON,
} from './AppPricePointV3Attributes';
import type { InAppPurchasePricePointRelationships } from './InAppPurchasePricePointRelationships';
import {
    InAppPurchasePricePointRelationshipsFromJSON,
    InAppPurchasePricePointRelationshipsFromJSONTyped,
    InAppPurchasePricePointRelationshipsToJSON,
} from './InAppPurchasePricePointRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface InAppPurchasePricePoint
 */
export interface InAppPurchasePricePoint {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchasePricePoint
     */
    type: InAppPurchasePricePointTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchasePricePoint
     */
    id: string;
    /**
     * 
     * @type {AppPricePointV3Attributes}
     * @memberof InAppPurchasePricePoint
     */
    attributes?: AppPricePointV3Attributes;
    /**
     * 
     * @type {InAppPurchasePricePointRelationships}
     * @memberof InAppPurchasePricePoint
     */
    relationships?: InAppPurchasePricePointRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof InAppPurchasePricePoint
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const InAppPurchasePricePointTypeEnum = {
    InAppPurchasePricePoints: 'inAppPurchasePricePoints'
} as const;
export type InAppPurchasePricePointTypeEnum = typeof InAppPurchasePricePointTypeEnum[keyof typeof InAppPurchasePricePointTypeEnum];


/**
 * Check if a given object implements the InAppPurchasePricePoint interface.
 */
export function instanceOfInAppPurchasePricePoint(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function InAppPurchasePricePointFromJSON(json: any): InAppPurchasePricePoint {
    return InAppPurchasePricePointFromJSONTyped(json, false);
}

export function InAppPurchasePricePointFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePricePoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppPricePointV3AttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : InAppPurchasePricePointRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function InAppPurchasePricePointToJSON(value?: InAppPurchasePricePoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppPricePointV3AttributesToJSON(value.attributes),
        'relationships': InAppPurchasePricePointRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

