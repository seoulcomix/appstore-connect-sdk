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
export const SubscriptionGracePeriodDuration = {
    ThreeDays: 'THREE_DAYS',
    SixteenDays: 'SIXTEEN_DAYS',
    TwentyEightDays: 'TWENTY_EIGHT_DAYS'
} as const;
export type SubscriptionGracePeriodDuration = typeof SubscriptionGracePeriodDuration[keyof typeof SubscriptionGracePeriodDuration];


export function SubscriptionGracePeriodDurationFromJSON(json: any): SubscriptionGracePeriodDuration {
    return SubscriptionGracePeriodDurationFromJSONTyped(json, false);
}

export function SubscriptionGracePeriodDurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGracePeriodDuration {
    return json as SubscriptionGracePeriodDuration;
}

export function SubscriptionGracePeriodDurationToJSON(value?: SubscriptionGracePeriodDuration | null): any {
    return value as any;
}

