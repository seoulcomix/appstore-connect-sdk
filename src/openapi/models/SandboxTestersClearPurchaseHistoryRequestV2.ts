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
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface SandboxTestersClearPurchaseHistoryRequestV2
 */
export interface SandboxTestersClearPurchaseHistoryRequestV2 {
    /**
     * 
     * @type {string}
     * @memberof SandboxTestersClearPurchaseHistoryRequestV2
     */
    type: SandboxTestersClearPurchaseHistoryRequestV2TypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SandboxTestersClearPurchaseHistoryRequestV2
     */
    id: string;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof SandboxTestersClearPurchaseHistoryRequestV2
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const SandboxTestersClearPurchaseHistoryRequestV2TypeEnum = {
    SandboxTestersClearPurchaseHistoryRequest: 'sandboxTestersClearPurchaseHistoryRequest'
} as const;
export type SandboxTestersClearPurchaseHistoryRequestV2TypeEnum = typeof SandboxTestersClearPurchaseHistoryRequestV2TypeEnum[keyof typeof SandboxTestersClearPurchaseHistoryRequestV2TypeEnum];


/**
 * Check if a given object implements the SandboxTestersClearPurchaseHistoryRequestV2 interface.
 */
export function instanceOfSandboxTestersClearPurchaseHistoryRequestV2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SandboxTestersClearPurchaseHistoryRequestV2FromJSON(json: any): SandboxTestersClearPurchaseHistoryRequestV2 {
    return SandboxTestersClearPurchaseHistoryRequestV2FromJSONTyped(json, false);
}

export function SandboxTestersClearPurchaseHistoryRequestV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxTestersClearPurchaseHistoryRequestV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function SandboxTestersClearPurchaseHistoryRequestV2ToJSON(value?: SandboxTestersClearPurchaseHistoryRequestV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'links': ResourceLinksToJSON(value.links),
    };
}

