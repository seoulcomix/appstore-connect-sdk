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
 * @interface InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityData
 */
export interface InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityData {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityData
     */
    type: InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityData
     */
    id: string;
}


/**
 * @export
 */
export const InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityDataTypeEnum = {
    InAppPurchaseAvailabilities: 'inAppPurchaseAvailabilities'
} as const;
export type InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityDataTypeEnum = typeof InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityDataTypeEnum[keyof typeof InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityDataTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityData interface.
 */
export function instanceOfInAppPurchaseV2RelationshipsInAppPurchaseAvailabilityData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityDataFromJSON(json: any): InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityData {
    return InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityDataFromJSONTyped(json, false);
}

export function InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityDataToJSON(value?: InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityData | null): any {
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

