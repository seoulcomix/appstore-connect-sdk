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
 * @interface CustomerReviewResponseV1Attributes
 */
export interface CustomerReviewResponseV1Attributes {
    /**
     * 
     * @type {string}
     * @memberof CustomerReviewResponseV1Attributes
     */
    responseBody?: string;
    /**
     * 
     * @type {Date}
     * @memberof CustomerReviewResponseV1Attributes
     */
    lastModifiedDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof CustomerReviewResponseV1Attributes
     */
    state?: CustomerReviewResponseV1AttributesStateEnum;
}


/**
 * @export
 */
export const CustomerReviewResponseV1AttributesStateEnum = {
    Published: 'PUBLISHED',
    PendingPublish: 'PENDING_PUBLISH'
} as const;
export type CustomerReviewResponseV1AttributesStateEnum = typeof CustomerReviewResponseV1AttributesStateEnum[keyof typeof CustomerReviewResponseV1AttributesStateEnum];


/**
 * Check if a given object implements the CustomerReviewResponseV1Attributes interface.
 */
export function instanceOfCustomerReviewResponseV1Attributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerReviewResponseV1AttributesFromJSON(json: any): CustomerReviewResponseV1Attributes {
    return CustomerReviewResponseV1AttributesFromJSONTyped(json, false);
}

export function CustomerReviewResponseV1AttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewResponseV1Attributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'responseBody': !exists(json, 'responseBody') ? undefined : json['responseBody'],
        'lastModifiedDate': !exists(json, 'lastModifiedDate') ? undefined : (new Date(json['lastModifiedDate'])),
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function CustomerReviewResponseV1AttributesToJSON(value?: CustomerReviewResponseV1Attributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'responseBody': value.responseBody,
        'lastModifiedDate': value.lastModifiedDate === undefined ? undefined : (value.lastModifiedDate.toISOString()),
        'state': value.state,
    };
}

