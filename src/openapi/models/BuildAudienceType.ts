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
export const BuildAudienceType = {
    InternalOnly: 'INTERNAL_ONLY',
    AppStoreEligible: 'APP_STORE_ELIGIBLE'
} as const;
export type BuildAudienceType = typeof BuildAudienceType[keyof typeof BuildAudienceType];


export function BuildAudienceTypeFromJSON(json: any): BuildAudienceType {
    return BuildAudienceTypeFromJSONTyped(json, false);
}

export function BuildAudienceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildAudienceType {
    return json as BuildAudienceType;
}

export function BuildAudienceTypeToJSON(value?: BuildAudienceType | null): any {
    return value as any;
}

