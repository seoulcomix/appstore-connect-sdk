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
import type { AnalyticsReportRequestCreateRequestDataRelationships } from './AnalyticsReportRequestCreateRequestDataRelationships';
import {
    AnalyticsReportRequestCreateRequestDataRelationshipsFromJSON,
    AnalyticsReportRequestCreateRequestDataRelationshipsFromJSONTyped,
    AnalyticsReportRequestCreateRequestDataRelationshipsToJSON,
} from './AnalyticsReportRequestCreateRequestDataRelationships';
import type { InAppPurchaseV2CreateRequestDataAttributes } from './InAppPurchaseV2CreateRequestDataAttributes';
import {
    InAppPurchaseV2CreateRequestDataAttributesFromJSON,
    InAppPurchaseV2CreateRequestDataAttributesFromJSONTyped,
    InAppPurchaseV2CreateRequestDataAttributesToJSON,
} from './InAppPurchaseV2CreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface InAppPurchaseV2CreateRequestData
 */
export interface InAppPurchaseV2CreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseV2CreateRequestData
     */
    type: InAppPurchaseV2CreateRequestDataTypeEnum;
    /**
     * 
     * @type {InAppPurchaseV2CreateRequestDataAttributes}
     * @memberof InAppPurchaseV2CreateRequestData
     */
    attributes: InAppPurchaseV2CreateRequestDataAttributes;
    /**
     * 
     * @type {AnalyticsReportRequestCreateRequestDataRelationships}
     * @memberof InAppPurchaseV2CreateRequestData
     */
    relationships: AnalyticsReportRequestCreateRequestDataRelationships;
}


/**
 * @export
 */
export const InAppPurchaseV2CreateRequestDataTypeEnum = {
    InAppPurchases: 'inAppPurchases'
} as const;
export type InAppPurchaseV2CreateRequestDataTypeEnum = typeof InAppPurchaseV2CreateRequestDataTypeEnum[keyof typeof InAppPurchaseV2CreateRequestDataTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseV2CreateRequestData interface.
 */
export function instanceOfInAppPurchaseV2CreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function InAppPurchaseV2CreateRequestDataFromJSON(json: any): InAppPurchaseV2CreateRequestData {
    return InAppPurchaseV2CreateRequestDataFromJSONTyped(json, false);
}

export function InAppPurchaseV2CreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseV2CreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': InAppPurchaseV2CreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AnalyticsReportRequestCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function InAppPurchaseV2CreateRequestDataToJSON(value?: InAppPurchaseV2CreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': InAppPurchaseV2CreateRequestDataAttributesToJSON(value.attributes),
        'relationships': AnalyticsReportRequestCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

