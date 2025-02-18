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
 * @interface CustomerReviewResponseV1RelationshipsReviewData
 */
export interface CustomerReviewResponseV1RelationshipsReviewData {
    /**
     * 
     * @type {string}
     * @memberof CustomerReviewResponseV1RelationshipsReviewData
     */
    type: CustomerReviewResponseV1RelationshipsReviewDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CustomerReviewResponseV1RelationshipsReviewData
     */
    id: string;
}


/**
 * @export
 */
export const CustomerReviewResponseV1RelationshipsReviewDataTypeEnum = {
    CustomerReviews: 'customerReviews'
} as const;
export type CustomerReviewResponseV1RelationshipsReviewDataTypeEnum = typeof CustomerReviewResponseV1RelationshipsReviewDataTypeEnum[keyof typeof CustomerReviewResponseV1RelationshipsReviewDataTypeEnum];


/**
 * Check if a given object implements the CustomerReviewResponseV1RelationshipsReviewData interface.
 */
export function instanceOfCustomerReviewResponseV1RelationshipsReviewData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function CustomerReviewResponseV1RelationshipsReviewDataFromJSON(json: any): CustomerReviewResponseV1RelationshipsReviewData {
    return CustomerReviewResponseV1RelationshipsReviewDataFromJSONTyped(json, false);
}

export function CustomerReviewResponseV1RelationshipsReviewDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewResponseV1RelationshipsReviewData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function CustomerReviewResponseV1RelationshipsReviewDataToJSON(value?: CustomerReviewResponseV1RelationshipsReviewData | null): any {
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

