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
import type { BetaBuildLocalizationUpdateRequestData } from './BetaBuildLocalizationUpdateRequestData';
import {
    BetaBuildLocalizationUpdateRequestDataFromJSON,
    BetaBuildLocalizationUpdateRequestDataFromJSONTyped,
    BetaBuildLocalizationUpdateRequestDataToJSON,
} from './BetaBuildLocalizationUpdateRequestData';

/**
 * 
 * @export
 * @interface BetaBuildLocalizationUpdateRequest
 */
export interface BetaBuildLocalizationUpdateRequest {
    /**
     * 
     * @type {BetaBuildLocalizationUpdateRequestData}
     * @memberof BetaBuildLocalizationUpdateRequest
     */
    data: BetaBuildLocalizationUpdateRequestData;
}

/**
 * Check if a given object implements the BetaBuildLocalizationUpdateRequest interface.
 */
export function instanceOfBetaBuildLocalizationUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BetaBuildLocalizationUpdateRequestFromJSON(json: any): BetaBuildLocalizationUpdateRequest {
    return BetaBuildLocalizationUpdateRequestFromJSONTyped(json, false);
}

export function BetaBuildLocalizationUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaBuildLocalizationUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BetaBuildLocalizationUpdateRequestDataFromJSON(json['data']),
    };
}

export function BetaBuildLocalizationUpdateRequestToJSON(value?: BetaBuildLocalizationUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BetaBuildLocalizationUpdateRequestDataToJSON(value.data),
    };
}

