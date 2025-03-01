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


/**
 * 
 * @export
 */
export const BetaReviewState = {
    WaitingForReview: 'WAITING_FOR_REVIEW',
    InReview: 'IN_REVIEW',
    Rejected: 'REJECTED',
    Approved: 'APPROVED'
} as const;
export type BetaReviewState = typeof BetaReviewState[keyof typeof BetaReviewState];


export function BetaReviewStateFromJSON(json: any): BetaReviewState {
    return BetaReviewStateFromJSONTyped(json, false);
}

export function BetaReviewStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaReviewState {
    return json as BetaReviewState;
}

export function BetaReviewStateToJSON(value?: BetaReviewState | null): any {
    return value as any;
}

