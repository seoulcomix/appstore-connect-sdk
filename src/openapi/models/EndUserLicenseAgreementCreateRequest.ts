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
import type { EndUserLicenseAgreementCreateRequestData } from './EndUserLicenseAgreementCreateRequestData';
import {
    EndUserLicenseAgreementCreateRequestDataFromJSON,
    EndUserLicenseAgreementCreateRequestDataFromJSONTyped,
    EndUserLicenseAgreementCreateRequestDataToJSON,
} from './EndUserLicenseAgreementCreateRequestData';

/**
 * 
 * @export
 * @interface EndUserLicenseAgreementCreateRequest
 */
export interface EndUserLicenseAgreementCreateRequest {
    /**
     * 
     * @type {EndUserLicenseAgreementCreateRequestData}
     * @memberof EndUserLicenseAgreementCreateRequest
     */
    data: EndUserLicenseAgreementCreateRequestData;
}

/**
 * Check if a given object implements the EndUserLicenseAgreementCreateRequest interface.
 */
export function instanceOfEndUserLicenseAgreementCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function EndUserLicenseAgreementCreateRequestFromJSON(json: any): EndUserLicenseAgreementCreateRequest {
    return EndUserLicenseAgreementCreateRequestFromJSONTyped(json, false);
}

export function EndUserLicenseAgreementCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndUserLicenseAgreementCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': EndUserLicenseAgreementCreateRequestDataFromJSON(json['data']),
    };
}

export function EndUserLicenseAgreementCreateRequestToJSON(value?: EndUserLicenseAgreementCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': EndUserLicenseAgreementCreateRequestDataToJSON(value.data),
    };
}

