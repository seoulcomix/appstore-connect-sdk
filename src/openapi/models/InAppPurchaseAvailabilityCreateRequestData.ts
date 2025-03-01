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
import type { AppAvailabilityV2CreateRequestDataAttributes } from './AppAvailabilityV2CreateRequestDataAttributes';
import {
    AppAvailabilityV2CreateRequestDataAttributesFromJSON,
    AppAvailabilityV2CreateRequestDataAttributesFromJSONTyped,
    AppAvailabilityV2CreateRequestDataAttributesToJSON,
} from './AppAvailabilityV2CreateRequestDataAttributes';
import type { InAppPurchaseAvailabilityCreateRequestDataRelationships } from './InAppPurchaseAvailabilityCreateRequestDataRelationships';
import {
    InAppPurchaseAvailabilityCreateRequestDataRelationshipsFromJSON,
    InAppPurchaseAvailabilityCreateRequestDataRelationshipsFromJSONTyped,
    InAppPurchaseAvailabilityCreateRequestDataRelationshipsToJSON,
} from './InAppPurchaseAvailabilityCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface InAppPurchaseAvailabilityCreateRequestData
 */
export interface InAppPurchaseAvailabilityCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseAvailabilityCreateRequestData
     */
    type: InAppPurchaseAvailabilityCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppAvailabilityV2CreateRequestDataAttributes}
     * @memberof InAppPurchaseAvailabilityCreateRequestData
     */
    attributes: AppAvailabilityV2CreateRequestDataAttributes;
    /**
     * 
     * @type {InAppPurchaseAvailabilityCreateRequestDataRelationships}
     * @memberof InAppPurchaseAvailabilityCreateRequestData
     */
    relationships: InAppPurchaseAvailabilityCreateRequestDataRelationships;
}


/**
 * @export
 */
export const InAppPurchaseAvailabilityCreateRequestDataTypeEnum = {
    InAppPurchaseAvailabilities: 'inAppPurchaseAvailabilities'
} as const;
export type InAppPurchaseAvailabilityCreateRequestDataTypeEnum = typeof InAppPurchaseAvailabilityCreateRequestDataTypeEnum[keyof typeof InAppPurchaseAvailabilityCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseAvailabilityCreateRequestData interface.
 */
export function instanceOfInAppPurchaseAvailabilityCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function InAppPurchaseAvailabilityCreateRequestDataFromJSON(json: any): InAppPurchaseAvailabilityCreateRequestData {
    return InAppPurchaseAvailabilityCreateRequestDataFromJSONTyped(json, false);
}

export function InAppPurchaseAvailabilityCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAvailabilityCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppAvailabilityV2CreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': InAppPurchaseAvailabilityCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function InAppPurchaseAvailabilityCreateRequestDataToJSON(value?: InAppPurchaseAvailabilityCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppAvailabilityV2CreateRequestDataAttributesToJSON(value.attributes),
        'relationships': InAppPurchaseAvailabilityCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

