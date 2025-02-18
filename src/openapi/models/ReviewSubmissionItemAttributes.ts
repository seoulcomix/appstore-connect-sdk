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
 * @interface ReviewSubmissionItemAttributes
 */
export interface ReviewSubmissionItemAttributes {
    /**
     * 
     * @type {string}
     * @memberof ReviewSubmissionItemAttributes
     */
    state?: ReviewSubmissionItemAttributesStateEnum;
}


/**
 * @export
 */
export const ReviewSubmissionItemAttributesStateEnum = {
    ReadyForReview: 'READY_FOR_REVIEW',
    Accepted: 'ACCEPTED',
    Approved: 'APPROVED',
    Rejected: 'REJECTED',
    Removed: 'REMOVED'
} as const;
export type ReviewSubmissionItemAttributesStateEnum = typeof ReviewSubmissionItemAttributesStateEnum[keyof typeof ReviewSubmissionItemAttributesStateEnum];


/**
 * Check if a given object implements the ReviewSubmissionItemAttributes interface.
 */
export function instanceOfReviewSubmissionItemAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReviewSubmissionItemAttributesFromJSON(json: any): ReviewSubmissionItemAttributes {
    return ReviewSubmissionItemAttributesFromJSONTyped(json, false);
}

export function ReviewSubmissionItemAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionItemAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function ReviewSubmissionItemAttributesToJSON(value?: ReviewSubmissionItemAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'state': value.state,
    };
}

