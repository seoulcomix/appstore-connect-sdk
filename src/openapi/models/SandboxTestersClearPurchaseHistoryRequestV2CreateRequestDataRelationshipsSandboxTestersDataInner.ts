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
 * @interface SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInner
 */
export interface SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInner {
    /**
     * 
     * @type {string}
     * @memberof SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInner
     */
    type: SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInner
     */
    id: string;
}


/**
 * @export
 */
export const SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInnerTypeEnum = {
    SandboxTesters: 'sandboxTesters'
} as const;
export type SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInnerTypeEnum = typeof SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInnerTypeEnum[keyof typeof SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInnerTypeEnum];


/**
 * Check if a given object implements the SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInner interface.
 */
export function instanceOfSandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInnerFromJSON(json: any): SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInner {
    return SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInnerFromJSONTyped(json, false);
}

export function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInnerToJSON(value?: SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

