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
export const CiGitRefKind = {
    Branch: 'BRANCH',
    Tag: 'TAG'
} as const;
export type CiGitRefKind = typeof CiGitRefKind[keyof typeof CiGitRefKind];


export function CiGitRefKindFromJSON(json: any): CiGitRefKind {
    return CiGitRefKindFromJSONTyped(json, false);
}

export function CiGitRefKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiGitRefKind {
    return json as CiGitRefKind;
}

export function CiGitRefKindToJSON(value?: CiGitRefKind | null): any {
    return value as any;
}

