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
export const KidsAgeBand = {
    FiveAndUnder: 'FIVE_AND_UNDER',
    SixToEight: 'SIX_TO_EIGHT',
    NineToEleven: 'NINE_TO_ELEVEN'
} as const;
export type KidsAgeBand = typeof KidsAgeBand[keyof typeof KidsAgeBand];


export function KidsAgeBandFromJSON(json: any): KidsAgeBand {
    return KidsAgeBandFromJSONTyped(json, false);
}

export function KidsAgeBandFromJSONTyped(json: any, ignoreDiscriminator: boolean): KidsAgeBand {
    return json as KidsAgeBand;
}

export function KidsAgeBandToJSON(value?: KidsAgeBand | null): any {
    return value as any;
}

