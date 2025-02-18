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
 * @interface SubscriptionRelationshipsSubscriptionAvailabilityData
 */
export interface SubscriptionRelationshipsSubscriptionAvailabilityData {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionRelationshipsSubscriptionAvailabilityData
     */
    type: SubscriptionRelationshipsSubscriptionAvailabilityDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionRelationshipsSubscriptionAvailabilityData
     */
    id: string;
}


/**
 * @export
 */
export const SubscriptionRelationshipsSubscriptionAvailabilityDataTypeEnum = {
    SubscriptionAvailabilities: 'subscriptionAvailabilities'
} as const;
export type SubscriptionRelationshipsSubscriptionAvailabilityDataTypeEnum = typeof SubscriptionRelationshipsSubscriptionAvailabilityDataTypeEnum[keyof typeof SubscriptionRelationshipsSubscriptionAvailabilityDataTypeEnum];


/**
 * Check if a given object implements the SubscriptionRelationshipsSubscriptionAvailabilityData interface.
 */
export function instanceOfSubscriptionRelationshipsSubscriptionAvailabilityData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionRelationshipsSubscriptionAvailabilityDataFromJSON(json: any): SubscriptionRelationshipsSubscriptionAvailabilityData {
    return SubscriptionRelationshipsSubscriptionAvailabilityDataFromJSONTyped(json, false);
}

export function SubscriptionRelationshipsSubscriptionAvailabilityDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionRelationshipsSubscriptionAvailabilityData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function SubscriptionRelationshipsSubscriptionAvailabilityDataToJSON(value?: SubscriptionRelationshipsSubscriptionAvailabilityData | null): any {
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

