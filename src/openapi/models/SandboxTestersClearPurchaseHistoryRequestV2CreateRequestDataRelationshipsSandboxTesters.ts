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
import type { SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInner } from './SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInner';
import {
    SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInnerFromJSON,
    SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInnerFromJSONTyped,
    SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInnerToJSON,
} from './SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInner';

/**
 * 
 * @export
 * @interface SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters
 */
export interface SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters {
    /**
     * 
     * @type {Array<SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInner>}
     * @memberof SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters
     */
    data: Array<SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInner>;
}

/**
 * Check if a given object implements the SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters interface.
 */
export function instanceOfSandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersFromJSON(json: any): SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters {
    return SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersFromJSONTyped(json, false);
}

export function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInnerFromJSON)),
    };
}

export function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersToJSON(value?: SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInnerToJSON)),
    };
}

